const express = require('express')
var router = express.Router()
const mysql = require('mysql')
const Goods = require('../models/goods.js')


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

router.get("/",(req,res,next)=>{
    let page = req.param("page") //当前页数
    let pageSize = req.param("pageSize") //每页多少条数据
    let sort = req.param('sort')
    let name = req.param('name')
    let skip = (page-1) * pageSize
    let q = `SELECT * FROM users where name=${name} LIMIT  ${skip},${pageSize} `
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
                peoples:ress
            }
        })
    })
})

module.exports = router