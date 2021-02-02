"use strict";
// object表示一个js对象
var a;
a = {};
a = function () {
};
// {} 用来指定对象中可以包含哪些属性
// 语法 ：{属性明:属性值}
// 在属性明后面加上?表示该属性是可选的
var b;
b = { name: "Tom", age: 18 };
//[propName: string] 表示任意类型的属性
var c;
c = { name: "Tom", age: 18, gender: "男" };
/**
 * 设置函数结构的类型声明
 *  语法(形参:类型,形参:类型...)=>返回值
*/
var d;
d = function (a, b) {
    return a + b;
};
/**
 * 数组类型的声明
 * 类型[]
 * Array<类型>
*/
// string[] 表示字符串数组
var e;
e = ["1", "2", "3"];
var f;
f = [1, 2, 3];
/**
 * 元组,元组就是固定长度的数组
 * 语法：[类型,类型,类型]
*/
var g;
g = ['1', '2'];
/**
 * enum  枚举类型用于定义数值集合。
*/
// enum Gender {
//     Male,
//     Female
// }
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: "Tom",
    gender: Gender.Male // 'male'
};
console.log(i.gender === Gender.Male);
