'use strict';
const axios = require("axios");
const config = require("./config");
exports.main_handler = async (event, context, callback) => {
    console.log("Hello World");
    console.log(event);
    console.log(context);
    return event;
};

function clockIn() {
    //API接口
    const post_url = 'https://reportedh5.17wanxiao.com/sass/api/epmpics';
    //请求头
    const headers = {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 8.1.0; JKM-AL00a Build/HUAWEIJKM-AL00a; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.157 Mobile Safari/537.36 Wanxiao/5.1.5',
        'Accept-Encoding': 'gzip, deflate',
        'Accept': 'application/json, text/plain, */*',
        'Connection': 'keep-alive',
        'Host': 'reportedh5.17wanxiao.com',
        'Content-Length': '1727',
        'Origin': 'https://reportedh5.17wanxiao.com',
        'Content-Type': 'application/json;charset=UTF-8',
        'Referer': 'https://reportedh5.17wanxiao.com/health/index.html?templateid=pneumonia&businessType=epmpics&customerId=18018&systemType=Android&UAinfo=wanxiao&versioncode=10515101&token=da4a1e38-632a-4d70-83f3-4d73d8e8999d',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        'Cookie': '',
        'X-Requested-With': 'com.newcapec.mobile.ncp'
    }
    //地址信息
    const area = {'address': config.info.ADDRESS, 'text': config.info.TEXT, 'code': config.info.CODE}
    //请求数据
    const jsons = {
        "businessType": "epmpics", "method": "submitUpInfo",
        "jsonData": {
            "deptStr": {"deptid": config.info.DEPTID, "text": config.info.TEXT},
            "areaStr": JSON.stringify(area),
            "reportdate": Date.now(),
            "customerid": "1999",
            "deptid": config.info.DEPTID,
            "source": "alipay",
            "templateid": "pneumonia",
            "stuNo": config.info.STUNUM,
            "username": config.info.USERNAME,
            "phonenum": config.info.PHONENUM,
            "userid": config.info.USERID,
            "updatainfo": [{"propertyname": "bodyzk", "value": "正常温度(小于37.3)"},
                {"propertyname": "istouchcb", "value": "自己家中"},
                {"propertyname": "sfwz2", "value": "内地学生"},
                {"propertyname": "symptom", "value": "无"},
                {"propertyname": "homehealth", "value": "无"},
                {"propertyname": "isConfirmed", "value": "无"},
                {"propertyname": "ownbodyzk", "value": "良好"},
                {"propertyname": "ishborwh", "value": "无"},
                {"propertyname": "outdoor", "value": "绿色"},
                {"propertyname": "isContactFriendIn14", "value": "没有"},
                {"propertyname": "ownPhone", "value": config.info.PHONENUM},
                {"propertyname": "emergencyContact", "value": config.info.EMERGENCY},
                {
                    "propertyname": "mergencyPeoplePhone",
                    "value": config.info.EMERGENCYPHONE
                }],
            "gpsType": 0
        }
    }

    //发送请求
    axios.post(post_url, {json: jsons})
        .then((response)=> {
            console.log(response.data);

        })
        .catch((error)=> {
            console.log(error);
        });

}

clockIn()
