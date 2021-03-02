"use strict";
(function () {
    // 定义一个人的类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /**
         * getter 方法用来读取属性
         * setter 方法用来设置属性
         *      -他们被称为属性去存取器
        */
        // 定义方法,用来获取name属性
        // getName() {
        //     return this._name
        // }
        // // 定义方法,用来设置name属性
        // setName(value: string) {
        //     this._name = value
        // }
        // // 定义方法,用来获取age属性
        // getAge() {
        //     return this._age
        // }
        // // 定义方法,用来设置age属性
        // setAge(value: number) {
        //     if (value > 0) {
        //         this._age = value
        //     }
        // }
        // Ts中getter setter 方法
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value > 0) {
                this._age = value;
            }
        }
    }
    const per = new Person("孙悟空", 18);
    /**
     * 现在属性是在对象中设置的，属性可以任意的被更改
     *     属性可以任意被更改将会导致对象中的数据变得非常不安全
     */
    // per._name = "猪八戒"
    // per._age = -38
    // per.setName("猪八戒")
    // per.setAge(-33)
    per.name = "猪八戒";
    per.age = 38;
    console.log(per);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const a = new A(123);
    const b = new B(123);
    console.log(a);
    console.log(b);
    // class C {
    //     name: string
    //     age: number
    //     constructor(name: string, age: number) {
    //         this.name = name
    //         this.age = age
    //     }
    // }
    class C {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C("tom", 18);
    console.log(c);
})();
