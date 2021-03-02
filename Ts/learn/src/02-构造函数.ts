class Dog {
    name: string;
    age: number;


    // constructor 构造函数 在对象创建时调用
    constructor(name: string, age: number) {
        //在实例方法中 this就表示当前的实例
        //在构造函数中当前对象就是当前new的对象
        //可以通过this向新建的对象中添加属性 
        this.name = name;
        this.age = age;
    }
    bark() {
        // 在方法中可以通过this来表示当前调用方法的对象
        console.log(this);
    }
}

const dog = new Dog("小黑", 4)

const dog1 = new Dog("小白", 2)
dog.bark()
dog1.bark()
