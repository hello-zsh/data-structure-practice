/**
 * 使用前后栈实现浏览器的前进后退。
 * 
 */

const stack = require('./StackBasedOnLinkedList')

class Browser {
  constructor() {
    //需要定义两个栈
    // 前进栈 和 后退栈
    this.normalStack = new stack.CreateStack();
    this.backStack = new stack.CreateStack();
  }

  push(item) {
    this.normalStack.push(item);
    //每次新进一个页面回退栈都应该清空
    this.backStack.clear();
    this.displayAllStack();
  }

  //后退
  back() {
    const value = this.normalStack.pop();
    if(value !== -1) {
      this.backStack.push(value);
      this.displayAllStack();
    }
    else {
      console.log('不能后退');
    }
  }

  //前进
  front() {
    const value = this.backStack.pop();
    if(value !== -1) {
      this.normalStack.push(value);
      this.displayAllStack();
    }
    else {
      console.log('不能前进');
    }
  }

  //展示所有栈
  displayAllStack() {
    console.log('后退页面')
    this.backStack.display();
    console.log('浏览页面');
    this.normalStack.display();
  }
}

const browser = new Browser()
browser.push('www.google.com')
browser.push('www.baidu.com')
browser.push('www.github.com')
// 后退
browser.back()

browser.back()
browser.front()
browser.push('www.new.com')