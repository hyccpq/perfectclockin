# 完美打卡 PerfectClockIn
> 完美校园自动健康打卡，仅供个人研究/学习/欣赏,请勿用于商业用途,否则产生的一切后果将由您自己承担。

## 使用技术
+ ServerLess Function（云函数）
+ NodeJS（axios、emailjs）

## 使用方法
### 1.修改配置文件 config.js

info 配置用于完美校园数据提交，参考 
[17wanxiaoCheckin-Actions](https://github.com/ReaJason/17wanxiaoCheckin-Actions#一模拟器抓包获取数据如果你的手机已root可以直接用手机哦)
进行抓包获得
```
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

```

notice 配置用于消息通知，支持微信、邮箱

[微信sckey获取](http://sc.ftqq.com/3.version)
```
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
```


### 2.配置severless function
> 下面的部署过程基于腾讯云函数，但理论上支持阿里云函数/云开发

#### 1.登录[腾讯云函数]控制台(https://console.cloud.tencent.com/scf/)
![](https://image.nixiaobai.com/static/sfc1.png!mini)

#### 2.创建云函数，选择空白模板或者HelloWorld模板
![](https://image.nixiaobai.com/static/sfc2.png!mini)

#### 3.检查配置信息，确认无误
![](https://image.nixiaobai.com/static/sfc3.png!mini)

#### 4.上传所有js文件和package.json，并且修改好config.js。（如果并非全量上传，请选择在线安装依赖！）
![](https://image.nixiaobai.com/static/sfc4.png!mini)

#### 5.保存并测试
![](https://image.nixiaobai.com/static/sfc7.png!mini)

#### 6.设置定时触发器即可
![](https://image.nixiaobai.com/static/sfc6.png!mini)

#### 7.打卡成功图片（你可以修改wechat.js、mail.js来定制消息通知样式）
![](https://image.nixiaobai.com/static/sfc9.jpg!mini)
![](https://image.nixiaobai.com/static/sfc8.jpg!mini)

## 感谢
> 本项目参考了两个Python打卡项目，在此表示感谢

+ [17wanxiaoCheckin-Actions](https://github.com/ReaJason/17wanxiaoCheckin-Actions)
+ [A-Dior](https://github.com/A-Dior/-)
