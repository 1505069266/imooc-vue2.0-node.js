const express = require('express')
var router = express.Router()
const mysql = require('mysql')
const Goods = require('../models/goods.js')
const Core = require('@alicloud/pop-core');
const SMSClient = require('@alicloud/sms-sdk')

Goods.connect((err)=>{
    if(err){
        console.log(err);
        return
    }else{
        console.log("mysql connection success");
    }
})

// let goodsList = null
// Goods.query('select id from users;',(err,res,fields)=>{
//     if(err){
//         goodsList = err
//         return
//     }else{
//         goodsList =res
//     }
// })

router.get('/',(req,res,next)=>{
    // ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
const accessKeyId = 'LTAI4Fx5vVSRiMVPkbvtUeE1'
const secretAccessKey = 'b4kNJGwR2Ek1nI6haLOrhRVYTZwQpR'

//初始化sms_client
let smsClient = new SMSClient({accessKeyId, secretAccessKey})

smsClient.sendSMS({
    PhoneNumbers: '17855868561',
    SignName: '乐霸霸菜馆',
    TemplateCode: '验证登录注册'
    // TemplateParam: '{"code":"12345"}'
}).then(function (res) {
    let {Code}=res
    if (Code === 'OK') {
        //处理返回参数
        console.log(res)
    }
}, function (err) {
    console.log(err)
})


})

router.get("/list",(req,res,next)=>{
    let page = req.param("page") //当前页数
    let pageSize = req.param("pageSize") //每页多少条数据
    let sort = req.param('sort')
    let name = req.param('name')
    let skip = (page-1) * pageSize
    let q = `SELECT * FROM goods`
    Goods.query(q,(err,ress,fields)=>{
        if(err){
            res.status(503).json({
                error:'查询错误'
            })
            return
        }
        res.json({
            status:'0',
            msg:'',
            result:{
                data:ress
            }
        })
    })
})

router.get('/addCart',(req,res,next)=>{
    Goods.query('SELECT * from person',(err,data,f)=>{
        if(err){
            res.status(500).json(err.message);
            return
        }
        res.json({
            data:data
        })
    })
})

module.exports = router