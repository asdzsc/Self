"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 声明一个变量a 同时它的类型为number
var a;
// a的类型设置为number 在后面的使用过程中a的值只能是数字
a = 12;
a = 11;
// a = "123546"  不能将类型“string”分配给类型“number”。
var b;
b = "hello";
// b = 12
// 声明变量时直接赋值
// let c: boolean = false
var c = false;
c = true;
// 如果变量的声明和赋值是同时进行的，Ts可以自动对变量进行类型校验
// c = 123
// js中函数是不考虑参数的类型和个数的
function sum(a, b) {
    return a + b;
}
console.log(sum(123, 123));
function add(a, b) {
    return a + b;
}
console.log(add(123, 456));
