export class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
  
    constructor(value: T) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  export class BinaryTree<T> {
    root: TreeNode<T> | null;
  
    constructor() {
      this.root = null;
    }
  
    insert(value: T): void {
      const newNode = new TreeNode(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  }