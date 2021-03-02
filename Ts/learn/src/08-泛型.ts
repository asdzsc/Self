// function fn(a: any): any {
//     return a
// }


/*
*  在定义函数或类的时候，如果遇到类型不明确的时候就可以使用泛型
*/

function fn<T>(a: T) {
    return a
}

// 可以直接调用具有泛型的函数
let result = fn(10)//不指定泛型，ts可以自动识别类型进行推断
console.log(fn(10));

let result2 = fn<string>("hello") //指定泛型

// 泛型可以同时指定多个
function fn2<T, K>(a: T, b: K): T {
    console.log(b);
    return a
}
fn2<number, string>(123, 'hello')
console.log(fn2<number, string>(123, 'hello'));


interface Inter {
    length: number
}

// T extends Inter 表示泛型T必须是Inter类(子类)
function fn3<T extends Inter>(a: T): number {
    return a.length
}

fn3("123")

console.log(fn3("123"));


class myClass<T> {
    name: T;
    constructor(name: T) {
        this.name = name
    }
}

const mc = new myClass<string>("孙悟空")

console.log(mc);
