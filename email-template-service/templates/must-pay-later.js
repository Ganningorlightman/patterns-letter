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
    ${require('./components/avatar.js')('http://content.rookee.ru/email-template/avatar/elvira.png', 'Эльвира Акжигитова', 'Специалист сервиса Rookee')}
    <tr>
        <td style = "${rightAndLeft}">
            <div style="max-width: 600px; width: 100%; color: #5E5E5E; font: 20px HelveticaNeue, sans-serif; line-height: 23px; margin-bottom: 30px; text-align: left">
                Добрый день!
            </div>
        </td>
    </tr>
    <tr style="text-align: left">
        <td style="${text} ${rightAndLeft}">
            Были очень рады с Вами познакомиться!
        </td>
    </tr>
    <tr style="text-align: left;">
        <td style = "${rightAndLeft}">
            <div style="${text}">
                Подведу небольшой итог по беседе с сотрудником сервиса: рекламная кампания создана,<br />
                все готово к старту. Осталось только запустить проект, для этого нужно <a 
                    href="${utmGenerator('https://www.rookee.ru/web/replenishbalance.aspx', 'popolnit_poszhe', 'popolnit')}" 
                    target="_blank" 
                    style="${link}"
                >пополнить баланс</a>.<br/> 
                В сервисе Rookee вы можете сделать это любым удобным способом.
            </div>
        </td>
    </tr>
    
    <tr style="padding: 35px 0; text-align: center">
        <table border="0" cellpadding="0" cellspacing="0" style="padding: 35px 0; margin: 0 auto;">
            <tr style="margin: 0; padding: 0">
                <td>
                    <img src="http://content.rookee.ru/email-template/pay-systems/webmoney.png" >
                </td>
                <td style="color: white">____</td>
                <td>
                    <img src="http://content.rookee.ru/email-template/pay-systems/card.png" >
                </td>
                <td style="color: white">____</td>
                <td>
                    <img src="http://content.rookee.ru/email-template/pay-systems/yandex.png" >
                </td>
            </tr>
            <tr style="margin: 0; padding: 0">
                <td style="height: 30px; line-height: 30px; color: white">r</td>
            </tr>
            <tr style="margin: 0; padding: 0">
                <td>
                    <img src="http://content.rookee.ru/email-template/pay-systems/qiwi.png" >
                </td>
                <td style="color: white">____</td>
                <td>
                    <img src="http://content.rookee.ru/email-template/pay-systems/robokassa.png" >
                </td>
                <td style="color: white">____</td>
                <td>
                    <img src="http://content.rookee.ru/email-template/pay-systems/sber.png" >
                </td>
            </tr>
        </table>
    </tr>
    
    <tr style="text-align: left;">
        <td>
            <div style="${text} ${rightAndLeft}">            
            Остались вопросы? Узнайте больше о работе сервиса в разделе FAQ<br/>
            или просто свяжитесь с нами:<br/> <a href="tel:88007005930" target="_blank" style="${link}">8 800 700 59 30</a>, <a href="mailto:support@rookee.ru" target="_blank" style="${link}">support@rookee.ru</a>.
            </div>
        </td>
    </tr>

    
    <tr>
        <td>
            <div style="text-align: center;">
                <a href="${utmGenerator('https://www.rookee.ru/web/replenishbalance.aspx', 'popolnit_poszhe', 'oplatit')}"  target="_blank">
                    <img src="http://content.rookee.ru/email-template/create-project-without-payment/submit.png" alt="Оплатить и запустить"/>
                </a>
            </div>
        </td>
    </tr>
    
    ${require('./components/book.js')}
`);

module.exports = (props) => {
    return {
        subject: 'Все готово к старту. Осталось только запустить проект.',
        html: html(props)
    }
};

