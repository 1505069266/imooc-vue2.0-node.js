const SMSClient = require('@alicloud/sms-sdk') //引入短接接口npm包


const SMS = function(phone,code){
    // ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
    const accessKeyId = 'LTAI4Fx5vVSRiMVPkbvtUeE1'
    const secretAccessKey = 'b4kNJGwR2Ek1nI6haLOrhRVYTZwQpR'

    // 初始化sms_client
    let smsClient = new SMSClient({accessKeyId, secretAccessKey})

    smsClient.sendSMS({
        PhoneNumbers: phone,
        SignName: '乐霸霸菜馆',
        TemplateCode: 'SMS_173474266',
        TemplateParam: `{code:${code}}`
    }).then(function (res) {
        let {Code}=res
        if (Code === 'OK') {
            //处理返回参数
            console.log('success');
            
            console.log(res)
        }
    }, function (err) {
        console.log(err)
    })
}
module.exports = SMS