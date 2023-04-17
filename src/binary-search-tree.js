const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
    this.r=null;
  }
  root() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.r;
  }

  add( data ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.r = addWithin(this.r, data);
    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left=addWithin(node.left, data);
      } else {
        node.right=addWithin(node.right, data);
      }
      return node;
    }
  }

  has( data ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return searchWithin(this.r, data);
    function searchWithin(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return searchWithin(node.left, data);
      } else {
        return searchWithin(node.right, data);
      }
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove( data ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.r = removeNode(this.r, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      }    
      if (data < node.data) {
        node.left=removeNode(node.left, data);
      } else if (data < node.data) {
        node.right=removeNode(node.right, data);
      } else {
        /*data===node.data - deleting case*/
        if (!node.left && !node.right) return null;
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        /*both child exist for this item*/
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }   
    }
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.r) {return;}
    let node = this.r;
    while (node.left) {
      node=node.left;
    }
    return node.data;
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.r) {return;}
    let node = this.r;
    while (node.right) {
      node=node.right;
    }
    return node.data;
  }
}

const tree = new BinarySearchTree;

module.exports = {
  BinarySearchTree
};