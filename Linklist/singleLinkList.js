/**
 * 单链表操作
 */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = new Node('head');
  }

  //根据值找到对应节点
  findByValue(v) {
    let curretNode = this.head;
    while(curretNode !== null && curretNode.element !== v) {
      curretNode = curretNode.next;
    }
    return curretNode === null ? -1 : curretNode;
  }

  // 根据index查找节点，下标从0开始
  findByIndex(index) {
    let currentNode = this.head.next;
    let currentIndex = 0;
    while(currentIndex !== index && currentNode !== null) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode === null ? -1 : currentNode;
  }

  //向链表末尾加入元素
  append(newElement) {
    const newNode = new Node(newElement);
    let curretNode = this.head;
    while(curretNode.next) {
      curretNode = curretNode.next;
    }
    curretNode.next = newNode;
  }

  //向指定元素后面插入
  insert(newElement, element) {
    const currentNode = this.findByValue(element)
    if (currentNode === -1) {
      console.log('未找到插入位置')
      return
    }
    const newNode = new Node(newElement)
    newNode.next = currentNode.next
    currentNode.next = newNode
  }

  //查找前一个节点
  findPrevNode(item) {
    let currentNode = this.head;
    while(currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next;
    }
    if(currentNode.next === null) {
      return -1;
    } 
    return currentNode;
  }

  //根据值删除
  remove(item) {
    const prevNode = this.findPrevNode(item);
    if(prevNode === -1) {
      console.log('不存在该节点');
      return -1;
    }
    prevNode.next = prevNode.next.next;
  }

  //遍历显示所有的节点
  display() {
    let currentNode = this.head;
    while(currentNode.next !== null) {
      console.log(currentNode.next.element);
      currentNode = currentNode.next;
    }
  }
}
