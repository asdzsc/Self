class Snack {
    // 表示蛇头的元素
    head: HTMLElement;
    // 蛇的身体(包括蛇头)
    bodies: HTMLCollection;
    // 蛇的容器
    element: HTMLElement
    constructor() {
        this.element = document.querySelector(".snack") as HTMLElement
        this.head = document.querySelector(".snack>div") as HTMLElement
        this.bodies = this.element.getElementsByTagName("div") as unknown as HTMLCollection
    }
    // 获取蛇的坐标(蛇头坐标)
    get X() {
        return this.head.offsetLeft
    }
    get Y() {
        return this.head.offsetTop
    }
    // 设置蛇的坐标(蛇头坐标)
    set X(value: number) {
        this.head.style.left = value + 'px'
    }
    set Y(value: number) {
        this.head.style.top = value + 'px'
    }
    // 蛇增加身体的方法
    addBody() {
        this.element.insertAdjacentHTML
    }
}
export default Snack