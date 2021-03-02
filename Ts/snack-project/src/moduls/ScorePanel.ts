//  定义计分牌的类
class ScorePanel {
    // score和level用来记录分数和等级
    score = 0;
    level = 0;
    // 分数和等级所在元素，在构造函数中进行初始化
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    // 设置一个变量限制等级
    maxLevel: number;
    // 设置一个变量升级分数
    scoreUp: number;
    constructor(maxLevel: number = 10, scoreUp: number = 10) {
        this.scoreEle = document.querySelector(".score") as HTMLElement;
        this.levelEle = document.querySelector(".level") as HTMLElement;
        this.maxLevel = maxLevel;
        this.scoreUp = scoreUp;
    }
    // 设置一个加分的方法
    addScore() {
        // 使分数自增
        this.scoreEle.innerHTML = ++this.score + ''
        if (this.score % this.scoreUp === 0) {
            this.levelUp()
        }
    }
    // 提升等级的方法
    levelUp() {
        if (this.level < this.maxLevel) {
            // 使等级自增
            this.levelEle.innerHTML = ++this.level + ''
        }
    }
}

/**
 * const scorePanel = new ScorePanel(50, 5)
 * for (let i = 0; i < 11; i++) {
 *  scorePanel.addScore()
 * }
 */

export default ScorePanel