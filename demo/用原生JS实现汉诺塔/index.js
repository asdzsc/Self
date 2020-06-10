var minWidth = 60; //编号为1的圆盘宽度
var step = 40; //编号每增加1，增加的宽度
var isOver = false; //是否游戏结束
//移动：数组之间的数据变化
var hannuo = {
    c1: [3, 2, 1],
    c2: [],
    c3: []
}

/**
 * 根据当前hannuo中的数据，生成界面 
 */
function render() {
    renderColumn("c1");
    renderColumn("c2");
    renderColumn("c3");

    /**
     * 根据柱子的编号，渲染某一根柱子
     * @param {*} cno 
     */
    function renderColumn(cno) {
        var divColumn = document.getElementById(cno); //拿到柱子的容器
        divColumn.innerHTML = ""; //清空之前的东西
        var values = hannuo[cno];
        for (var i = 0; i < values.length; i++) {
            var v = values[i];//v就是圆盘编号
            //每一个编号，对应一个div
            var item = document.createElement("div");
            item.className = "item";
            item.style.width = minWidth + (v - 1) * step + "px";
            divColumn.appendChild(item);
        }
    }
}
render();

/**
 * 从一个柱子，移动一个圆盘，到另一个柱子
 * @param {*} from 从哪个柱子移动
 * @param {*} to 移动到哪个柱子
 */
function move(from, to) {
    if (isOver) {
        return;//游戏结束了
    }
    //哪些情况不能移动
    if (from === to) {
        return; //是一个柱子
    }
    var fromValues = hannuo[from]; //得到原始柱子上的所有的圆盘编号
    if (fromValues.length === 0) {
        return; //原始柱子上没有圆盘
    }
    var toValues = hannuo[to]; //得到目标柱子上的所有的圆盘编号

    if (toValues.length === 0) {
        //目标柱子没有圆盘
        //能移动
        _move();
    }
    else if (fromValues[fromValues.length - 1] < toValues[toValues.length - 1]) {
        _move();
    }
    return; //剩余的都无法移动

    /**
     * 实现具体的移动的函数
     */
    function _move() {
        // fromValues的末尾去掉，加入到toValues中
        toValues.push(fromValues.pop());
        //判断游戏是否结束
        if (hannuo.c1.length === 0 && hannuo.c2.length === 0) {
            console.log("游戏结束！！！");
            isOver = true;
        }
        render();
    }
}

move("c2", "c1")

//注册事件
document.getElementById("buttons").onclick = function (e) {
    if (e.target.tagName !== "BUTTON") {
        return; //点的不是按钮
    }
    //目标
    var from = e.target.getAttribute("from")
    var to = e.target.getAttribute("to")
    move(from, to);
}

