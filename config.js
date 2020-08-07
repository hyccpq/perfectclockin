const config = {
    info: {
        TEXT: "",//(学院专业班级信息)                例：林学院-林学(陶铸实验班)-2017林学(陶铸实验班)1班
        DEPTID: "",//(部门、系ID)                   例：141670
        ADDRESS: "",//(详细地址)                    例：非常富贵
        ADDTEXT: "",//(省-市-县/区)                 例：江西省-南昌市-高新区
        CODE: "",//(所在地区身份证前六位)                       例：360192
        STUNUM: "",//(学号)                        例：20170101
        USERNAME: "",//(姓名)                      例：小冯
        PHONENUM: "",//(电话)                      例：...自己电话...
        USERID: "",//(完美校园分配的用户id)          例：6274894
        EMERGENCY: "",//(紧急联系人)                例：紧急人
        EMERGENCYPHONE: ""//(紧急联系人电话)        例：23667712771
    },
    notice: {
        weChat_sckey:  "",
        mail: {
            from: {
                host: '',   //设置主机，如果是QQ请换成smtp.qq.com
                user: '',       //邮箱账户
                passCode:"",   //邮箱授权码，非密码
            },
            to: "" //接收邮箱

        }
    }
}

module.exports = config;