module.exports = {
	//基本路径
	// publicPath = './',
	outputDir:'build',
	devServer:{
		// vue-cli 3版本 跨域设置
		port:5000,
		proxy:{
			'/apis':{
				target:'http://localhost:3000',
				ws:true,
				changeOrigin:true,
				pathRewrite:{
					'^/apis'
				}
			}
		}
	}
}