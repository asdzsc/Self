const fs = require('fs')

// 非阻塞代码实例
fs.readFile('input.txt',function(err,data){
	if(err){
		return console.error(err)
	}
	console.log(data.toString())
})

console.log('程序结束')