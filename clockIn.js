const axios = require("axios");
const { createJsonConfig, token } = require("./config");
const wechat = require("./wechat");
const { getCurrentType } = require("./utils");

module.exports = function clockIn() {
  //API接口
  const post_url = "https://reportedh5.17wanxiao.com/sass/api/epmpics";
  //请求头
  const headers = {
    "User-Agent":
      "Mozilla/5.0 (Linux; Android 8.1.0; JKM-AL00a Build/HUAWEIJKM-AL00a; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.157 Mobile Safari/537.36 Wanxiao/5.1.5",
    "Accept-Encoding": "gzip, deflate",
    Accept: "application/json, text/plain, */*",
    Connection: "keep-alive",
    Host: "reportedh5.17wanxiao.com",
    // "Content-Length": "1727",
    Origin: "https://reportedh5.17wanxiao.com",
    "Content-Type": "application/json;charset=UTF-8",
    Referer: `https://reportedh5.17wanxiao.com/health/index.html?templateid=pneumonia&businessType=epmpics&customerId=575&systemType=Android&UAinfo=wanxiao&versioncode=10515101&token=${token}`,
    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    Cookie: "",
    "X-Requested-With": "com.newcapec.mobile.ncp",
  };

  const temp = (36 + Math.random()).toFixed(1);
  //请求数据
  const jsons = createJsonConfig(temp, getCurrentType());

  //   wechat("msg", "code", temp + "\n" + jsons.jsonData.templateid);
  //发送请求
  axios
    .post(post_url, jsons, headers)
    .then((response) => {
      console.log(response.data);
      const result = response.data;
      const msg = result.msg;
      const code = result.code;
      const data = result.data;
      wechat(msg, code, data, jsons); //调用微信通知
    })
    .catch((error) => {
      console.log(error);
      wechat("失败", "0", error); //调用微信通知
    });
};
