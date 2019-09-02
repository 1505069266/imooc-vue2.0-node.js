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

let goodsList = null
Goods.query('select name from users;',(err,res,fields)=>{
    if(err){
        goodsList = err
        return
    }else{
        goodsList =res
    }
})

router.get("/",(req,res,next)=>{

    res.json({
        status:"0",
        msg:'',
        result:{
            name:goodsList
        }
    })
})

module.exports = router