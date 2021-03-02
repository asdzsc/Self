(function () {
    class Animal {
        name: string;
        age: number
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log("动物在叫~");
        }
    }

    /**   
     * Monkey extends Animal
     *      此时 Animal 被称为父类,Monkey 被称为子类
     *      使用继承后 子类会有父类的方法和属性
     *      通过继承可以将多个类共有的方法写在父类中
     *        这样写只需要写一次就可以让所有的子类同时有父类的方法和属性
     *        如果希望在子类中添加一些父类中没有的属性或方法直接加在子类当中
     *      如果子类中添加了父类相同的方法，则子类会覆盖掉父类中的方法
     *        这种子类覆盖到父类方法的形式，称为方法重写    
     */

    //  定义一个 Monkey 的类 使Monkey继承animal类
    class Monkey extends Animal {
        jump() {
            console.log(`${this.name}在跳`);
        }
        sayHello() {
            console.log("Monkey在叫~");
        }
    }
    //  定义一个 Cat 的类 使Cat继承animal类
    class Cat extends Animal {
        sayHello() {
            console.log("Cat在叫~");
        }
    }

    const monkey = new Monkey("猴子", 5)
    console.log(monkey);
    monkey.sayHello()
    monkey.jump()

    const cat = new Cat("咪咪", 2)
    console.log(cat);
    cat.sayHello()

})()