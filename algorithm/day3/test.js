/**
 *树
 * @param {*} value
 */
function Node1(value) {
    this.value = value;
    this.children = [];//子节点
}
let a1 = new Node1('a1')
let b1 = new Node1('b1')
let c1 = new Node1('c1')
let d1 = new Node1('d1')
let e1 = new Node1('e1')

a1.children.push(b1,e1)
b1.children.push(c1,d1)
console.log(a1)



/**
 *二叉树
 * @param {*} value
 */
function Node(value) {
    this.value = value;
    this.left = null; 
    this.right = null; 
}
/**
 *前序遍历
 * @param {*} root
 */
function DLR(root) {
    if (!root) return;
    console.log(root.value)
    DLR(root.left)
    DLR(root.right)
}


/**
 *中序遍历
 * @param {*} root
 */
function LDR(root) {
    if (!root) return;
    LDR(root.left)
    console.log(root.value)
    LDR(root.right)
}




/**
 *后序遍历
 * @param {*} root
 */
function LRD(root) {
    if (!root) return;
    LRD(root.left)
    LRD(root.right)
    console.log(root.value)
}

/**
 *得到一棵树的深度
 * @param {*} root
 */
function getDeep(root) {
    if (!root) return 0;
    var left = getDeep(root.left)
    var right = getDeep(root.right)
    return Math.max(left, right) + 1;
}
// getDeep(root)

/**
 *根据要查找的值,判断树中是否找到
* @param {*} root
* @param {*} targetValue
*/
function deepFirstSearch(root,targetValue) {
    if (!root) return false;
    console.log(root.value)
    if (root.value === targetValue) return true;
    //自己是一个节点,但是节点的值不是要找的值
    var resultLeft = deepFirstSearch(root.left,targetValue)
    var resultRight = deepFirstSearch(root.right,targetValue)
    
    return resultLeft || resultRight
}

function breadthFirstSearch(params) {
    
}
let a = new Node('a')
let b = new Node('b')
let c = new Node('c')
let d = new Node('d')
let e = new Node('e')
let f = new Node('f')

a.left = b;
a.right = e;

b.left = c;
b.right = d;

e.left = f;
 
var result = deepFirstSearch(a,'c')
console.log(result)

DLR(a)
LDR(a)
LRD(a)

/**
 *得到两颗树的差异
 * @param {*} originRoot
 * @param {*} newRoot
 */
function diff(originRoot,newRoot) {
    var results = []//记录所有的差异

    return results;
}

var root1 = getTree('abcd','cbda')
var root2 = getTree('afkes','kfase')

var results = diff(root1,root2)