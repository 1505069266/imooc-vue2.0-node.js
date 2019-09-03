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

router.post('/login',(req,res,next)=>{
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
        res.json({
          status:'0',
          msg:'',
          result: doc
        })
    }
  })
})

module.exports = router;
