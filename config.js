// const config = {
//   info: {
//     TEXT: "", //(学院专业班级信息)                例：林学院-林学(陶铸实验班)-2017林学(陶铸实验班)1班
//     DEPTID: "", //(部门、系ID)                   例：141670
//     ADDRESS: "", //(详细地址)                    例：非常富贵
//     ADDTEXT: "", //(省-市-县/区)                 例：江西省-南昌市-高新区
//     CODE: "", //(所在地区身份证前六位)                       例：360192
//     STUNUM: "", //(学号)                        例：20170101
//     USERNAME: "", //(姓名)                      例：小冯
//     PHONENUM: "", //(电话)                      例：...自己电话...
//     USERID: "", //(完美校园分配的用户id)          例：6274894
//     EMERGENCY: "", //(紧急联系人)                例：紧急人
//     EMERGENCYPHONE: "", //(紧急联系人电话)        例：23667712771
//   },
//   notice: {
//     weChat_sckey: "",
//     mail: {
//       from: {
//         host: "", //设置主机，如果是QQ请换成smtp.qq.com
//         user: "", //邮箱账户
//         passCode: "", //邮箱授权码，非密码
//       },
//       to: "", //接收邮箱
//     },
//   },
// };

const token = "de356881-ec1a-4850-824b-5dfe93a9f7aa";

const createJsonConfig = (temp, type) => ({
  businessType: "epmpics",
  method: "submitUpInfoSchool",
  jsonData: {
    deptStr: {
      deptid: 155597,
      text: "南亚东南亚语言文化学院-亚非语言文学(研究生)-亚非语言文学(研究生)",
    },
    areaStr:
      '{"province":"云南省","city":"昆明市","district":"呈贡区","streetNumber":"4号","street":"万青路","pois":"云南民族大学呈贡校区","lng":"102.855205","lat":"24.838638","address":"呈贡区万青路4号云南民族大学呈贡校区","text":"云南省-昆明市","code":""}',
    reportdate: 1599215280143,
    customerid: 575,
    deptid: 155597,
    source: "alipay",
    templateid: type.templateid,
    stuNo: "10218110145",
    username: "杨周舒婷",
    userid: 23010114,
    updatainfo: [
      {
        propertyname: "temperature",
        value: temp,
      },
      {
        propertyname: "symptom",
        value: "无症状",
      },
      {
        propertyname: "ownPhone",
        value: "15887117883",
      },
    ],
    customerAppTypeRuleId: type.customerAppTypeRuleId,
    clockState: 0,
  },
  token: token,
});

const config = {
  appToken: "AT_IHEsqW7SkKIQPLORR9gO1aofD3WTMJ53",
  userIds: [
    "UID_JrFNLlhvL0lJBaHoI485n8x5EqNW",
    "UID_Wyt24AhpD2rt5YsNXt5Bdu1McRKo",
  ],
};

module.exports = {
  createJsonConfig,
  config,
  token,
};
