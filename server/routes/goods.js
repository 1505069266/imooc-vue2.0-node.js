const express = require('express')
let router = express.Router()
let mongoose = require('mongoose')
let Goods = require('../models/good.js')
const mysql = require('mysql')
// const Goods = require('../models/goods.js')
const random = require('../utils/random')
var MongoClient = require('mongodb').MongoClient;
// const SMS = require('../utils/SMS')

let url = 'mongodb://47.95.216.215:27017/demo'
//连接数据库
let aa = ''
mongoose.connect(url, { useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
    console.log("数据库已连接!");
    
    // db.close();
  });
// mongose.connection.on('connected',()=>{
//     console.log(`mongodb connect success`);
    
// })

// mongose.connection.on('error',()=>{
//     console.log(`mongodb connect fail`);
    
// })

// mongoose.connection.on('disconnected',()=>{
//     console.log(`mongodb connected disconnected`);
    
// })

router.get('/',(req,res,next)=>{
    Goods.find({},(err,doc)=>{
        if(err){
            res.json({
                status:'1',
                msg:err.message
            })
        } else {
            res.json({
                status:'0',
                msg:'',
                resule: {
                    count: doc.length,
                    list:doc
                }
            })
        }
    })
})

// Goods.connect((err)=>{
//     if(err){
//         console.log(err);
//         return
//     }else{
//         console.log("mysql connection success");
//     }
// })

// // let goodsList = null
// // Goods.query('select id from users;',(err,res,fields)=>{
// //     if(err){
// //         goodsList = err
// //         return
// //     }else{
// //         goodsList =res
// //     }
// // })
// let timeLimit = true
// let SMScode = ''
// router.get('/',(req,res,next)=>{
//     if(timeLimit){
//         timeLimit = false
//         const setTime = setTimeout(() => {
//             timeLimit = true
//         }, 60000);
//         const randomNu = random().toString()
//         SMScode = randomNu
//         SMS('17855868561',randomNu)
//         res.json({
//             code:randomNu,
//             status: 'success'
//         })
//     }else{
//         res.json({
//             status: '0',
//             msg:'短信验证码发送太频繁了,一分钟后再试'
//         })
//     }
    


// })
    
// router.get("/list",(req,res,next)=>{
//     let page = req.param("page") //当前页数
//     let pageSize = req.param("pageSize") //每页多少条数据
//     let sort = req.param('sort')
//     let name = req.param('name')
//     let skip = (page-1) * pageSize
//     let q = `SELECT * FROM goods`
//     Goods.query(q,(err,ress,fields)=>{
//         if(err){
//             res.status(503).json({
//                 error:'查询错误'
//             })
//             return
//         }
//         res.json({
//             status:'0',
//             msg:'',
//             SMSnumber: SMScode,
//             result:{
//                 data:ress
//             }
//         })
//     })
// })

// router.get('/addCart',(req,res,next)=>{
//     Goods.query('SELECT * from person',(err,data,f)=>{
//         if(err){
//             res.status(500).json(err.message);
//             return
//         }
//         res.json({
//             data:data
//         })
//     })
// })

module.exports = router