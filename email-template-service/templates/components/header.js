const utmGenerator = require('../../utils/utm-generator.js');

module.exports = `
    <tr>
        <td style="display: block; text-align: center; width: 100%; border-top: 35px solid white;">
            <div style="display: block; width: 120px; margin: 0 auto; padding-bottom: 30px;">
                <a 
                    href="${utmGenerator('https://www.rookee.ru/', 'na_glavnuy')}"
                    target="_blank"
                >
                    <img src="http://content.rookee.ru/email-template/logo.png" >
                </a>
            </div>
        </td>
    </tr>
    <tr style="padding-bottom: 35px;">
        <div style="text-align: center; background-color: white; padding-bottom: 35px;"></div>
    </tr>
`;