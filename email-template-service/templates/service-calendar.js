const layout = require('./components/layout.js');
const utmGenerator = require('../utils/utm-generator.js');

const text = `
    color: #5E5E5E;
    font: 14px HelveticaNeue, sans-serif;
    line-height: 20px;
    padding-bottom: 20px;
`;

const rightAndLeft = `border-left: 35px solid white; border-right: 35px solid white;`;

const good = '<span style="color: green"> всё в порядке <span>';
const bad = '<span style="color: red"> есть проблема <span>';

const html = (props) => {

    let successCheckers = {};
    props.successCheckers && props.successCheckers.map( (el) => successCheckers[el] = true );

    let recommendations = {};
    props.recommendations && props.recommendations.map( (el) => recommendations[el] = true );

    if(props.notificationType === 'FastCheckersCompleted') {
        if(props.checkerGroupStatus === 'Success'){
            return layout(`
                <tr>
                    <td style = "${rightAndLeft}">
                        <div style="max-width: 600px; width: 100%; color: #5E5E5E; font: 20px HelveticaNeue, sans-serif; line-height: 23px; margin-bottom: 30px; text-align: center">
                            Лёд тронулся
                        </div>
                    </td>
                </tr>
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="padding: 0; margin: 0 auto;">
                    <tr style="text-align: center;">
                        <td style="${text} ${rightAndLeft}">          
                            Мы&nbsp;провели быстрый анализ вашего сайта ${props.sitename || ''}. <br/>
                            Поздравляем, ваш сайт успешно прошёл базовые проверки. <br/>
                            Тщательный анализ сайта запустится после оплаты <br/>
                            и&nbsp;запуска проекта в&nbsp;работу.
                        </td>
                    </tr>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="padding: 0; margin: 0 auto;">
                    <tr style="margin: 0; padding: 0">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            <b>В него войдёт:</b><br/>
                        </td>
                    </tr>
                    <tr style="margin: 0; padding: 0">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &mdash;&nbsp;подробный анализ текстового контента;
                        </td>
                    </tr>
                    
                    <tr style="margin: 0; padding: 0">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &mdash;&nbsp;проверка заголовков и&nbsp;метатегов всех страниц сайта;
                        </td>
                    </tr>
                    
                    <tr style="margin: 0; padding: 0">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &mdash;&nbsp;скорость загрузки сайта;
                        </td>
                    </tr>
                    
                    <tr style="margin: 0; padding: 0">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &mdash;&nbsp;соответствие сайта коммерческим факторам ранжирования;
                        </td>
                    </tr>
                    
                    <tr style="margin: 0; padding: 0">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &mdash;&nbsp;корректность перелинковки на&nbsp;сайте;
                        </td>
                    </tr>
                    
                    <tr style="margin: 0; padding: 0">
                        <table border="0" cellpadding="0" cellspacing="0" style="padding: 0; margin: 0 auto; border-spacing: 0">
                            <tr style="margin: 0; padding: 0">
                                <td width="7" style="width: 7px; max-width: 7px; min-width: 7px;">&nbsp;</td>
                                <td align="left" valign="top" style="width: 12px; max-width: 12px;">
                                     &mdash;                    
                                </td>
                                <td align="left" valign="top" style="${text} ${rightAndLeft} background-color: white; text-align: left; text-indent: 0">
                                    &nbsp;наличие Я.метрики на&nbsp;страницах сайта и&nbsp;настроенные <br/>
                                    в&nbsp;ней цели (необходимо подключить счётчик аккаунту при его наличии,<br/>
                                     либо можете заказать услугу по&nbsp;установке и&nbsp;настройке Я.метрики);
                                </td>
                            </tr>
                        </table>
                    </tr>
                    
                    <tr style="margin: 0; padding: 0">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &mdash;&nbsp;поиск страниц с&nbsp;высоким показателем отказов;
                        </td>
                    </tr>
                    
                    <tr style="margin: 0; padding: 0">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &mdash;&nbsp;анализ поддоменов, которые индексируются поисковыми системами.
                        </td>
                    </tr>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="padding: 0; margin: 0 auto;">
                    <tr style="text-align: center">
                        <td style="${text} ${rightAndLeft}">
                            Все найденные ошибки&nbsp;Вы сможете исправить самостоятельно,<br/> 
                            следуя инструкциям системы, или доверить исправление ошибок<br/> 
                            нашим специалистам.
                        </td>
                    </tr>
                </table>
            `);
        } else {
            return layout(`
                <tr>
                    <td style = "${rightAndLeft}">
                        <div style="max-width: 600px; width: 100%; color: #5E5E5E; font: 20px HelveticaNeue, sans-serif; line-height: 23px; margin-bottom: 30px; text-align: center">
                            Лёд тронулся
                        </div>
                    </td>
                </tr>
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="padding: 0; margin: 0 auto;">
                    <tr style="text-align: center;">
                        <td style="${text} ${rightAndLeft}">          
                            Мы&nbsp;провели быстрый анализ вашего сайта ${props.sitename || ''}.<br/>
                            Тщательный анализ сайта запустится после оплаты <br/>
                            и&nbsp;запуска проекта в&nbsp;работу.
                        </td>
                    </tr>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="padding: 0; margin: 0 auto;">
                    <tr style="text-align: center;">
                        <td style="${text} ${rightAndLeft}">          
                            Все ошибки&nbsp;Вы сможете исправить самостоятельно, следуя инструкциям<br/>
                            системы, или доверить исправление ошибок нашим специалистам.
                        </td>
                    </tr>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="padding: 0; margin: 0 auto;">
                    <tr style="text-align: center;">
                        <td style="${text} ${rightAndLeft}">          
                            На&nbsp;основании найденных ошибок мы&nbsp;сформировали для Вас план<br/>
                            внутренней оптимизации сайта, который&nbsp;Вы сможете найти<br/>
                            на&nbsp;зоне обзора проекта.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style="text-align: center;">
                                <a 
                                    href="${utmGenerator('https://www.rookee.ru/modules/', 'fast', 'pereiti_v_kabinet', 'calendar', 'checker_notif')}"
                                    target="_blank"
                                >
                                    <img src="http://content.rookee.ru/email-template/service-calendar/submit.png" alt="Перейти в кабинет"/>
                                </a>
                            </div>
                        </td>
                    </tr>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="padding: 0; margin: 0 auto;">
                    <tr style="margin: 0; padding: 0">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            Какие проверки проводились:
                        </td>
                    </tr>                                      
                    ${(successCheckers.NotFoundStatusCode || recommendations.NotFoundStatusCode) ? `<tr style="margin: 0; padding: 0">
                            <td style="${text} ${rightAndLeft} background-color: white;">
                                &mdash;&nbsp;корректная обработка <b>404 ошибки</b>&nbsp;&mdash; ${successCheckers.NotFoundStatusCode ? good : bad}
                            </td>
                        </tr>                    
                        ${recommendations.NotFoundStatusCode ? `<tr style="margin: 0; padding: 0; text-align: center">
                            <td style="${text} ${rightAndLeft} background-color: white;">
                                &laquo;Появление ошибки 404 (Page Not Found) означает, что запрашиваемые<br/>
                                 документ или страница на&nbsp;сайте не&nbsp;найдены. Причин у&nbsp;этого<br/>
                                 может быть множество. Чтобы в&nbsp;этом случае пользователь получал <br/>
                                 адекватное сообщение о&nbsp;произошедшей ошибке, создается специальная<br/>
                                  страница. На&nbsp;ней размещают уведомление, что запрашиваемый файл<br/>
                                   не&nbsp;найден, и&nbsp;предлагают продолжить изучение сайта. Часто это <br/>
                                   красивая и&nbsp;интересная страница, которая вызывает у&nbsp;попавшего<br/>
                                    на&nbsp;нее пользователя улыбку, а&nbsp;не&nbsp;разочарование<br/>
                                     от&nbsp;неправильного введенного адреса (URL)&raquo;.
                            </td>
                        </tr>` : ''}` : ''
                }
                    
                    ${(successCheckers.RobotsTxtChecker || recommendations.RobotsTxtChecker) ? `<tr style="margin: 0; padding: 0">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &mdash;&nbsp;настройка файла <b>robots.txt</b>&nbsp;&mdash; ${successCheckers.RobotsTxtChecker ? good : bad}
                        </td>
                    </tr> 
                     ${recommendations.RobotsTxtChecker ? `<tr style="margin: 0; padding: 0; text-align: center">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &laquo;Robots.txt&nbsp;&mdash; это текстовый файл, расположенный<br/>
                             в&nbsp;корневой директории сайта. Он&nbsp;содержит инструкции для поисковых<br/>
                              роботов по&nbsp;индексации сайта, а&nbsp;также позволяет скрыть <br/>
                              от&nbsp;индексации контент и&nbsp;определенные директории, которые <br/>
                              не&nbsp;должны отражаться в&nbsp;поисковой системе&raquo;.
                        </td>
                    </tr>` : ''}` : ''
                }
                    
                    ${(successCheckers.SiteMap || recommendations.SiteMap) ? `<tr style="margin: 0; padding: 0">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &mdash;&nbsp;наличие <b>карты сайта</b>&nbsp;&mdash; ${successCheckers.SiteMap ? good : bad}
                        </td>
                    </tr> 
                     ${recommendations.SiteMap ? `<tr style="margin: 0; padding: 0; text-align: center">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &laquo;Sitemap&nbsp;&mdash; это xml-файлы, которые содержат <br/>
                            информацию о&nbsp;страницах сайта, подлежащих индексации <br/>
                            поисковыми системами: Google, Яндекс, Поиск@Mail.ru и&nbsp;др.<br/>
                            Назначение Sitemap&nbsp;&mdash; помочь поисковым роботам <br/>
                            найти нужные страницы, обозначить частоту происходящих <br/>
                            на&nbsp;них изменений, время последнего обновления, важность <br/>
                            относительно других страниц сайта. Это необходимо для <br/>
                            быстрой и&nbsp;более точной индексации сайта&raquo;.
                        </td>
                    </tr>` : ''}` : ''
                }
                    
                    ${(successCheckers.Mirrors || recommendations.Mirrors) ? `<tr style="margin: 0; padding: 0">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &mdash;&nbsp;корректность настройки <b>зеркал</b> сайта&nbsp;&mdash; ${successCheckers.Mirrors ? good : bad}
                        </td>
                    </tr> 
                     ${recommendations.Mirrors ? `<tr style="margin: 0; padding: 0; text-align: center">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &laquo;Поисковые системы считают зеркалами сайты, находящиеся <br/>
                            по&nbsp;разным адресам, но&nbsp;содержащие одинаковый контент. <br/>
                            Поскольку наполнение зеркал одинаково, поисковые системы воспринимают <br/>
                            их&nbsp;как один ресурс. Зеркала часто используются для уменьшения <br/>
                            нагрузки на&nbsp;сервер или для сохранности данных. При некорректной <br/>
                            настройке зеркала считаются клонами, что плохо влияет на&nbsp;продвижение&raquo;.
                        </td>
                    </tr>` : ''}` : ''
                }
                    
                    ${(successCheckers.FaviconChecker || recommendations.FaviconChecker) ? `<tr style="margin: 0; padding: 0">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &mdash;&nbsp;наличие у&nbsp;сайта <b>favicon</b>&nbsp;&mdash; ${successCheckers.FaviconChecker ? good : bad}
                        </td>
                    </tr> 
                     ${recommendations.FaviconChecker ? `<tr style="margin: 0; padding: 0; text-align: center">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &laquo;Текст сниппета не&nbsp;единственный элемент, по&nbsp;которому <br/>
                            потенциальный посетитель ориентируется в&nbsp;выдаче. Фавикон <br/>
                            изначально задумывался как картинка для визуализации сайта <br/>
                            в&nbsp;закладках браузера, однако стал одним из&nbsp;важных<br/>
                             элементов формирования бренда и&nbsp;продвижения. Содержание <br/>
                             изображения&nbsp;&mdash; один из&nbsp;важных элементов дизайна, <br/>
                             оно должно быть уникальным и&nbsp;соответствовать тематике ресурса&raquo;.
                        </td>
                    </tr>` : ''}` : ''
                }
                    
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="padding: 0; margin: 0 auto;">
                    <tr style="text-align: center">
                        <td style="${text} ${rightAndLeft}">
                            Исправление найденных ошибок&nbsp;Вы можете заказать у&nbsp;экспертов<br/>
                             Rookee. Внутри вашего личного кабинета мы&nbsp;сформировали план <br/>
                             технической оптимизации. Желательно выполнять работы в&nbsp;том <br/>
                             порядке, в&nbsp;котором они указаны, это поможет получить результаты<br/>
                              от&nbsp;продвижения значительно быстрее, т.к. они спланированы <br/>
                              в&nbsp;зависимости от&nbsp;важности для сайта. Вы&nbsp;можете <br/>
                              перераспределить работы на&nbsp;более длительный период, за&nbsp;счёт<br/>
                               изменения даты начала той или иной услуги внутри плана.
                        </td>
                    </tr>
                    <tr style="text-align: center">
                        <td style="${text} ${rightAndLeft}">
                            Также Вы&nbsp;можете исправить все или часть ошибок самостоятельно,<br/>
                            следуя инструкциям внутри модуля &laquo;Аналитика проектов&raquo;<br/>
                             в&nbsp;нижнем левом углу вашего кабинета.
                        </td>
                    </tr>
                    <tr style="text-align: center">
                        <td style="${text} ${rightAndLeft}">
                            <div style="display: block; max-width: 340px;">
						        <img src="http://content.rookee.ru/email-template/service-calendar/valera.png" alt="img" width="340px" border="0" style="display: block; width: 340px; max-width: 100%;" />
					        </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style="text-align: center;">
                                <a 
                                    href="${utmGenerator('https://www.rookee.ru/modules/', 'fast', 'pereiti_v_kabinet', 'calendar', 'checker_notif')}"
                                    target="_blank"
                                >
                                    <img src="http://content.rookee.ru/email-template/service-calendar/submit.png" alt="Перейти в кабинет"/>
                                </a>
                            </div>
                        </td>
                    </tr>
                </table>
            `);
        }
    } else if(props.notificationType === 'SlowCheckersCompleted') {
        if(props.checkerGroupStatus === 'Success'){
            return layout(`
                <tr>
                    <td style = "${rightAndLeft}">
                        <div style="max-width: 600px; width: 100%; color: #5E5E5E; font: 20px HelveticaNeue, sans-serif; line-height: 23px; margin-bottom: 30px; text-align: left"></div>
                    </td>
                </tr>
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="padding: 0; margin: 0 auto;">
                    <tr style="text-align: left;">
                        <td style="${text} ${rightAndLeft}">          
                            Поздравляем, ваш сайт успешно прошёл все проверки. Это означает,<br/>
                            что он&nbsp;технически готов к&nbsp;продвижению.
                        </td>
                    </tr>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="padding: 0; margin: 0 auto;">
                    <tr style="margin: 0; padding: 0; text-align: left;">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            Вы&nbsp;всё ещё можете заказать дополнительные услуги,<br/> 
                            положительно влияющие на&nbsp;продвижение:
                        </td>
                    </tr>
                    <tr style="margin: 0; padding: 0">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &mdash;&nbsp;подбор запросов для продвижения;
                        </td>
                    </tr>
                    
                    <tr style="margin: 0; padding: 0">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &mdash;&nbsp;настройка ссылочной стратегии;
                        </td>
                    </tr>
                    
                    <tr style="margin: 0; padding: 0">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                           &mdash;&nbsp;ТЗ&nbsp;на&nbsp;тексты.
                        </td>
                    </tr>
                </table>
            `);
        } else {
            return layout(`
                <tr>
                    <td style = "${rightAndLeft}">
                        <div style="max-width: 600px; width: 100%; color: #5E5E5E; font: 20px HelveticaNeue, sans-serif; line-height: 23px; margin-bottom: 30px; text-align: left"></div>
                    </td>
                </tr>
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="padding: 0; margin: 0 auto;">
                    <tr style="text-align: left;">
                        <td style="${text} ${rightAndLeft}">          
                            Мы&nbsp;завершили анализ вашего сайта ${props.sitename || ''}.
                        </td>
                    </tr>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="padding: 0; margin: 0 auto;">
                    <tr style="text-align: center;">
                        <td style="${text} ${rightAndLeft}">
                            При проверке были обнаружены ошибки, которые не&nbsp;позволяют ему<br/>
                             занять лидирующие позиции в&nbsp;выдаче поисковых систем.
                        </td>
                    </tr>
                    <tr style="text-align: center;">
                        <td style="${text} ${rightAndLeft}">
                            В&nbsp;личном кабинете для вас сформировали план технической <br/>
                            оптимизации сайта. Все работы спланированы в&nbsp;зависимости<br/>
                            от&nbsp;степени их&nbsp;влияния на&nbsp;результат. Выполняйте работы <br/>
                            в&nbsp;том порядке, в&nbsp;котором они указаны, это поможет получить<br/>
                            результаты от&nbsp;продвижения значительно быстрее. При необходимости<br/>
                            вы&nbsp;можете перераспределить работы на&nbsp;более длительный период,<br/>
                            за&nbsp;счёт изменения даты начала той или иной задачи внутри плана.
                        </td>
                    </tr>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="padding: 0; margin: 0 auto;">
                    <tr style="text-align: center;">
                        <td style="${text} ${rightAndLeft}">          
                            Исправляйте найденные ошибки с&nbsp;помощью экспертов Rookee<br/>
                            или самостоятельно, следуя инструкциям внутри модуля &laquo;Аналитика проектов&raquo;.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style="text-align: center;">
                                <a 
                                    href="${utmGenerator('https://www.rookee.ru/modules/', 'slow', 'pereiti_v_kabinet', 'calendar', 'checker_notif')}"
                                    target="_blank"
                                >
                                    <img src="http://content.rookee.ru/email-template/service-calendar/submit.png" alt="Перейти в кабинет"/>
                                </a>
                            </div>
                        </td>
                    </tr>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="padding: 0; margin: 0 auto;">
                    <tr style="margin: 0; padding: 0">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            Статус проверок:
                        </td>
                    </tr>              
                    ${(successCheckers.TextContent || recommendations.TextContent) ? `<tr style="margin: 0; padding: 0">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &mdash;&nbsp;проверка <b>тошноты текста</b>&nbsp;&mdash; ${successCheckers.TextContent ? good : bad}
                        </td>
                    </tr>                    
                    ${recommendations.TextContent ? `<tr style="margin: 0; padding: 0; text-align: center">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &laquo;Тошнота&nbsp;&mdash; это насыщенность текста ключевыми словами.<br/>
                             По&nbsp;значению этого показателя можно судить о&nbsp;том, для кого <br/>
                             написана статья: для людей или поисковых роботов. Академическая тошнота<br/>
                              выражается в&nbsp;процентах и&nbsp;рассчитывается как соотношение <br/>
                              количества повторяющихся слов и&nbsp;общего объема текста. <br/>
                              Чем выше значение, тем хуже воспринимается содержание посетителями ресурса<br/>
                               и&nbsp;тем ниже оценка поисковых систем. Слишком частое повторение<br/>
                                ключевых слов называют &bdquo;переспам&ldquo;&raquo;.
                        </td>
                    </tr>` : ''}` : ''
                }
                    
                    ${(successCheckers.CmsDoubles || recommendations.CmsDoubles) ? `<tr style="margin: 0; padding: 0">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &mdash;&nbsp;наличие незакрытых от&nbsp;индексации <b>дублей страниц</b>&nbsp;&mdash; ${successCheckers.CmsDoubles ? good : bad}
                        </td>
                    </tr>                    
                    ${recommendations.CmsDoubles ? `<tr style="margin: 0; padding: 0; text-align: center">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &laquo;Дубль&nbsp;&mdash; это копия или повтор страницы сайта,<br/>
                             возникающие в&nbsp;результате некорректной работы CMS (движка сайта)<br/>
                              или технических ошибок веб-мастера. Несмотря на&nbsp;то,<br/>
                               что такие страницы находятся на&nbsp;одном сайте, поисковые<br/>
                                системы считают их&nbsp;неуникальными, занижают ресурс <br/>
                                в&nbsp;ранжировании, а&nbsp;при большом количестве <br/>
                                дублирующих страниц накладывают фильтры&raquo;.
                        </td>
                    </tr>` : ''}` : ''
                }
                    
                    ${(successCheckers.Subdomain || recommendations.Subdomain) ? `<tr style="margin: 0; padding: 0">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &mdash;&nbsp;индексируемые <b>поддомены</b>&nbsp;&mdash; ${successCheckers.Subdomain ? good : bad}
                        </td>
                    </tr>                    
                    ${recommendations.Subdomain ? `<tr style="margin: 0; padding: 0; text-align: center">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &laquo;Хотя поддомен рассматривается поисковыми системами как <br/>
                            независимый сайт, его пессимизация может снизить рейтинг основного<br/>
                             сайта. Поэтому требуется постоянное обновление и&nbsp;уникализация<br/>
                              содержащегося на&nbsp;них контента. Важно закрывать от&nbsp;индексации<br/>
                               тестовые, технические, находящиеся в&nbsp;разработке, устаревшие <br/>
                               поддомены. Их&nbsp;индексация может сильно навредить продвижению сайта&raquo;.
                        </td>
                    </tr>` : ''}` : ''
                }
                    
                    ${(successCheckers.MetaTags || recommendations.MetaTags) ? `<tr style="margin: 0; padding: 0">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &mdash;&nbsp;<b>метатеги</b>&nbsp;&mdash; ${successCheckers.MetaTags ? good : bad}
                        </td>
                    </tr>                    
                    ${recommendations.MetaTags ? `<tr style="margin: 0; padding: 0; text-align: center">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &laquo;Метатеги (title, description)&nbsp;&mdash; это часть <br/>
                            программного кода каждой страницы сайта. Они не&nbsp;отображаются<br/>
                             на&nbsp;экранах пользователей, но&nbsp;имеют большое значение<br/>
                              для ранжирования/ Описание Description некоторыми поисковиками<br/>
                               выводится в&nbsp;качестве краткого описания страницы<br/>
                                в&nbsp;поисковой выдаче&raquo;.
                        </td>
                    </tr>` : ''}` : ''
                }
                    
                    ${(successCheckers.CommercialInfo || recommendations.CommercialInfo) ? `<tr style="margin: 0; padding: 0">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &mdash;&nbsp;<b>коммерческие факторы</b> ранжирования&nbsp;&mdash; ${successCheckers.CommercialInfo ? good : bad}
                        </td>
                    </tr>                    
                    ${recommendations.CommercialInfo ? `<tr style="margin: 0; padding: 0; text-align: center">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &laquo;Поисковые системы, как и&nbsp;пользователи, предпочитают<br/>
                             сайты с&nbsp;исчерпывающим количеством коммерческой информации.<br/>
                              Хорошо, если ее&nbsp;содержимое пересекается с&nbsp;WHOIS-данными,<br/>
                               указанными при регистрации доменного имени. Все коммерческие<br/>
                                факторы ранжирования также влияют на&nbsp;конверсию&raquo;.
                        </td>
                    </tr>` : ''}` : ''
                }
                    
                    ${(successCheckers.PageSpeed || recommendations.PageSpeed) ? `<tr style="margin: 0; padding: 0">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                           &mdash;&nbsp;<b>скорость загрузки</b> сайта&nbsp;&mdash; ${successCheckers.PageSpeed ? good : bad}
                        </td>
                    </tr>                    
                    ${recommendations.PageSpeed ? `<tr style="margin: 0; padding: 0; text-align: center">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &laquo;Скорость загрузки сайта или отдельных страниц&nbsp;&mdash;<br/>
                             крайне важный показатель, который оценивается и&nbsp;пользователями,<br/>
                              и&nbsp;поисковыми системами. При длительной загрузке пользователь,<br/>
                               вероятнее всего, закроет страницу и&nbsp;перейдет на&nbsp;сайт<br/>
                                конкурентов, а&nbsp;поисковые системы не&nbsp;смогут произвести<br/>
                                 индексацию&raquo;.
                        </td>
                    </tr>` : ''}` : ''
                }
                    
                    ${(successCheckers.ExtCountersGoalsExists || recommendations.ExtCountersGoalsExists) ? `<tr style="margin: 0; padding: 0">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                           &mdash;&nbsp;наличие Яндекс метрики и&nbsp;настроенных<br/>
                            в&nbsp;ней <b>целей</b> (необходим подключенный доступ к&nbsp;Яндекс Метрике)&nbsp;&mdash; ${successCheckers.ExtCountersGoalsExists ? good : bad}
                        </td>
                    </tr>                    
                    ${recommendations.ExtCountersGoalsExists ? `<tr style="margin: 0; padding: 0; text-align: center">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &laquo;Цель&nbsp;&mdash; это действие посетителя, в&nbsp;котором<br/>
                             заинтересован владелец сайта. Конверсионные цели в&nbsp;Яндекс.Метрике<br/>
                              предназначены для просмотра статистических данных. Следить можно<br/>
                               за&nbsp;конверсией (например, нажатие кнопки &bdquo;Заказ&ldquo;,<br/>
                                просмотр страницы контактов, скачивание прайса), количеством<br/>
                                 целевых визитов и&nbsp;т.&nbsp;д.&raquo;
                        </td>
                    </tr>` : ''}` : ''
                }
                    
                     ${(successCheckers.ExtCountersTargetsPageBounceRate || recommendations.ExtCountersTargetsPageBounceRate) ? `<tr style="margin: 0; padding: 0">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &mdash;&nbsp;наличие страниц с&nbsp;<b>повышенными отказами</b>&nbsp;&mdash; ${successCheckers.ExtCountersTargetsPageBounceRate ? good : bad}
                        </td>
                    </tr>                    
                    ${recommendations.ExtCountersTargetsPageBounceRate ? `<tr style="margin: 0; padding: 0; text-align: center">
                        <td style="${text} ${rightAndLeft} background-color: white;">
                            &laquo;С&nbsp;точки зрения Яндекс.Метрики количество отказов&nbsp;&mdash;<br/>
                             это процент клиентов, которые посетили одну страницу и&nbsp;провели <br/>
                             на&nbsp;сайте менее 15&nbsp;секунд. Причиной ухода пользователей<br/>
                              с&nbsp;сайта может быть длительная загрузка, переизбыток навязчивой<br/>
                               рекламы, несоответствие страницы запросу и&nbsp;т.&nbsp;д. <br/>
                               Чем ниже показатель отказов, тем больше вовлеченность посетителей <br/>
                               и&nbsp;выше вероятность конверсии. Высокий&nbsp;же уровень отказов <br/>
                               влияет на&nbsp;ранжирование сайта и&nbsp;снижает эффективность его продвижения&raquo;.
                        </td>
                    </tr>` : ''}` : ''
                }
                    
                </table>
                
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="padding: 0; margin: 0 auto;">
                    <tr style="text-align: center">
                        <td style="${text} ${rightAndLeft}">
                            <div style="display: block; max-width: 340px;">
						        <img src="http://content.rookee.ru/email-template/service-calendar/valera.png" alt="img" width="340px" border="0" style="display: block; width: 340px; max-width: 100%;" />
					        </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style="text-align: center;">
                                <a 
                                    href="${utmGenerator('https://www.rookee.ru/modules/', 'slow', 'pereiti_v_kabinet', 'calendar', 'checker_notif')}"
                                    target="_blank"
                                >
                                    <img src="http://content.rookee.ru/email-template/service-calendar/submit.png" alt="Перейти в кабинет"/>
                                </a>
                            </div>
                        </td>
                    </tr>
                </table>
            `);
        }
    }
}

module.exports = (props) => {
    return {
        subject: 'Мы завершили первичный анализ сайта',
        html: html(props)
    }
};
