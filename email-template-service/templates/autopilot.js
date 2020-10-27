const layout = require('./components/layout.js');
const utmGenerator = require('../utils/utm-generator.js');

const text = `
    color: #5E5E5E;
    font: 14px HelveticaNeue, sans-serif;
    line-height: 20px;
    padding-bottom: 20px;
`;

const rightAndLeft = `border-left: 35px solid white; border-right: 35px solid white;`;
const left = `border-left: 35px solid white;`;

const html = (props) => layout(`
    ${require('./components/avatar.js')('http://content.rookee.ru/email-template/avatar/ekaterina-zhukova.png', 'Екатерина Жукова', 'Генеральный директор<br/>сервиса Rookee')}
    <tr>
        <td style = "${rightAndLeft}">
            <div style="max-width: 600px; width: 100%; color: #5E5E5E; font: 20px HelveticaNeue, sans-serif; line-height: 23px; margin-bottom: 30px; text-align: left">
                Уважаемый клиент!
            </div>
        </td>
    </tr>
    <tr style="text-align: left;">
        <td style="${text} ${rightAndLeft}">          
            Нам важно, чтобы ваши рекламные кампании в Яндекс.Директе стали<br/>
            максимально эффективными. Поэтому мы подготовили полезное<br/>
            предложение!
        </td>
    </tr>
    <tr style="padding: 40px 0; height: 155px; line-height: 155px; text-align: center">
        <td>
            <div>
                <img src="http://content.rookee.ru/email-template/autopilot/gift.png" >
            </div>
        </td>
    </tr>
    <tr style="text-align: left">
        <td style="${text} ${rightAndLeft}">
            Подключите Автопилот до <b>15 апреля</b> и получите бесплатный аудит.<br/>
            Специалисты сервиса проанализируют и настроят рекламную<br/>
            кампанию, устранят проблемы, мешающие быстрому достижению<br/>
            результатов.
        </td>
    </tr>
    <tr style="text-align: left">
        <td style="${text} ${rightAndLeft}">
            Только планируете запустить контекстную рекламу в Яндексе и не<br/>
            знаете, с чего начать? Наши специалисты помогут создать рекламную<br/>
            кампанию с нуля совершенно бесплатно!
        </td>
    </tr>
    <tr>
        <td style = "${rightAndLeft}">
            <div style="max-width: 600px; width: 100%; color: #5E5E5E; font: 20px HelveticaNeue, sans-serif; line-height: 23px; margin-bottom: 30px; text-align: left">
                Автопилот – это
            </div>
        </td>
    </tr>
        <table border="0" cellpadding="0" cellspacing="0" style="padding: 0; margin: 0 auto;">
            <tr style="margin: 0; padding: 0">
                <td style="${left} vertical-align: top; background-color: white;">
                    <img src="http://content.rookee.ru/email-template/autopilot/effectively.png" >
                </td>
                <td style="${text} ${rightAndLeft} background-color: white;">
                    <b>Эффективно</b><br/>
                    <br/>
                    Вы получаете +20% заявок в месяц. При управлении ставками<br/>
                    Автопилот учитывает более 30 критериев в т.ч. прогноз<br/>
                    конверсий, сезонность и демографические характеристики.
                </td>
            </tr>
            <tr style="margin: 0; padding: 0">
                <td style="${left} vertical-align: top; background-color: white;">
                    <img src="http://content.rookee.ru/email-template/autopilot/fast.png" >
                </td>
                <td style="${text} ${rightAndLeft} background-color: white;">
                    <b>Быстро</b><br/>
                    <br/>
                    Ваша рекламная кампания максимально результативна всего<br/>
                    через месяц после запуска, благодаря технологии<br/>
                    самообучающегося искусственного интеллекта.
                </td>
            </tr>
            <tr style="margin: 0; padding: 0">
                <td style="${left} vertical-align: top; background-color: white;">
                    <img src="http://content.rookee.ru/email-template/autopilot/safely.png" >
                </td>
                <td style="${text} ${rightAndLeft} background-color: white;">
                    <b>Безопасно</b><br/>
                    <br/>
                    Вы не передаете Автопилоту рекламный бюджет, логин и пароль<br/>
                    от Яндекс.Директа – управление ставками ведется на вашем<br/>
                    аккаунте.
                </td>
            </tr>
            <tr style="margin: 0; padding: 0">
                <td style="${left} vertical-align: top; background-color: white;">
                    <img src="http://content.rookee.ru/email-template/autopilot/available.png" >
                </td>
                <td style="${text} ${rightAndLeft} background-color: white;">
                    <b>Доступно</b><br/>
                    <br/>
                    Вы используете сервис всего за 50 ₽ в день вне зависимости от<br/>
                    бюджета рекламной кампании.
                </td>
            </tr>
            <tr style="margin: 0; padding: 0">
                <td style="${left} vertical-align: top; background-color: white;">
                    <img src="http://content.rookee.ru/email-template/autopilot/simply.png" >
                </td>
                <td style="${text} ${rightAndLeft} background-color: white;">
                    <b>Просто</b><br/>
                    <br/>
                    Вы запускаете управление ставками в три простых шага.
                </td>
            </tr>
        </table>
        <table border="0" cellpadding="0" cellspacing="0" style="padding: 0; margin: 0 auto;">
            <tr style="text-align: left">
                <td style="${text} ${rightAndLeft} background-color: white;">
                Более <b>1000</b> клиентов уже оценили эффективность Автопилота!<br/>
                Присоединяйтесь и вы — начните получать результат прямо сейчас!
                </td>
            </tr>
        </table>
    <tr>
        <td>
            <div style="text-align: center;">
                <a 
                    href="${utmGenerator('https://www.rookee.ru/modules/context/master', 'autopilot', 'nachat_rabotu')}"
                    target="_blank"
                >
                    <img src="http://content.rookee.ru/email-template/autopilot/submit.png" alt="Начать работу"/>
                </a>
            </div>
        </td>
    </tr>
`);

module.exports = (props) => {
    return {
        subject: 'Уважаемый клиент!',
        html: html(props)
    }
};

