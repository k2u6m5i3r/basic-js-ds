const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    // корень двоичного дерева поиска
    this.rootNode = null;
  }
  root() {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    return this.rootNode;
  }

  add(data) {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    const newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }
    let currenNode = this.rootNode;
    while (currenNode) {
      if (newNode.data < currenNode.data) {
        if (!currenNode.left) {
          currenNode.left = newNode;
          return;
        }
        currenNode = currenNode.left;
      } else {
        if (!currenNode.right) {
          currenNode.right = newNode;
          return;
        }
        currenNode = currenNode.right;
      }
    }
  }

  has(data) {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    // let fined = ;
    return this.search(this.rootNode, data) ? true : false;
  }

  find(data) {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    return this.search(this.rootNode, data);
  }
  search(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }
  remove(data) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    // this.removeNode(this.root, data);
  }
  removeNode(node, data) {
    if (node === null) {
      return null;
      // если данные, которые нужно удалить, меньше, чем данные корня, переходим к левому поддереву
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
      // если данные, которые нужно удалить, больше, чем данные корня, переходим к правому поддереву
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
      // если данные такие как данные корня, удаляем узел
    } else {
      // удаляем узел без потомков (листовой узел (leaf) или крайний)
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      // удаляем узел с одним потомком
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      // удаляем узел с двумя потомками
      // minNode правого поддерева хранится в новом узле
      let newNode = this.minNode(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
    }
  }
  // minNode(node) {
  //   // если слева от узла ноль тогда это должен быть минимальный узел
  //   if (node.left === null) return node;
  //   else return this.findMinNode(node.left);
  // }
  min() {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    if (!this.rootNode) {
      //дерево пустое
      return null;
    }
    let currenNode = this.rootNode;
    while (currenNode) {
      if (!currenNode.left) {
        return currenNode.data;
      }
      currenNode = currenNode.left;
    }
  }

  max() {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    if (!this.rootNode) {
      //дерево пустое
      return null;
    }
    let currenNode = this.rootNode;
    while (currenNode) {
      if (!currenNode.right) {
        return currenNode.data;
      }
      currenNode = currenNode.right;
    }
  }
}

module.exports = {
  BinarySearchTree
};