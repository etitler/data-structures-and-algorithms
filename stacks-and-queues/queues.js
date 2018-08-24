'use strict';

class Queue {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

}

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

module.exports = Queue;