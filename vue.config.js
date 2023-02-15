const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    port:2030,
    proxy:{
      '/api':{
        target:'http://localhost:2030',
        changeOrigin:true
      }
    }
  }
})
