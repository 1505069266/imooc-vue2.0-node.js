const mysql = require('mysql')


let connection = mysql.createConnection({
    host:'47.95.216.215',
    user:'root',
    password: '199608025zhu',
    database:'mysql'
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log('success');
   
    }
})
connection.query('select name from users;',(err,res,fields)=>{
    console.log(res);
   
})