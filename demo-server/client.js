let http = require('http')

let util = require('util')

http.get('http://mint-ui.github.io/#!/zh-cn',(res)=>{
    let data = ''
    res.on('data',chunk=>{
        data += chunk
    })

    res.on("end",()=>{
        let result = JSON.parse(data)

        let a = util.inspect(result)
        console.log(`result:${result.msg};${a}`);
        
    })
})