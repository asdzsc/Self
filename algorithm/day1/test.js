// 构造函数，表示链表的节点

function Node(value) {
    this.value = value; //节点的数据
    this.next = null; //下一个节点的地址
}



/**
 * 遍历一个链表，打印每个节点的数据
 * @param root 链表的根节点
 */
function print(root) {
    //穷举法
    // var node = root
    // while (node) {
    //     //如果node有值，打印
    //     console.log(node.value)
    //     node = node.next
    // }

    //分治法
    if (root) {
        console.log(root.value)//打印自己
        print(root.next)
    }

}



/**
 * 计算链表的长度
 * @param {*} root
 */ 
function count(root) {
    if (!root) return 0; //链表没有节点
    return 1 + count(root.next) //1表示根节点占用数量
}



/**
 * 得到链表的某个下标的数据
 * @param {*} root 
 * @param {*} index 
 */
function getVal(root,index) {
    /**
     * 判断某个节点是否是我要查找的节点
     * @param {*} node 表示要查找的某个节点
     * @param {*} i 该节点是第几个节点
     */
    function _getVal(node,i) {
        if (!node) return null;
        if (i === index ) return node;
        return _getVal(node.next, i + 1)
    }
    return _getVal(root,0)
}


/** 
 * 设置链表某个位置的数据
*/
function setVal(root,index,value) {
    function _setVal(node, i) {
        if (!node) return;
        if (i === index) {
            node.value = value
        }
        else{
            _setVal(node.next, i + 1)
        }
    }
    _setVal(root,0)
}



/**
 *在某个链表节点之后加入一个新节点
 * @param {*} node 在哪个节点后加入
 * @param {*} newVal 新节点的数据
 */
function insertAfter(node, newVal) {
    var newNode = new Node(newVal); //构建新节点
    newNode.next = node.next;
    node.next = newNode;
}


/**
 * 在链表末尾加入新节点
 */
function push(root,newVal) {
    //判断root是不是最后一个节点
    if (!root.next) {
        var newNode = new Node(newVal); //构建新节点
        root.next = newNode
    }
    else{
        push(root.next,newVal)//自己不是最后一个,看下一个
    }
}


/**
 * 根据给定的链表和给定要删除的值,删除对应节点
 * @param {*} root
 * @param {*} nodeVal
 */
function removeNode(root,nodeVal) {
    if (!root.next || !root) return;//无法删除的情况
    if (root.next.value == nodeVal) {
        // 下一个节点是要找的节点
        root.next = root.next.next
    }
    else{
        //下一个节点不是要找节点
        removeNode(root.next,nodeVal)
    }
}



/**
 *给定一个链表返回一个倒序后的根节点
 * @param {*} root
 */
function reverse(root) {
    if (!root || !root.next) return root;
    if (!root.next.next) {
        let temp = root.next;//保存返回的节点
        //有两个节点的链表
        root.next.next = root;
        root.next = null;
        return temp
    }else{
        let temp = reverse(root.next);//后续节点倒序
        root.next.next = root;
        root.next = null;
        return temp
    }
}

let a = new Node('a')
let b = new Node('b')
let c = new Node('c')

a.next = b;
b.next = c;

// insertAfter(a, 'f')

// removeNode(a, 'b')
// console.log(getVal(a, 1))
// setVal(a,1,'hello')
// print(a)

// push(c,'e')
var temp =  reverse(a)
print(temp)
