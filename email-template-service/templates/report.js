const utmGenerator = require('../utils/utm-generator.js');

const content = (props) => `
<div style="height: 22px; line-height: 22px; font-size: 22px;">&nbsp;</div>
<table cellpadding="0" cellspacing="0" border="0" width="86%" style="max-width: 600px; min-width: 300px;">
    <tr>
        <td align="center" valign="top">
            <div style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #FA9054; font-weight: bold; font-size: 24px; line-height: 25px;">
            Уважаемый пользователь!
            </div>
        </td>
    </tr>
</table>
<div style="height: 18px; line-height: 18px; font-size: 18px;">&nbsp;</div>

<table cellpadding="0" cellspacing="0" border="0" width="92%" style="max-width: 600px; min-width: 300px;">
    <tr>
        <td align="center" valign="middle">
            <table cellpadding="5" cellspacing="0" border="0" width="260px" style="display: inline-block; max-width: 260px; min-width: 260px; vertical-align: middle;">
                <tr>
                    <td align="center" valign="top">
                        <img src="http://content.rookee.ru/email-template/report/people.png" alt="img" width="250px" border="0" style="display: block; width: 250px; max-width: 100%;" />
                    </td>
                </tr>
            </table>
            <table cellpadding="5" cellspacing="0" border="0" width="280px" style="display: inline-block; max-width: 280px; min-width: 280px; vertical-align: middle;">
                <tr>
                    <td align="left" valign="top">
                        <div style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #5E5E5E; font-size: 14px; line-height: 20px; text-align: left;">
                        Первые месяцы работы по&nbsp;поисковому продвижению имеют большое значение. Правильный старт позволит быстрее получить результат за&nbsp;счет грамотного подхода к&nbsp;продвижению, начиная с&nbsp;ранних этапов.
                        </div>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>

<div style="height: 15px; line-height: 15px; font-size: 15px;">&nbsp;</div>
<table cellpadding="0" cellspacing="0" border="0" width="78%" style="max-width: 600px; min-width: 300px;">
    <tr>
        <td align="center" valign="top">
            <div style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #FA9054; font-weight: bold; font-size: 36px; line-height: 40px; text-align: center;">
            ${props.days}
            </div>
            <div style="height: 10px; line-height: 10px; font-size: 10px;">&nbsp;</div>
            <div style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #5E5E5E; font-size: 14px; line-height: 22px; text-align: center;">
            Вы&nbsp;работаете с&nbsp;сервисом Rookee, и&nbsp;мы&nbsp;подготовили срез о&nbsp;результатах проделанной работы.
            </div>
        </td>
    </tr>
</table>
<div style="height: 15px; line-height: 15px; font-size: 15px;">&nbsp;</div>

<table cellpadding="0" cellspacing="0" border="0" width="92%" style="max-width: 600px; min-width: 300px;">
    <tr>
        <td align="center" valign="middle">
            <table cellpadding="5" cellspacing="0" border="0" width="280px" style="display: inline-block; max-width: 280px; min-width: 280px; vertical-align: middle;">
                <tr>
                    <td align="center" valign="top">
                        <div style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #5E5E5E; font-size: 14px; line-height: 20px; text-align: left;">
                        В&nbsp;отчете&nbsp;Вы найдете информацию о&nbsp;статусах по&nbsp;размещению рекламных материалов, а&nbsp;также рекомендации по&nbsp;оптимизации рекламной кампании и&nbsp;сайта.
                        </div>
                        <div style="height: 15px; line-height: 15px; font-size: 15px;">&nbsp;</div>
                        <a href="${props.reportLink}" target="_blank">
                            <img src="http://content.rookee.ru/email-template/report/button.png" alt="Получить отчет" width="211px" border="0" style="width: 211px; max-width: 100%; vertical-align: top;" />
                        </a>
                    </td>
                </tr>
            </table>
            <table cellpadding="14" cellspacing="0" border="0" width="260px" style="display: inline-block; max-width: 260px; min-width: 260px; vertical-align: middle;">
                <tr>
                    <td align="center" valign="top">
                        <img src="http://content.rookee.ru/email-template/report/report.png" alt="img" width="232px" border="0" style="display: block; width: 232px; max-width: 100%;" />
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
`;

const html = (props) => `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
	<meta name="viewport" content="width=device-width">
	<title>Rookee: итоги продвижения после ${props.days}.</title>
	<!--[if gte mso 9]>
		<style>.wrapper-outlook { width:600px !important; }</style>
	<![endif]-->
	<!--[if lte mso 9]>
		<style type="text/css">.wrapper-outlook { width:600px !important; }</style>
	<![endif]-->
</head>
<body style="margin: 0; padding:0; background-color: #E5E5E5;">
<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: #E5E5E5; min-width: 340px; font-size: 1px; line-height: normal;">
 	<tr>
   		<td align="center" valign="top">
   			<table class="wrapper-outlook" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; min-width: 320px; background: #ffffff;">
   				<tr>
   					<td align="center" valign="top">
						<table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; min-width: 300px; background-color: #4A90E2;">
							<tr>
								<td align="center" valign="top">
									<div style="height: 15px; line-height: 15px; font-size: 15px;">&nbsp;</div>
									<img src="http://content.rookee.ru/email-template/report/logo_header.png" alt="Rookee" width="208px" border="0" style="display: block; width: 208px; max-width: 100%;" />
									<div style="height: 15px; line-height: 15px; font-size: 15px;">&nbsp;</div>
								</td>
							</tr>
						</table>

						${content(props)}

						<div style="height: 10px; line-height: 10px; font-size: 10px;">&nbsp;</div>
						<table cellpadding="0" cellspacing="0" border="0" width="86%" style="max-width: 600px; min-width: 300px;">
							<tr>
								<td align="center" valign="top">
									<div style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #5E5E5E; font-size: 10px; line-height: 14px; text-align: center;">
									Будем рады ответить на&nbsp;все вопросы и&nbsp;помочь получить максимальный результат для Вашего бизнеса с&nbsp;использованием сервиса Rookee.
									</div>
									<div style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #5E5E5E; font-size: 10px; line-height: 14px; text-align: center;">
									Мы&nbsp;стараемся сделать отчет полезным. Расскажите нам, является&nbsp;ли предоставленная информация достаточно полной? Если в&nbsp;отчёте интересны другие параметры&nbsp;&mdash; сообщите нам об&nbsp;этом.
									</div>
								</td>
							</tr>
						</table>
						<div style="height: 25px; line-height: 25px; font-size: 25px;">&nbsp;</div>

						<table cellpadding="0" align="center" cellspacing="0" border="0" width="100%" style="max-width: 600px; min-width: 300px; background-color: #F3F3F3; background-image: url(http://content.rookee.ru/email-template/report/logo_footer.png); background-position: center 0; background-repeat: no-repeat; background-size: auto 100%;">
							<tr>
								<td align="center" valign="top">
									<div style="height: 25px; line-height: 25px; font-size: 25px;">&nbsp;</div>
									<table cellpadding="0" align="center" cellspacing="0" border="0" width="86%" style="max-width: 600px; min-width: 300px;">
										<tr>
											<td align="left" valign="top">
												<div style="display:block; font-family: Arial, Tahoma, Geneva, sans-serif; color: #4a4a4a; font-size: 12px; line-height: 20px;">
													С заботой о вашем бизнесе
												</div>
												<div style="display:block; font-family: Arial, Tahoma, Geneva, sans-serif; color: #4a4a4a; font-size: 12px; line-height: 20px;">
													Команда Rookee
												</div>
												<div style="height: 5px; line-height: 5px; font-size: 5px;">&nbsp;</div>
												<table align="left" cellpadding="0" cellspacing="0" border="0" width="84px" style="display: inline-block; max-width: 100px; min-width: 84px;">
													<tr>
														<td align="left" valign="top">
															<a href="${utmGenerator('https://www.facebook.com/rookee.ru/', 'facebook_rookee')}" target="_blank">
															<img src="http://content.rookee.ru/email-template/social/fb.png" alt="img" border="0" style="max-width: 100%;" />
															</a>
														</td>
														<td width="10" style="width: 10px; max-width: 10px; min-width: 10px;">&nbsp;</td>
														<td align="left" valign="top">
															<a href="${utmGenerator('https://vk.com/rookee_club', 'vk_rookee')}" target="_blank">
															<img src="http://content.rookee.ru/email-template/social/vk.png" alt="img" border="0" style="max-width: 100%;" />
															</a>
														</td>
														<td width="10" style="width: 10px; max-width: 10px; min-width: 10px;">&nbsp;</td>
														<td align="left" valign="top">
															<a href="${utmGenerator('https://twitter.com/rookeeru', 'twitter_rookee')}" target="_blank">
															<img src="http://content.rookee.ru/email-template/social/tw.png" alt="img" border="0" style="max-width: 100%;" />
															</a>
														</td>
														<td width="10" style="width: 10px; max-width: 10px; min-width: 10px;">&nbsp;</td>
													</tr>
												</table>			
											</td>
											<td align="right" valign="top">
												<div style="display:block; font-family: Arial, Tahoma, Geneva, sans-serif; color: #4a4a4a; font-size: 12px; line-height: 20px;">
													8 800 700 59 30
												</div>	
												<a href="mailto:support@rookee.ru" target="_blank" 
												   style="font-family: Arial, Tahoma, Geneva, sans-serif; display: block; color: #4a4a4a; font-size: 12px; line-height: 20px; text-decoration: none;">   
													<font face="Arial, sans-serif" color="#4a4a4a" style="font-size: 12px; line-height: 20px; text-decoration: none;">
														<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #4a4a4a; font-size: 12px; line-height: 20px; text-decoration: none;">
														support@rookee.ru
														</span>
													 </font>
												 </a>
												<div style="display:block; font-family: Arial, Tahoma, Geneva, sans-serif; color: #4a4a4a; font-size: 12px; line-height: 20px;">
													пн-пт. 10:00-19:00
												</div>			
											</td>
										</tr>
									</table>
									<div style="height: 28px; line-height: 28px; font-size: 28px;">&nbsp;</div>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
		</td>
	</tr>
</table>
</body>
</html>
`;

module.exports = (props) => {
    return {
        subject: `Rookee: итоги после ${props.days} продвижения`,
        html: props.isInternal ? content(props) : html(props)
    }
};

