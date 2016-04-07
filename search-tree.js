var myBinTree = new BinTree(new Node(8));
myBinTree.root.left = new Node(3);
myBinTree.root.left.left = new Node(1);
myBinTree.root.left.right = new Node(6);
myBinTree.root.left.right.left = new Node(4);
myBinTree.root.left.right.right = new Node(7);
myBinTree.root.right = new Node(10);
myBinTree.root.right.right = new Node(14);
myBinTree.root.right.right.left = new Node(13);



function Node(value, left, right){
  this.value = value; 
  this.left = null; 
  this.right = null;  
}

var newNode = new Node(8);
newNode.left = new Node(4);
newNode.right = new Node(3);

// console.log(myBinTree.root.right.value);

function BinTree(root){
  this.root = root; 
}

// BinTree.prototype.lowest(value){
//   if (!node) {
//     node = this.root;
//   }
//   if (node.left){
//     return this.lowest(node.left);
//   } else {
//     return node;
//   }
// }; 

var array = [];
BinTree.prototype.PreOrderDFS = function(node, values){
  if (!node) {
    node = this.root;
    array.push(node.value);
  }
  if (node.left){
    array.push(node.left.value);
  }
  this.PreOrderDFS(node.left);
  if (node.right){
    array.push(node.right.value);
  }
  this.PreOrderDFS(node.right);
  return array;
}

console.log(myBinTree.PreOrderDFS());

// InOrderDFS();
// PostOrderDFS();


module.exports = {
  BinTree: BinTree,
  Node: Node
};


