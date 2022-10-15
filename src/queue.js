const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    //  this.tail = null;
  }

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.head;
  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let currentNew = new ListNode(value);

    if (!this.head) {
      this.head = currentNew;
      this.tail = currentNew;
      // this.tail = currentNew;
      // console.log("header cur tail", this);
      return this;
    }
    this.tail.next = currentNew;
    this.tail = currentNew;

    return this;
  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let returnOfValue = this.head.value;
    if (this.head.next) {
      this.head = this.head.next;
    }
    return returnOfValue;
  }
}


module.exports = {
  Queue
};
