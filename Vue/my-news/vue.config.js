module.exports = {
    // publicPath: process.env.NODE_ENV === 'production' ?
    //     '/production-sub-path/' : '/',
    devServer: {
        proxy: {
            '/js': {
                target: 'http://news-at.zhihu.com', //你要访问的服务器域名
                changeOrigin: true, //允许跨域
                pathRewrite: {
                    '^/js': ''
                }
            },
        }
    },
    lintOnSave: false
}