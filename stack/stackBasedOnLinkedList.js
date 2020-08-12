/**
 * 基于链表实现的栈
**/
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class StackBasedOnLinkedList {
  constructor() {
    this.top = null;
  }

  push(item) {
    const node = new Node(item);
    if(this.top !== null) {
      node.next = this.top;
      this.top = node;
    }
    else {
      this.top = node;
    }
  }

  pop() {
    if(this.top === null) return -1;
    const current = this.top;
    this.top = current.next;
    return current.element;
  }

  clear() {
    this.top = null;
  }

  display() {
    if(this.top === null) return;
    let temp = this.top;
    while(temp !== null) {
      console.log(temp.element);
      temp = temp.next;
    }
  }
}

exports.CreateStack = StackBasedOnLinkedList;




