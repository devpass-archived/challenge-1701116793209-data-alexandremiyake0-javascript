const { LinkedList, Stack, Queue } = require('./dataStructures');

test('Append value to LinkedList', () => {
  const linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  expect(linkedList.toArray()).toEqual([1, 2, 3]);
});

test('Push value to Stack', () => {
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  expect(stack.toArray()).toEqual([10, 20, 30]);
});

test('Enqueue value to Queue', () => {
  const queue = new Queue();
  queue.enqueue(100);
  queue.enqueue(200);
  queue.enqueue(300);
  expect(queue.toArray()).toEqual([100, 200, 300]);
});