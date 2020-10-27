// url - основная ссылка
// theme = utm_content - тема письма
// button - кнопка

// цифры указывают порядок иерархии в аналитике, в урле их положение не имеет значения
// 1 - utm_source - конкретное название источника трафика
// 2 - utm_medium – тип источника трафика
// 3 - utm_campaign – название рекламной кампании
// 4 - utm_content – определяет разные версии рекламы (к примеру две разные ссылки в одном рекламном письме).
// 5 - utm_term – обозначает конкретное ключевое слово (для AdWords) или дату рассылки email-сообщения с рекламной ссылкой

module.exports = (url, theme, button, utmMedium, utmCampaign) => {

    return `${url}?code=rookee_email_rassilka_${theme}${button ? ('_knopka_' + button) : ''}&utm_source=email&utm_medium=${utmMedium || 'sandsey'}&utm_campaign=${utmCampaign || 'rassilka'}&utm_content=${theme}`;
};
