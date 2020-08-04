const axios = require("axios");
const config = require("./config");
const dayjs = require("dayjs");

function urlencode (str) {
    str = (str + '').toString();
    return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
    replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
}

module.exports = function wechat(msg, code, data) {
    let sckey = config.notice.weChat_sckey;

    const text= urlencode(`【完美打卡】——${msg}`);
    const desp= urlencode(`
        打卡时间：${dayjs().format('YYYY-MM-DD HH:mm:ss')}
        
        响应数据：
        { msg: "${msg}", code: "${code}", data: "${data}"
        
        GitHub链接:https://github.com/ni00/perfectclockin
        
        `)

    const url = `https://sc.ftqq.com/${sckey}.send?text=${text}&desp=${desp}`;

    if (sckey) {
        axios.get(url).then((response) => {
            console.log(response.data);
        })
            .catch((error) => {
                console.log(error);
            });
    }

}
