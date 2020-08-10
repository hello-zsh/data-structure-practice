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
 
  //反转单链表
  reverseList() {
    let currentNode = this.head.next;
    let prevNode = null;
    while(currentNode !== null) {
      let nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.head.next = prevNode; 
  }

  //环验证 
  //自己想的 有待验证正确性
  checkCircle1() {
    let currentNode = this.head.next;
    while(currentNode !== null && currentNode.next !== this.head) {
      currentNode = currentNode.next;
    }
    return currentNode !== null ? true : false;
  }
  //快慢指针 如果是一个循环 快指针走了两个循环最后的位置和慢指针最后的位置一样
  checkCircle2() {
    let fast = this.head.next;
    let slow = this.head;
    while(fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
      if(fast === slow) return true;
    }
    return false;
  }

  //删除倒数第k个节点
  removeByIndexFromEnd(index) {
    //先判断是否是环
    if(this.checkCircle2()) return false;
    this.reverseList();
    const currenNode = this.findByIndex(index - 1);
    if(currenNode === null) {
      console.log('该节点不存在');
      return false;
    } 
    this.remove(currenNode.element);
    this.reverseList();
  }

  //求中间节点 利用快慢指针
  findMiddleNode() {
    //先判断是否是环
    if(this.checkCircle2()) return false;
    let fast = this.head.next;
    let slow = this.head.next;
    while(fast.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

}

function mergeSortedLists(listA, listB) {
  if(!listA) {
    return listB;
  }
  if(!listB) {
    return listA;
  }
  let a = listA;
  let b = listB;
  const result = new LinkList();
  let currentNode = result.head;
  while(a !== null && b!== null) {
    if(a.element < b.element) {
      currentNode.next = a;
      a = a.next;
    }
    else {
      currentNode.next = b;
      b = b.next;
    }
    currentNode = currentNode.next;
  }
  if(a !== null) {
    currentNode.next = a;
  }
  else if (b !== null) {
    currentNode.next = b;
  }
  return result;
}


