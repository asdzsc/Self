// 使用class关键字定义一个类
/**
 * 对象中主要包含两部分：
 *  属性
 *  方法
 */
class Person {
    /**
     * 直接定义的属性是实例属性，需要创建对象的实例来进行访问
     *      const Tom = new Person()
            console.log(Tom.name);
        使用static 开头的属性是静态属性(类属性)，可以直接通过类去访问
            Person.age
        使用 readonly 开头的属性表示一个开头只读的属性无法修改
     */
    // readonly name: string = "孙悟空"
    // static readonly age: number = 18

    // 定义实例属性
    name = "孙悟空";
    age = 18;
    // 定义实例方法
    // 如果方法是以 static 开头则方法就是类的方法，可以通过类直接访问
    static sayHello() {
        console.log("hello 你好！");

    }

}

const Tom = new Person()
console.log(Tom);
console.log(Tom.name);
// Tom.sayHello()
Person.sayHello()
// Tom.name = "猪八戒"
// console.log(Tom.name);
// console.log(Person.age);

