const utmGenerator = require('../../utils/utm-generator.js');

const greyText = 'line-height: 15px; color: #5E5E5E; font: 13px HelveticaNeue, sans-serif;';
const right = 'text-align: right; padding-right: 15px; line-height: 30px;';
const left = 'padding-left: 15px; line-height: 30px;';

module.exports = `
<tr style="
    height: 115px;
    background: #F1F8FC"
>
    <td>
        <table cellpadding="0" border="0" cellspacing="0" style="margin:0; padding:0; width: 100%">
            <tr>
                <td style="${left}"><span style="${greyText}">С заботой о вашем бизнесе</span></td>
                <td style="${right}">
                    <span style="${greyText}">8 800 700 59 30</span>
                </td>
            </tr>
            <tr>
                <td style="${left}">
                    <span style="${greyText}">Команда Rookee</span>
                </td>
                <td style="${right} white-space: nowrap">
                    <a style="${greyText} font-size: 11px;" href="mailto:support@rookee.ru" target="_blank">support@rookee.ru</a>
                    <a href="http://t.me/RookeeSupportBot" target="_blank"><img src="http://content.rookee.ru/email-template/social/telegram.png" /></a>
                </td>
            </tr>
            <tr>
                <td style="${left} line-height:40px;">
                    <a href="${utmGenerator('https://www.facebook.com/rookee.ru/', 'facebook_rookee')}" target="_blank"><img src="http://content.rookee.ru/email-template/social/fb.png" /></a>
                    <span style="color: #F1F8FC;">_</span>
                    <a href="${utmGenerator('https://vk.com/rookee_club', 'vk_rookee')}" target="_blank"><img src="http://content.rookee.ru/email-template/social/vk.png" /></a>
                    <span style="color: #F1F8FC;" >_</span>
                    <a href="${utmGenerator('https://twitter.com/rookeeru', 'twitter_rookee')}" target="_blank"><img src="http://content.rookee.ru/email-template/social/tw.png" /></a>
                </td>

                <td style="${right}">
                    <span style="${greyText}">пн-пт. 10:00-19:00</span>
                </td>
            </tr>
        </table>
    </td>
</tr>
`;