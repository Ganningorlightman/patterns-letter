const layout = require('./components/layout.js');
const localize = require('../utils/localize.js');
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
const right = `border-right: 35px solid white;`;
const left = `border-left: 35px solid white;`;

const html = (props) => layout(`
    ${require('./components/avatar.js')('http://content.rookee.ru/email-template/avatar/eremcheva.png', 'Марина Еремчева', 'Руководитель клиентского<br/>сервиса Rookee')}
    <tr>
        <td style = "${rightAndLeft}">
            <div style="max-width: 600px; width: 100%; color: #5E5E5E; font: 20px HelveticaNeue, sans-serif; line-height: 23px; margin-bottom: 30px; text-align: left">
                Добрый день!
            </div>
        </td>
    </tr>
    <tr style="text-align: left">
        <td style="${text} ${rightAndLeft}">
            Вы еще не создали ни одной рекламной кампании в сервисе Rookee. 
        </td>
    </tr>
    <tr style="text-align: left">
        <td style="${text} ${rightAndLeft}">
            За это время мы уже могли бы запустить поисковое продвижение,<br/>
            оптимизацию контекстной рекламы или начать работу над репутацией<br/>
            Вашего бренда. 
        </td>
    </tr>
    <tr style="padding: 40px 0; height: 155px; line-height: 155px; text-align: center">
        <td>
            <div>
                <img src="http://content.rookee.ru/email-template/inactivity/balloon.png" >
            </div>
        </td>
    </tr>

    
    <tr style="padding-bottom: 30px;">
        <td>
            <div style="color: #5E5E5E; font: 20px HelveticaNeue, sans-serif; line-height: 23px; padding-bottom: 30px; text-align: center">
                За два дня в сервисе
            </div>
        </td>
    </tr>
    <tr  style="width: 100%;">
        <table style="width: 100%;">
            <tr  style="width: 100%;">
                <td style="${text} font-weight: bold; vertical-align: top; text-align: right; padding-right: 30px; ${left}">${props.achievedTopQueries} ${localize.wordend(props.achievedTopQueries, 'запрос', '', 'а', 'ов')}</td>
                <td style="${text} text-align: left; ${right}">${localize.wordend(props.achievedTopQueries, '', 'вышел', 'вышли', 'вышли')} в ТОП</td>
            </tr>
            <tr  style="width: 100%;">
                <td style="${text} font-weight: bold; text-align: right; padding-right: 30px; ${left}">${props.reducedCpcCampaigns} ${localize.wordend(props.reducedCpcCampaigns, 'кампан', 'ия', 'ии', 'ий')}</td>
                <td style="${text} text-align: left; ${right}">${localize.wordend(props.reducedCpcCampaigns, 'снизил', 'а', 'и', 'и')} стоимость клика</td>
            </tr>
            <tr  style="width: 100%;">
                <td style="${text} font-weight: bold; text-align: right; padding-right: 30px; ${left}">${props.improvedReputationCampaigns} ${localize.wordend(props.improvedReputationCampaigns, 'кампан', 'ия', 'ии', 'ий')}</td>
                <td style="${text} text-align: left; ${right}">${localize.wordend(props.improvedReputationCampaigns, 'улучшил', 'а', 'и', 'и')} свою репутацию</td>
            </tr>
        </table>
    </tr>
    
    <tr>
        <td>
            <div style="text-align: center;">
                <a href="${utmGenerator('https://www.rookee.ru/web/default.aspx', 'bezdeystvie', 'sozdat_proect')}" target="_blank">
                    <img src="http://content.rookee.ru/email-template/inactivity/submit.png" alt="Создать проект"/>
                </a>
            </div>
        </td>
    </tr>
    
    <tr style="text-align: left; padding-bottom: 60px;">
        <td>
        <div style="${text} ${rightAndLeft}">
            Не теряйте время и потенциальных клиентов – добавляйте рекламные<br/>
            кампании как можно скорее! Не дайте конкурентам опередить Вас.
        </div>
        </td>
    </tr>
    <tr style="text-align: left; padding-bottom: 80px;">
        <td>
        <div style="${text} ${rightAndLeft} padding-bottom: 80px;">
            Хорошего дня и процветания Вашему бизнесу! 🖖
        </div>
        </td>
    </tr>
    
    ${require('./components/book.js')}
`);

module.exports = (props) => {
    return {
        subject: 'Вы еще не создали ни одной рекламной кампании в сервисе Rookee.',
        html: html(props)
    }
};

