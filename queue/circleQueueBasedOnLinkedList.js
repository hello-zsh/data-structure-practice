/**
 * 基于链表实现的循环队列
 */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class CircleQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  //入队
  enqueue(value) {
    const newNode = new Node(value);
    if(this.head === null) { //队列为空时
      this.head = newNode;
      this.head.next = this.head;
      this.tail = this.head;
    }
    else { //队列不为空
      const flag = this.head === this.tail;
      this.tail.next = newNode;
      this.tail = this.tail.next;
      this.tail.next = this.head;
      if(flag) {
        this.head.next = this.tail;
      }
    }
  }

  //出队
  dequeue() {
    if(this.head === null) {
      return -1;
    }
    else {
      const value = this.head.element;
      const flag = this.head === this.tail; 
      if(flag) {
        this.head = null;
      }
      else {
        this.head = this.head.next;
        this.tail.next = this.head;
      }
      return value;
    }
  }

  display() {
    let res = 0;
    while(res !== -1) {
      res = this.dequeue();
      console.log(res);
    }
  }
}

const circleQueue = new CircleQueue();
circleQueue.enqueue('1');
circleQueue.enqueue('2');

circleQueue.dequeue();
circleQueue.display();

