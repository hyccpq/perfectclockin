const config = require("./config");
const dayjs = require("dayjs");
var email = require("emailjs");


module.exports = function mail(msg, code, data) {
    if (config.notice.mail.from.user && config.notice.mail.from.passCode && config.notice.mail.from.host && config.notice.mail.to) {
        var server =new email.SMTPClient({
            user: config.notice.mail.from.user,      // 你的QQ邮箱
            password: config.notice.mail.from.passCode,           // 注意，不是QQ密码，而是刚才生成的授权码
            host: config.notice.mail.from.host,         // 主机，不改
            ssl: true                   // 使用ssl
        });

        const text = `【完美打卡】——${msg}`;
        const desp = `
        打卡时间：${dayjs().format('YYYY-MM-DD HH:mm:ss')}
        
        响应数据：
        { msg: "${msg}", code: "${code}", data: "${data}"
        
        GitHub链接:https://github.com/ni00/perfectclockin
        
        `;

//开始发送邮件
        server.send({
            text: desp,       //邮件内容
            from: config.notice.mail.from.user,        //谁发送的
            to: config.notice.mail.to,       //发送给谁的
            subject: text          //邮件主题
        }, function (err, message) {
            //回调函数
            console.log(err || message);
            console.log("邮件通知流程已执行！");
        });

    }
}
