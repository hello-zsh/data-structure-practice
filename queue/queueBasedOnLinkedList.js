/**
 * 基于链表实现的队列
 */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  //入队
  enqueue(value) {
    const newNode = new Node(value);
    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  //出队
  dequeue() {
    if(this.head === null) {
      console.log('队列中无数据');
      return -1;
    }
    const value = this.head.element;
    this.head = this.head.next;
    return value;
  }

}

const queueTest = new Queue();
queueTest.enqueue('test1');
queueTest.enqueue('test2');
queueTest.enqueue('test3');
queueTest.enqueue('test4');

//
queueTest.dequeue();
queueTest.dequeue();
queueTest.dequeue();
queueTest.dequeue();
queueTest.dequeue();