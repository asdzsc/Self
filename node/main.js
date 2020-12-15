const fs = require('fs')

// 阻塞代码实例
const data = fs.readFileSync('input.txt')

console.log(data.toString())
console.log('程序结束')