var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  //入口文件entry
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,//导出目录的绝对路径
    filename: '[name].js',//导出文件的文件名
    //生产模式或者开发模式下html、js等文件内部引用的公共路径
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  //主要设置模块如何被解析
  resolve: {
    extensions: ['.js', '.vue', '.json'],//自动解析确定的拓展名，使导入模块时不带扩展名
    alias: {
      //创建import或者require的别名
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  //如何处理项目不同类型的模块
  module: {
    rules: [
      {
        test: /\.vue$/,//vue文件后缀
        loader: 'vue-loader',//使用vue-loader处理
        options: vueLoaderConfig //option是对vue-loader做的额外选项配置
      },
      {
        test: /\.js$/,//js文件后缀
        loader: 'babel-loader',//使用babel-loader处理
        include: [resolve('src'), resolve('test')] //必须处理包括src和test文件夹
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, //图片后缀
        loader: 'url-loader', //使用url-loader处理
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
