const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.list = null;
  }

  get size() {
    let size = 0;
    let node = this.list;
    while (node.next !== null) {
      size += 1;
      node = node.next;
    }
    return size;
  }

  enqueue(element) {
    if (this.list !== null) {
      let node = this.list;
      while (node.next !== null) {
        node = node.next;
      }
      node.next = new ListNode(element);
    } else {
      this.list = new ListNode(element);
    }
  }

  dequeue() {
    if (this.list) {
      const item = this.list;
      this.list = item.next;
      return item.value;
    }
    return null;
  }
}

module.exports = Queue;
