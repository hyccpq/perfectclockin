const config = {
    user: {
        phone: "",
        password: "",
        token: ""
    },
    info: {
        TEXT: "",//(学院专业班级信息)                例：林学院-林学(陶铸实验班)-2017林学(陶铸实验班)1班
        DEPTID: "",//(未知id字段)                   例：141670
        ADDRESS: "",//(详细地址)                    例：非常富贵
        ADDTEXT: "",//(省-市-县/区)                 例：江西省-南昌市-高新区
        CODE: "",//(盲猜邮编)                       例：360192
        STUNUM: "",//(学号)                        例：20170101
        USERNAME: "",//(姓名)                      例：小冯
        PHONENUM: "",//(电话)                      例：...自己电话...
        USERID: "",//(完美校园分配的用户id)          例：6274894
        EMERGENCY: "",//(紧急联系人)                例：紧急人
        EMERGENCYPHONE: ""//(紧急联系人电话)        例：23667712771
    },
    notice: {
        weChat: {
            token: ""
        },
        mail: {
            from: {
                host: 'smtp.126.com',   //设置主机，如果是QQ请换成smtp.qq.com
                user: 'xxxxxxxx@126.com',       //邮箱账户
                passCode:"",   //邮箱授权码，非密码
            },
            to: "123456@qq.com"

        }
    }
}

module.exports = config;