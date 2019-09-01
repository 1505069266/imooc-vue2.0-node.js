let User = require("./User.js")

console.log(`userName:${User.userName}`);

console.log(`userName:${User.sayHello()}`);

let http = require('http')
let url = require('url')
let util = require('util')

let server = http.createServer((req,res)=>{
    res.statusCode = 200

    res.setHeader("Content-Type","text/plain;charset=utf-8")

    url.parse(req.url)

    console.log("url:" + req.url);
    

    let a = util.inspect(url.parse(req.url))

    res.end(a)
})

server.listen(80,'127.0.0.1',()=>{
    console.log("服务器已经运行;在127.0.0.1");
    
})