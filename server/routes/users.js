var express = require('express');
var router = express.Router();
var User = require('./../models/user.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {
  res.send('test');
});

router.post('/login',(req,res,next)=>{  //登陆接口
  console.log(`req: ${req}`);
  console.log(`req.body: ${req.body}`);
  console.log(`req.baseUrl: ${req.baseUrl}`);
  console.log(`req.cookies: ${req.cookies}`);
  console.log(`req.fresh: ${req.fresh}`);
  console.log(`req.hostname: ${req.hostname}`);
  console.log(`req.ip: ${req.ip}`);
  console.log(`req.originalUrl: ${req.originalUrl}`);
  console.log(`req.baseUrl: ${req.baseUrl}`);
  console.log(`req.path: ${req.path}`);
  console.log(`req.params: ${req.params}`);
  console.log(`req.route: ${req.route}`);
  console.log(`req.protocol: ${req.protocol}`);
  let param = {
    userName:req.body.userName,
    userPwd:req.body.userPwd
  }
  console.log(param);
  let userNam = param.userName
  console.log(userNam);
  let userP = param.userPwd
  let mysqlWay = `select * from users where userName = '${userNam}'`
  User.query(mysqlWay,(err,doc)=>{
    console.log(doc);
    let mysqlPwd = doc.userPwd
    if(err){
      res.json({
        status:'1',
        msg:err.message
      })
    }else{
      res.cookie("userId",doc.userId,{
        path:'/',
        maxAge:1000*60*60
      })
        res.json({
          status:'0',
          msg:'',
          result: {
            req:param
          }
        })
    }
  })
})

//登出接口
router.post("./logout",(req,res,next)=>{
  res.cookie("userId",'',{
    path:'/',
    maxAge:-1
  })
  res.json({
    status:'0',
    msg:'',
    result:''
  })
})

module.exports = router;
