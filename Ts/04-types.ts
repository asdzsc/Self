// object表示一个js对象
let a: object
a = {}
a = function () {
}

// {} 用来指定对象中可以包含哪些属性
// 语法 ：{属性明:属性值}
// 在属性明后面加上?表示该属性是可选的
let b: { name: string, age?: number }

b = { name: "Tom", age: 18 }

//[propName: string] 表示任意类型的属性
let c: { name: string, [propName: string]: any }
c = { name: "Tom", age: 18, gender: "男" }

/**
 * 设置函数结构的类型声明
 *  语法(形参:类型,形参:类型...)=>返回值
*/
let d: (a: number, b: number) => number

d = function (a: number, b: number): number {
    return a + b;
}

/**
 * 数组类型的声明
 * 类型[]
 * Array<类型>
*/

// string[] 表示字符串数组
let e: string[]
e = ["1", "2", "3"]
let f: Array<number>
f = [1, 2, 3]

/**
 * 元组,元组就是固定长度的数组
 * 语法：[类型,类型,类型]
*/

let g: [string, string]
g = ['1', '2']

/**
 * enum  枚举类型用于定义数值集合。
*/

// enum Gender {
//     Male,
//     Female
// }
enum Gender {
    Male,
    Female
}
let i: { name: string, gender: Gender }
i = {
    name: "Tom",
    gender: Gender.Male// 'male'
}

console.log(i.gender === Gender.Male);


//&表示同时
let j: { name: string } & { age: number }

j = {
    name: "Tom",
    age: 18
}

// 类型别名
type myType = 1 | 2 | 3 | 4 | 5
let l: myType
let k: myType
let m: myType

l = 1
k = 2
k = 3