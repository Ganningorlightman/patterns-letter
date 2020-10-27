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
                Мы очень рады приветствовать Вас в сервисе<br/>
                Rookee!
            </div>
        </td>
    </tr>
    <tr style="text-align: left">
        <td style="${text} ${rightAndLeft}">
        Чтобы Вы получили максимум эффекта от работы с нашим сервисом,<br/>
        сначала мы <b>бесплатно проанализируем Ваш сайт по более чем 40<br/>
        параметрам</b>, а потом расскажем, каким из этих показателей нужна<br/>
        дополнительная оптимизация.
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
        <td style="${text} ${rightAndLeft}">
        Аудит будет проведен и отправлен Вам на почту в течение 1 рабочего<br/>
        дня после добавления сайта в разделе <a 
            style="${link}" 
            href="${utmGenerator('https://www.rookee.ru/', 'poiskovoe_prodvijenie')}"
            target="_blank"
        >«Поисковое продвижение»</a>.<br/>
        Пожалуйста, зайдите в систему и добавьте Ваш сайт.
        </td>
    </tr>
    <tr>
        <td>
            <div style="text-align: center;">
                <a 
                    href="${utmGenerator('https://www.rookee.ru/', 'poiskovoe_prodvijenie', 'dobavit_sait')}"
                    target="_blank"
                >
                    <img src="http://content.rookee.ru/email-template/gift-from-rookee/submit.png" alt="Добавить сайт"/>
                </a>
            </div>
        </td>
    </tr>
`);

module.exports = (props) => {
    return {
        subject: 'Подарок от сервиса Rookee',
        html: html(props)
    }
};

