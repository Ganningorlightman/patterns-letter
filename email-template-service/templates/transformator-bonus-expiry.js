const layout = require('./components/layout.js');
const utmGenerator = require('../utils/utm-generator.js');
const moment = require('moment');

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
    <tr>
        <td style = "${rightAndLeft}">
            <div style="max-width: 600px; width: 100%; color: #5E5E5E; font: 20px HelveticaNeue, sans-serif; line-height: 23px; margin-bottom: 30px; text-align: left">
                Здравствуйте!
            </div>
        </td>
    </tr>
    <tr style="text-align: left">
        <td style="${text} ${rightAndLeft}">${moment(props.expiry).format("DD.MM.YYYY")} неиспользованные бонусы в размере ${props.bonus.toFixed(2)}₽ будут списаны с вашего баланса.</td>
    </tr>
    <tr style="text-align: left">
        <td style="${text} ${rightAndLeft}">
            <span>Успейте потратить их, пока они не сгорели:</span><br/>
            <span>&mdash;&nbsp;увеличьте бюджет вашей рекламной кампании</span><br/>
            <span>&mdash;&nbsp;закажите услугу на <a style="${link}" href="${utmGenerator('https://www.rookee.ru/modules/showcase/', 'transformator_bonus_expiry')}" target="_blank">витрине услуг</a></span>
         </td>
    </tr>
`);

module.exports = (props) => {
    return {
        subject: 'Успейте потратить бонусы.',
        html: html(props)
    }
};

