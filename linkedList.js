class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
    this.size = 0;
  }
  add(value) {
    const node = new Node(value);
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
      this.size++;
      return;
    }
    this.tail.next = node;
    this.tail = node;
    this.size++;
    return;
  }
}

/**
 *
 * You are given two non-empty linked lists representing
 * two non-negative integers. The digits are stored in
 * reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 *
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  let node1 = l1;
  let node2 = l2;
  let carry = 0;

  const dummyHead = new ListNode(0);
  let currentNode = dummyHead;

  while (node1 || node2 || carry > 0) {
    const digitSum = (node1 ? node1.val : 0) + (node2 ? node2.val : 0) + carry;

    carry = Math.floor(digitSum / 10);
    const currentDigit = digitSum % 10;

    const newNode = new ListNode(currentDigit);
    currentNode.next = newNode;
    currentNode = newNode;

    if (node1) {
      node1 = node1.next;
    }
    if (node2) {
      node2 = node2.next;
    }
  }

  return dummyHead.next;
};

//================================================

var addTwoNumbers = function(l1, l2) {
  let sum = 0;
  let current = new ListNode(0);
  let result = current;

  while (l1 || l2) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    current.next = new ListNode(sum % 10);
    current = current.next;

    sum = sum > 9 ? 1 : 0;
  }

  if (sum) {
    current.next = new ListNode(sum);
  }

  return result.next;
};
