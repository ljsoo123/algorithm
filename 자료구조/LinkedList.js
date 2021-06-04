const { createSourceFile } = require("typescript");

function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.length = 0;
  let head = null;
}

LinkedList.prototype.append = function (data) {
  let node = new Node(data);
  let cur;
  if (this.head == null) {
    this.head = node;
  } else {
    cur = this.head;
    while (cur.next) {
      cur = cur.next;
    }
    cur.next = node;
  }
  this.length++;
};

LinkedList.prototype.delete = function (num) {
  if (num > -1 && num < this.length) {
    let cur = this.head;
    let prev,
      index = 0;
    if (num === 0) {
      this.head = cur.next;
    } else {
      while (index++ < num) {
        prev = cur;
        cur = prev.next;
      }
      prev.next = cur.next;
    }
    this.length--;
    cur.next = null;
    return cur.data;
  }
  return null;
};

LinkedList.prototype.indexOf = function (data) {
  let cur = this.head;
  let index = 0;
  while (cur) {
    if (cur.data === data) {
      console.log(index);
      return index;
    }
    index++;
    cur = cur.next;
  }
  console.log(null);
  return null;
};

LinkedList.prototype.deleteData = function (data) {
  let index = this.indexOf(data);
  return this.delete(index);
};

LinkedList.prototype.insert = function (num, data) {
  if (num >= 0 && num <= this.length) {
    let node = new Node(data);
    let cur = this.head;
    let index = 0,
      prev = 0;

    if (num === 0) {
      node.next = cur;
      this.head = node;
    } else {
      while (index++ < num) {
        prev = cur;
        cur = cur.next;
      }
      node.next = cur;
      prev.next = node;
    }
    this.length++;
    return true;
  }
  return false;
};

var list = new LinkedList();
list.append(10);
list.append(11);
list.append(12);
list.delete(1);
list.indexOf(10);
list.insert(1, 101);
console.log(list);
