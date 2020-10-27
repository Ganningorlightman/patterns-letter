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
    line-height: 25px;
`;

const rightAndLeft = `border-left: 35px solid white; border-right: 35px solid white;`;

const html = (props) => layout(`
    ${require('./components/avatar.js')('http://content.rookee.ru/email-template/avatar/ekaterina-zhukova.png', 'Екатерина Жукова', 'Генеральный директор<br/>сервиса Rookee')}
    <tr>
        <td style = "${rightAndLeft}">
            <div style="max-width: 600px; width: 100%; color: #5E5E5E; font: 20px HelveticaNeue, sans-serif; line-height: 23px; margin-bottom: 30px; text-align: left">
                Уважаемый клиент!
            </div>
        </td>
    </tr>
    <tr style="text-align: left">
        <td style="${text} ${rightAndLeft}">
        Ваша заявка принята, о запуске тестирования мы сообщим<br/>дополнительно.
        </td>
    </tr>
    <tr style="padding: 40px 0; height: 155px; line-height: 155px; text-align: center">
        <td>
            <div>
                <img src="http://content.rookee.ru/email-template/closed-testing/test-sheet.png" >
            </div>
        </td>
    </tr>
    <tr style="text-align: left">
        <td style="${text} ${rightAndLeft}">
        Вам будет доступен полный комплекс работ для продвижения сайта,<br/>
        позволяющий добиться максимального охвата целевой аудитории в<br/>
        поиске. Вам не придется тратить время на погружение в процессы и<br/>
        тонкости требуемых работ. 
        </td>
    </tr>
    <tr style="text-align: left">
        <td style="${text} ${rightAndLeft}">
        Все проверки по сайту, его оптимизация и развитие будут выполняться<br/>
        без Вашего непосредственного участия, но с возможностью контроля<br/>
        каждого этапа продвижения.
        </td>
    </tr>
    <tr style="text-align: left">
        <td style="${text} ${rightAndLeft}">
        В сервисе Rookee Вы уже сейчас найдете профессиональные<br/>
        инструменты, которые помогут в развитии сайта и оптимизации<br/>
        рекламы.
        </td>
    </tr>
    <tr style="text-align: left">
        <td style="${text} ${rightAndLeft}">
        Регистрируйтесь в системе, а мы с радостью поможем подобрать<br/>
        эффективный набор работ для достижения поставленных целей. По<br/>
        всем вопросам пишите нам на 
        <a 
            style="${link}"  
            href="mailto:support@rookee.ru"
            target="_blank">support@rookee.ru</a> или звоните по<br/>
        телефону 
       <a 
            style="${link}" 
            href="tel:88007005930"
            target="_blank"
        >8-800-700-59-30</a>.
        </td>
    </tr>    
    <tr>
        <td>
            <div style="text-align: center;">
                <a 
                    href="${utmGenerator('https://www.rookee.ru/', 'registraciya', 'zaregistrirovatsya')}"
                    target="_blank"
                >
                    <img src="http://content.rookee.ru/email-template/closed-testing/submit.png" alt="Зарегистрироваться"/>
                </a>
            </div>
        </td>
    </tr>
`);

module.exports = (props) => {
    return {
        subject: 'Заявка на участие в закрытом тестировании',
        html: html(props)
    }
};

