class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    // Add your solution here!
  }

  toArray() {
    // Add your solution here!
  }
}

class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    // Add your solution here!
  }

  toArray() {
    // Add your solution here!
  }
}

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    // Add your solution here!
  }

  toArray() {
    // Add your solution here!
  }
}

module.exports = { LinkedList, Stack, Queue };