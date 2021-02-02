// 可以直接使用字面量进行类型声明
let a: 10;
a = 10;

// 也可以使用 | 来连接多个类型（联合类型）
let b: "male" | "female"
b = "male"
b = "female"

let c: string | boolean

c = "123"
c = false

// any 表示任意类型 一个变量设置类型为any后相当于对该变量关闭了ts 类型校验
// 使用ts时不建议使用any类型
// let d: any
// 声明变量时如果不指定类型，则ts解析器会自动判断变量的类型为any(隐士转换)

let d;
d = 10
d = '11'
d = true

// unknow 表示未知类型的值

let e: unknown
e = 10
e = 'hello'
e = true


let s: string
// any类型它可以赋值给任意变量
let f: any;
s = f

e = 'hello'
// s = e //不能将类型“unknown”分配给类型“string”
// unknown 实际上就是一个类型安全的any
// unknown类型的变量 不能直接赋值给其他变量

if (typeof e === "string") {
    s = e
}

// 类型断言 可以用来告诉解析器变量的实际类型

/**   
 * 语法
 *   变量 as 类型
 *  <类型>变量
 */
s = e as string
s = <string>e

// void 用来表示空 以函数为例 表示没有返回值的函数
function fn(): void {
    return
    // return null
}

// never 表示空值 永远没有结果
function fn1(): never {
    throw new Error("报错了！")
}
export {}