const mysql = require('mysql')


let connection = mysql.createConnection({
    host:'47.95.216.215',
    user:'root',
    password: '199608025zhu',
    database:'mysql'
})

// let goodsList = null;

// connection.connect((err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log('success');
   
//     }
// })


module.exports = connection