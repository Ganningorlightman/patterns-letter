const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const routing = require('./routing.js');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(routing.port);

//Примеры рассылки на локали
// http://192.168.116.193:6262/test?to=idevst@gmail.com&templateId=inactivity&params={"achievedTopQueries":3,"reducedCpcCampaigns":1,"improvedReputationCampaigns":2}
// http://192.168.116.193:6262/test?to=idevst@gmail.com&templateId=mustPayLater
// http://192.168.116.193:6262/test?to=idevst@gmail.com&templateId=register&params={"email":"mary.4ern@icloud.com"}
// http://192.168.116.193:6262/test?to=idevst@gmail.com&templateId=createProjectWithoutPayment&params={"queries":"2","clients":666,"context":44,"showSeoStub":false}
// http://192.168.116.193:6262/test?to=idevst@gmail.com&templateId=autopilot

// http://192.168.116.193:6262/test?to=idevst@gmail.com&templateId=serviceCalendar&params={"checkerGroupStatus":"Success","notificationType":"FastCheckersCompleted"}
// http://192.168.116.193:6262/test?to=idevst@gmail.com&templateId=serviceCalendar&params={"checkerGroupStatus":"Success","notificationType":"SlowCheckersCompleted"}
// http://192.168.116.193:6262/test?to=idevst@gmail.com&templateId=serviceCalendar&params={"checkerGroupStatus":"Problem","notificationType":"FastCheckersCompleted","recommendations":["RobotsTxtChecker","Mirrors","FaviconChecker","NotFoundStatusCode","SiteMap"]}
// http://192.168.116.193:6262/test?to=idevst@gmail.com&templateId=serviceCalendar&params={"checkerGroupStatus":"Problem","notificationType":"SlowCheckersCompleted","recommendations":["ExtCounterAccess","ExtCountersGoalsExists","CmsDoubles,Perelink","Subdomain","TextContent","HeadersStructure","CommercialInfo","ExtCountersTargetsPageBounceRate","PageSpeed","MetaTags"]}

const allTemplates = {
    register: require('./templates/register.js'), // регистрация, принимает email
    createProjectWithoutPayment: require('./templates/create-project-without-payment.js'), // создали, но не оплатили проект
    mustPayLater: require('./templates/must-pay-later.js'), // в CRM выставили статус Оплатит позже, проект есть, но пополнения не было
    inactivity: require('./templates/inactivity.js'), // отправляется при бездействии пользователя
    autopilot: require('./templates/autopilot.js'), // отправляем ручками статику
    closedTesting: require('./templates/closed-testing.js'), // special_project отправляется после оформления заявки на новый продукт
    giftFromRookee: require('./templates/gift-from-rookee.js'), // special_project отправляется после регистрации
    transformatorBonusExpiry: require('./templates/transformator-bonus-expiry.js'),
    serviceCalendar: require('./templates/service-calendar.js'), //Наличие проблем на сайте по результатам работы чекеров
    report: require('./templates/report.js'), // письмо со ссылкой на отчет
};


app.post(routing.urls.getTemplate, (req, res) => {
    const template = allTemplates[req.body.templateId](req.body.params);
    if (template) {
        res.json(template)
    } else {
        res.status(500).send(`template ${req.body.templateId} not found`);
    }
});

app.get(routing.urls.test, (req, res) => {
    const params = req.query.params ? JSON.parse(req.query.params) : null;
    const template = allTemplates[req.query.templateId](params);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'idevstreg@gmail.com',
            pass: 'eprsteprst'
        },
        tls: {rejectUnauthorized: false},
    });

    if (template) {
        const mailOptions = {
            from: 'sergey.mishin.71@gmail.com',
            to: req.query.to,
            subject: template.subject,
            html: template.html
        };

        transporter.sendMail(mailOptions);
        res.send('done');
    } else {
        res.send('template not found');
    }
});

app.post(routing.urls.rpcService, (req, res) => {
    if (req.body.method.toLowerCase() !== 'gettemplate') {
        res.status(404).json({jsonrpc: '2.0', error: {message: 'Method not found. The method does not exist / is not available.'}});
    }
    let params = { ...req.body.params };
    const template = allTemplates[params.templateId];
    if (template) {
        delete params.templateId;
        res.json({jsonrpc: '2.0', result: template(params)});
    } else {
        res.status(404).json({jsonrpc: '2.0', error: {message: `Template ${params.templateId} not found`}});
    }
});


console.log('web server is running on port ' + routing.port);