(function () {
    // 定义一个人的类
    class Person {
        /**
         *  Ts可以在属性前添加属性的修饰符
         *  public 修饰的属性可以在任意位置访问(修改) 默认值
         *  private 私有属性,私有属性只能在内部进行访问(修改)
         *      - 通过在类中添加方法使得私有属性可以被外部访问
         * protected 只能在当前类和当前类的子类中访问(修改) 在实例上访问不到
         */
        private _name: string
        private _age: number
        constructor(name: string, age: number) {
            this._name = name
            this._age = age
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
            return this._name
        }
        set name(value: string) {
            this._name = value
        }
        get age() {
            return this._age
        }
        set age(value: number) {
            if (value > 0) {
                this._age = value
            }
        }
    }
    const per = new Person("孙悟空", 18)
    /**
     * 现在属性是在对象中设置的，属性可以任意的被更改
     *     属性可以任意被更改将会导致对象中的数据变得非常不安全    
     */
    // per._name = "猪八戒"
    // per._age = -38
    // per.setName("猪八戒")
    // per.setAge(-33)

    per.name = "猪八戒"
    per.age = 38
    console.log(per)

    class A {
        protected num: number
        constructor(num: number) {
            this.num = num
        }
    }

    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const a = new A(123)
    const b = new B(123)
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
        constructor(public name: string, public age: number) {

        }
    }
    const c = new C("tom", 18)
    console.log(c);

})()