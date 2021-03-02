"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log("动物在叫~");
        }
    }
    class Dog extends Animal {
        // 如果在子类中写了构造函数，在子类构造函数中必须对父类的构造函数进行调用
        constructor(name, age) {
            super(name);
            this.age = age;
        }
    }
    const dog = new Dog("旺财", 18);
    console.log(dog);
    dog.sayHello();
})();
