const axios = require("axios");
const { config } = require("./config");
const dayjs = require("dayjs");

module.exports = function wechat(msg, code, data, jsons) {
  let appToken = config.appToken;
  let userIds = config.userIds;
  const time = dayjs().format("YYYY-MM-DD HH:mm");
  const text = `【完美打卡】\n${time}\n 当前状态: ${data}`;
  const desp = `打卡时间 ${time}\n数据 { msg: "${msg}", code: "${code}", data: "${data}"}
        `;

  const url = `http://wxpusher.zjiecode.com/api/send/message`;

  if (appToken) {
    axios
      .post(url, {
        appToken,
        content: "打卡信息提示：\n" + desp + "\n" + jsons,
        summary: text,
        uids: userIds,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  console.log("微信通知流程已执行！");
};
