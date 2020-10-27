const utmGenerator = require('../../utils/utm-generator.js');

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

module.exports = `
    <tr style="width: 100%;">
        <table style="width: 100%; padding-bottom: 20px;">
            <tr  style="width: 100%;">
                <td style="text-align: right; padding-right: 40px;">
                    <a href="${utmGenerator('https://www.rookee.ru/about/prodvizhenie-sajta-svoimi-rukami', 'na_knigu')}">
                        <img src="http://content.rookee.ru/email-template/book.png" alt="Скачать нашу книгу"/>
                    </a>
                </td>
                <td>
                    <div style="${text}">Хотите лучше разбираться в<br/>продвижении сайтов?</div>
                    <a href="${utmGenerator('https://www.rookee.ru/about/prodvizhenie-sajta-svoimi-rukami', 'na_knigu')}" target="_blank" style="${link}">Скачать нашу книгу</a>
                </td>
            </tr>
        </table>
    </tr>
`;