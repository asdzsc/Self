import Food from './Food'
import Snack from './Snack'
import ScorePanel from './ScorePanel'


//游戏控制器，控制其他的所有类
class GameControl {
    // 定义三个属性
    // 蛇
    snack: Snack
    // 食物
    food: Food
    // 记分牌
    scorePanel: ScorePanel
    // 创建一个属性来存储蛇的移动方向
    direction: string = ''
    // 创建一个属性来记录游戏是否结束
    isLive: true

    constructor() {
        this.snack = new Snack()
        this.food = new Food()
        this.scorePanel = new ScorePanel()

        this.init()
    }
    // 游戏初始化的方法，调用后游戏即开始
    init() {
        // throw new Error('Method not implemented.')
        document.addEventListener("keydown", this.handleKeydown.bind(this))
        // 调用run方法 使蛇移动
        this.run()
    }

    // 创建一个键盘按下的事件   
    handleKeydown(e: KeyboardEvent) {
        // console.log(this);
        // console.log(e);
        // 修改direction的属性
        this.direction = e.key
    }

    run() {
        /**
         *根据方向(this.direction)来改变蛇的位置
         *      向上 top 减少
         *      向下 top 增加
         *      向左 left 减少
         *      向右 left 增加
         */
        // 获取蛇现在坐标
        let X = this.snack.X
        let Y = this.snack.Y
        switch (this.direction) {
            case "ArrowUp":
            case "UP":
                // 向上移动
                Y -= 10
                break;
            case "ArrowDown":
            case "Down":
                // 向下移动
                Y += 10
                break;
            case "ArrowLeft":
            case "Left":
                // 向左移动
                X -= 10
                break;
            case "ArrowRight":
            case "Right":
                // 向右移动
                X += 10
                break;
        }
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }

}

export default GameControl