function Node(value) {
    this.value = value;
    this.neighbors = [];
}



let a = new Node('a')
let b = new Node('b')
let c = new Node('c')
let d = new Node('d')
let e = new Node('e')

a.neighbors.push(b,c,e)
b.neighbors.push(a,c,d)
c.neighbors.push(a,b)
d.neighbors.push(b,e)
e.neighbors.push(a, e)

console.log(c)