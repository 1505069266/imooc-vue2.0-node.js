// vue.config.js
module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000', //对应自己的接口
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': ''
          }
        },
        '/goods':{
          target:'http://localhost:3000'
        }
      }
    }
  }

//   axios.get('/api/getDataPoint').then(res => {
//     console.log(res)
//   })