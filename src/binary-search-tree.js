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
    // корень повторно инициализируется с
    // корень модифицированного дерева.
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  // Метод для удаления узла с
  // предоставленные данные
  // повторяется по дереву, чтобы найти
  // данные и удаляем их
  removeNode(node, key) {
    // если корень нулевой, то дерево
    // пусто
    if (node === null) return null;
    // если данные для удаления меньше чем
    // корни данных затем перемещаемся в левое поддерево
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    }
    // если данные для удаления больше чем
    // корни данных затем перемещаются в правильное поддерево
    else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }
    // если данные похожи на данные корня
    // затем удаляем этот узел
    else {
      // удаляем узел без детей
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
      // Удаление узла с двумя детьми
      // минимальный узел поддерева rigt
      // хранится в aux
      var aux = this.findMinNode(node.right);
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  // Вспомогательная функция

  // findMinNode ()
  // находит минимальный узел в дереве
  // поиск начинается с данного узла
  findMinNode(node) {
    // если слева от узла ноль
    // тогда это должен быть минимальный узел
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }
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