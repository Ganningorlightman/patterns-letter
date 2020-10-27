const layout = require('./components/layout.js');
const utmGenerator = require('../utils/utm-generator.js');

const text = `
    color: #5E5E5E;
    font: 14px HelveticaNeue, sans-serif;
    line-height: 20px;
    padding-bottom: 20px;
`;

const link = `
    text-decoration: none;
    color: #4A90E2;
    font: 14px HelveticaNeue, sans-serif;
    font-weight: bold;
    line-height: 25px;
`;

const rightAndLeft = `border-left: 35px solid white; border-right: 35px solid white;`;

const html = (props) => layout(`
    ${require('./components/avatar.js')('http://content.rookee.ru/email-template/avatar/ekaterina-zhukova.png', 'Екатерина Жукова', 'Генеральный директор<br/>сервиса Rookee')}
    <tr>
        <td style = "${rightAndLeft}">
            <div style="max-width: 600px; width: 100%; color: #5E5E5E; font: 20px HelveticaNeue, sans-serif; line-height: 23px; margin-bottom: 30px; text-align: left">
                Добро пожаловать в Rookee!
            </div>
        </td>
    </tr>
    <tr style="text-align: left">
        <td style="${text} ${rightAndLeft}">Теперь у вас есть доступ к автоматизированным решениям для продвижения вашего сайта.</td>
    </tr>
    <tr style="text-align: left">
        <td style="${text} ${rightAndLeft}">SEO, контекстная реклама, аналитика, управление репутацией – наши технологии к вашим услугам.</td>
    </tr>
    ${props.password ?
    `<tr style="padding-bottom: 20px;">
        <td>
            <div style="padding-bottom: 20px;">
                <table align="center">
                    <tr>
                        <td style="padding: 25px 30px 10px 0; color: #9B9B9B; font-size: 14px;">Email:</td><td style="padding: 25px 0 10px 0;"><a href="mailto:${props.email}" style="${link} color: #9B9B9B; font-weight: normal" target="_blank">${props.email}</a></td>
                     </tr>
                    <tr>
                        <td style="padding-right: 15px; color: #9B9B9B; font-size: 14px;">Пароль:</td><td style="color: #9B9B9B; font-size: 14px;">${props.password}</td>
                    </tr>
                </table>
            </div>
        </td>
    </tr>` :
    `<tr style="padding-bottom: 20px;">
        <td>
            <div style="padding: 25px 30px 10px 0;">
                <table align="center">
                    <tr>
                        <td style="padding-right: 30px; color: #9B9B9B; font-size: 14px;">Email:</td><td><a href="mailto:${props.email}" style="${link} color: #9B9B9B; font-weight: normal" target="_blank">${props.email}</a></td>
                     </tr>
                </table>
            </div>
        </td>
    </tr>`
    }
    <tr style="text-align: center;">
        <td style="padding-bottom: 30px;">
            <div>
                <a 
                    style="${link}" 
                    href="${utmGenerator('https://www.rookee.ru/web/default.aspx', 'registraciya')}" 
                    target="_blank"
                >Войти</a>
            </div>
        </td>
    </tr>
    <tr style="padding: 40px 0; height: 155px; line-height: 155px; text-align: center">
        <td>
            <div>
                <img src="http://content.rookee.ru/email-template/gift-from-rookee/new-gift.png" >
            </div>
        </td>
    </tr>
    <tr style="text-align: left">
        <td style="${text} ${rightAndLeft} padding-top:20px;">Помимо продвижения важно уделять внимание техническому состоянию сайта.</td>
    </tr>
    <tr style="text-align: left">
        <td style="${text} ${rightAndLeft}">Для наших клиентов мы делаем технический аудит бесплатно в сервисе <a 
            style="${link}" 
            href="${utmGenerator('http://www.rooletka.ru/', 'registraciya', 'analiz')}"
            target="_blank"
        >Rooletka</a>.</td>
    </tr>
    <tr>
        <td>
            <div style="text-align: center;">
                <a 
                    href="${utmGenerator('http://www.rooletka.ru/', 'registraciya', 'analiz')}"
                    target="_blank"
                >
                    <img src="http://content.rookee.ru/email-template/register/submit.png" alt="Проанализировать сайт"/>
                </a>
            </div>
        </td>
    </tr>
`);

module.exports = (props) => {
    return {
        subject: 'Добро пожаловать в Rookee!',
        html: html(props)
    }
};

