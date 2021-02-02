//引入一个包
const path = require("path")

// webpack中的所有配置信息都应该写在 module.exports中
module.exports = {
    // 指定入口文件
    entry: "./src/index.ts",
    output: {
        //指定打包文件的目录
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    //指定webpack打包是要使用的模块
    module: {
        // 指定要加载的规则
        rules: [{
            // test 指定的是规则生效的文件
            test: /\.ts$/,
            // 要使用的loader
            use: "ts-loader",
            // 要排除的文件
            exclude: "/node-modules/"
        }],

    }
}