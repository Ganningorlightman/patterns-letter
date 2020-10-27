module.exports = (content) => {
    return `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <meta name="viewport" content="width=device-width">
            <!--[if gte mso 9]>
                <style>
                    .wrapper-outlook { width:600px !important; }
                </style>
            <![endif]-->
            <!--[if lte mso 9]>
                <style type="text/css">
                    .wrapper-outlook { width:600px !important; }
                </style>
            <![endif]-->
        </head>
        <body style="margin: 0; padding:0; background-color: #F7F8F8;">
            <table class="wrapper-outlook" align="center" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; margin:0 auto; padding:0; background: white">
                <tr>
                    <td>
                        <center style="max-width: 600px; width: 100%; margin: 0 auto;">
                            ${require('./header.js')}
                                ${content}
                            ${require('./footer.js')}
                        </center>
                    </td>
                </tr>
            </table>
        </body>
        </html>
    `
};