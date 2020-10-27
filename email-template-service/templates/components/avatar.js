module.exports = (src, name, position) => {
    return `
        <tr>
            <td style="display: block; text-align: center; width: 100%; padding-bottom: 45px;">
                <img src="${src}" >
                <div>
                    <div style="font: 14px HelveticaNeue, sans-serif; font-weight: bold; line-height: 16px; color: black; margin-bottom: 10px;" >${name}</div>
                    <div style="font: 12px HelveticaNeue, sans-serif; font-style: italic; line-height: 14px; color: #9B9B9B;">${position}</div>
                </div>
            </td>
        </tr>
    `
};