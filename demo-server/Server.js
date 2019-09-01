let http = require('http')
let url = require('url')
let util = require('util')
let fs = require('fs')

let server = http.createServer((req,res)=>{
    // res.statusCode = 200
   const pathName =  url.parse(req.url).pathname
    fs.readFile('server/index.html',(err,data)=>{
        if(err){
            console.log(err);
            
            res.writeHead(404,{
                'Content-Type':'text/html'
            })
        }else{
            res.writeHead(200,{
                'Content-Type':'text/html'
            })
            res.write(data.toString())
            
        }
        res.end()
    })
    // res.setHeader("Content-Type","text/plain;charset=utf-8")
    
    url.parse(req.url)

    // console.log("url:" + req.url);
    

    let a = util.inspect(url.parse(req.url))


})

server.listen(80,'127.0.0.1',()=>{
    console.log("服务器已经运行;在127.0.0.1");
    
})