var webpack = require('webpack'),
    // 使用插件将组件中相同部分抽成一个单独文件
    CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin"),
    // JS压缩插件
    uglifyJsPlugin = webpack.optimize.UglifyJsPlugin,
    path = require('path');

module.exports = {
  entry: {
    'movieBundle': [
      './public/scripts/components/movie/movie_index'      // 引入电影首页JS脚本
    ],
    'musicBundle': [
      './public/scripts/components/music/music_index'      // 引入音乐首页JS脚本
    ]
  },
  output: {
    path: path.join(__dirname, '/public/libs/scripts/components/'),  // 输出JS路径
    filename: '[name].min.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,                                      // 对ES6进行转换
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.vue']                         // 识别文件后缀名
  },
  plugins: [
    // 使用插件将组件中相同部分抽成一个单独文件
    new CommonsChunkPlugin('componentInit.min.js', ['movieBundle', 'musicBundle']),
    // JS代码压缩
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
