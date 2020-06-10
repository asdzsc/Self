module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/production-sub-path/' : '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.97.33.178',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api', //重写,
                }
            },
            '/json': {
                target: 'http://m.maoyan.com/ajax/cinemaList', //你要访问的服务器域名
                changeOrigin: true, //允许跨域
                pathRewrite: {
                    '^/json': ''
                }
            },
            '/js': {
                target: 'https://douban.uieee.com', //你要访问的服务器域名
                changeOrigin: true, //允许跨域
                pathRewrite: {
                    '^/js': ''
                }
            },
            '/detail': {
                target: 'http://m.maoyan.com/ajax/detailmovie', //你要访问的服务器域名
                changeOrigin: true, //允许跨域
                pathRewrite: {
                    '^/detail': ''
                }
            },
        }
    },
    lintOnSave: false
}