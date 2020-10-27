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

const getContent = (props) => {
    if (!props) {
        return '';
    }

    return `
    <table style="width: 100%;">
        ${props.showSeoStub ?
        `<tr  style="width: 100%;">
                <td style="${text} font-weight: bold; vertical-align: top; text-align: right; padding-right: 30px;">Поисковое продвижение</td>
                <td style="${text} text-align: left;">Больше потенциальных клиентов<br/> по вашим поисковым запросам</td>
            </tr>` : ''
         }  
        ${(props.clients && !props.showSeoStub && props.queries) ?
            `<tr  style="width: 100%;">
                <td style="${text} font-weight: bold; vertical-align: top; text-align: right; padding-right: 30px;">Поисковое продвижение</td>
                <td style="${text} text-align: left;">${props.clients} ${localize.wordend(props.clients, '', 'потенциальный клиент', 'потенциальных клиента', 'потенциальных клиентов')}<br/>по ${props.queries} ${localize.wordend(props.queries, '', 'поисковому запросу', 'поисковым запросам', 'поисковым запросам')}</td>
            </tr>` : ''
        }      
        ${props.context ?
            `<tr  style="width: 100%;">
                <td style="${text} font-weight: bold; text-align: right; padding-right: 30px;">Автопилот </td>
                <td style="${text} text-align: left;">+${props.context}% эффективности контекста</td>
            </tr>` : ''
        }
    </table>`;
};

const html = (props) => layout(`
    ${require('./components/avatar.js')('http://content.rookee.ru/email-template/avatar/eremcheva.png', 'Марина Еремчева', 'Руководитель клиентского<br/>сервиса Rookee')}
    <tr>
        <td style = "${rightAndLeft}">
            <div style="max-width: 600px; width: 100%; color: #5E5E5E; font: 20px HelveticaNeue, sans-serif; line-height: 23px; margin-bottom: 30px; text-align: left">
                Добрый день!
            </div>
        </td>
    </tr>
    <tr style="text-align: left;">
        <td style="${text} ${rightAndLeft}">
            Ваши рекламные кампании созданы и ожидают запуска.<br/>
            Чтобы продвинуть ваш сайт и оптимизировать рекламные кампании,<br/>осталось только <a 
                href="${utmGenerator('https://www.rookee.ru/web/replenishbalance.aspx', 'sozdanie_bez_popolneniyz')}"
                target="_blank" 
                style="${link}"
            >пополнить баланс.</a>
        </td>
    </tr>
    <tr style="padding: 40px 0; height: 155px; line-height: 155px; text-align: center">
        <td>
            <div>
                <img src="http://content.rookee.ru/email-template/create-project-without-payment/smile.png" >
            </div>
        </td>
    </tr>
    
    ${(props && ((props.clients && props.queries) || props.context || props.showSeoStub)) ?
        `<tr style="padding-bottom: 30px;">
            <td>
                <div style="color: #5E5E5E; font: 20px HelveticaNeue, sans-serif; line-height: 23px; padding-bottom: 30px; text-align: center">
                    Вы сможете получить
                </div>
            </td>
       </tr>` : ''
    }
     ${props ?
        `<tr  style="width: 100%;">
            ${getContent(props)}
        </tr>` : ''
    }
    <tr>
        <td>
            <div style="text-align: center;">
                <a href="${utmGenerator('https://www.rookee.ru/web/replenishbalance.aspx', 'sozdanie_bez_popolneniyz', 'popolnit')}" target="_blank">
                    <img src="http://content.rookee.ru/email-template/create-project-without-payment/submit.png" alt="Оплатить и запустить"/>
                </a>
            </div>
        </td>
    </tr>
    
    ${require('./components/book.js')}
`);

module.exports = (props) => {
    return {
        subject: 'Ваши рекламные кампании созданы и ожидают запуска!',
        html: html(props)
    }
};

