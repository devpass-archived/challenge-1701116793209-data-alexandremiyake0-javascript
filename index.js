const { LinkedList, Stack, Queue } = require('./dataStructures');

// Create a new linked list
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

console.log('Linked List:', linkedList.toArray());

// Create a new stack
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log('Stack:', stack.toArray());

// Create a new queue
const queue = new Queue();
queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);

console.log('Queue:', queue.toArray());