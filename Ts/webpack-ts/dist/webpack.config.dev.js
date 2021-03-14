"use strict";

//引入一个包
var path = require("path"); // 引入html插件


var HTMLWabpackPlugin = require("html-webpack-plugin"); // 引入clean插件


var _require = require("clean-webpack-plugin"),
    CleanWebpackPlugin = _require.CleanWebpackPlugin; // webpack中的所有配置信息都应该写在 module.exports中


module.exports = {
  // 指定入口文件
  entry: "./src/index.ts",
  output: {
    //指定打包文件的目录
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // 告诉webpack不使用箭头函数
    environment: {
      arrowFunction: false
    }
  },
  //指定webpack打包是要使用的模块
  module: {
    // 指定要加载的规则
    rules: [{
      // test 指定的是规则生效的文件
      test: /\.ts$/,
      // 要使用的loader
      use: [// 配置babel
      {
        // 指定加载器
        "loader": "babel-loader",
        // 设置babel
        options: {
          // 设置预定义环境
          presets: [[// 指定环境插件
          "@babel/preset-env", // 配置信息
          {
            // 要兼容的目标浏览器
            targets: {
              "chrome": "87",
              "ie": "11"
            },
            // 指定core-js版本号
            "corejs": "3",
            // 使用corejs的方式 "usage"表示按需加载
            "useBuiltIns": "usage"
          }]]
        }
      }, "ts-loader"],
      // 要排除的文件
      exclude: "/node-modules/"
    }]
  },
  plugins: [new CleanWebpackPlugin(), new HTMLWabpackPlugin({
    // title: "个人title"
    template: "./src/index.html"
  })],
  // 用来设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  }
};