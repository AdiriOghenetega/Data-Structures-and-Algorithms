//Data Structures

//Built in data structures
//Arrays
let arr = [1, 2, 3, 4, "tega"];
//array methods and their time complexities
arr.push(8); //constant time complexity
arr.pop(); //constant time complexity
arr.unshift(10); //linear time complexity
arr.shift(); //linear time complexity
arr.concat([5, 6, 7]); //linear time complexity
arr.filter((item) => item == 0); //linear time complexity
arr.forEach((item) => item); //linear time complexity
arr.reduce((acc, curr) => acc + curr, 0); //linear time complexity
arr.map((item) => item); //linear time complexity
for (let value of arr) {
  console.log(value); //interating over values of array - linear time complexity
}

//Objects
let myObj = {
  name: "tega",
  "nick-name": "atdev",
  render: () => console.log(this.name),
};
//object properties , methods and their time complexities
//properties
myObj.name || myObj["nick-name"]; //accessing value through key - constant time complexity
myObj.name = "kevwe"; //inserting a value through key - constant time complexity
delete myObj.name; //removing a value throughkey - constant time complexity
//methods
Object.entries(myObj); //returns a list of all the key:value pairs in an object - linear time complexity
Object.keys(myObj); //returns a list of all the keys in an object - linear time complexity
Object.values(myObj); //returns a list of all the values in an object - linear time complexity

//Sets
//Sets are similar to arrays, the difference are that sets only allow unique values(i,e one value cannot be represented twice on a set),sets donot respect the insertion order(i.e values are not organized in order of insertion)
let mySet = new Set([1, 2, 3, 4, 5]);
//Sets properties , methods and their time complexities
//properties
for (let value of mySet) {
  console.log(value); //iterating through a set - linear time complexity
}
mySet.add(6); //inserting a value to set - constant time complexity
mySet.has(4); //search for a given value in the set, returns an array - linear time complexity
mySet.size; //length of set - linear time complexity
mySet.delete(5); //removing a given value from set - constant time complexity
mySet.clear(); //removing all values from set - linear time complexity

//Maps
//Maps are similar to objects . the differences are:
// maps are ordered
//keys in maps can be of any type
//map does not contain any default keys
//maps are iterable
//map has size property
//you cannot attach functionality to maps,maps are restricted to storing data

let myMap = new Map([
  ["a", 3],
  ["b", 4],
]);
//Maps properties , methods and their time complexities
//properties
for (let [key, value] of myMap) {
  console.log(`${key}:${value}`); //iterating through the Map
}
myMap.size; //determing the length of the Map
myMap.set("c", 6); //inserting a key:value pair into Map
myMap.has("a"); //searching for a value through key in Map
myMap.delete("a"); //deleting a key:value pair through key in Map
myMap.clear(); //removing all key:values pairs from Map

//Custom Data Structures

//Stacks

//stacks are lifo data structures(last in first out,l.i.f.o) - constant time complexity
//implementing a stack data structure and its properties and methods
class Stack {
  constructor() {
    this.item = [];
  }

  push(element) {
    this.item.push(element);
  }

  pop() {
    return this.item.pop();
  }
  peek() {
    if(!this.isEmpty()){

      return this.item[this.item.length - 1];
    }else{
      return null
    }
  }
  size() {
    return this.item.length;
  }
  isEmpty(){
    return this.item.length === 0
  }
  print() {
    console.log(this.item.toString());
  }
}

let myStack = new Stack
myStack.print()
myStack.push(4)
myStack.push(5)
console.log(myStack.peek())
myStack.pop()
console.log(myStack.size())
myStack.print()
console.log(myStack.isEmpty())

//Queues
//queues are fifo data structures(first in first out,f.i.f.o) 
//implementing a queue data structure and its properties and methods
class Queue {
  constructor(){
    this.items = []
  }
  enqueue(element){
    this.items.push(element)
  }
  dequeue(){
    return this.items.shift()
  }
  size(){
    return this.items.length
  }
  isEmpty(){
    return this.items.length === 0
  }
  peek(){
    if(!this.isEmpty()){
      return this.items[0]
    }else{
      return null
    }
  }
  print(){
    console.log(this.items.toString())
  }
}
const myItem = new Queue()
myItem.enqueue(2) //constant time complexity
myItem.enqueue(4) 
myItem.enqueue(20)
myItem.print()
console.log(myItem.dequeue())//linear time complexity
console.log(myItem.peek())
console.log(myItem.size())

//Queue Implementation Optimised
class OpQueue{
  constructor(){
    this.items = {}
    this.front= 0
    this.rear = 0
  }
  enqueue(element){
    this.items[this.rear] = element
    this.rear++
  }
  dequeue(){
const item = this.items[this.front]
delete this.items[this.front]
this.front++
return item
  }
  size(){
    return this.rear - this.front
  }
  isEmpty(){
    return this.size() === 0
  }
  peek(){
    return this.items[this.front]
  }
  print(){
    console.log(this.items)
  }
}

const item = new OpQueue()
item.enqueue(2) //constant time complexity
item.enqueue(4) 
item.enqueue(20)
item.print()
console.log(item.dequeue())//constant time complexity
console.log(item.peek())
console.log(item.size())

//Circular queues
//are fifo data structures(first in first out,f.i.f.o) 
//implementation
class CircularQueue{
  constructor(capacity){
this.items = new Array(capacity)
    this.currentLength = 0
    this.capacity = capacity
    this.rear = -1
    this.front= -1
  }
  isFull(){
    return this.capacity === this.currentLength
  }
  isEmpty(){
   return this.currentLength === 0
  }
  enqueue(element){
  if(this.isFull()){
    return null
  }else{
this.rear = (this.rear + 1) %this.capacity
this.items[this.rear]= element
this.currentLength += 1
if(this.front === -1){
  this.front = this.rear
}
  }
}

dequeue(){
  if(this.isEmpty()){
    return null
  }else{
    const item = this.items[this.front]
    this.items[this.front] = null
    this.front = (this.front + 1)%this.capacity
    this.currentLength -= 1
    if(this.isEmpty()){
      this.front = -1
      this.rear = -1
    }
    return item
  }
}

peek(){
if(this.isEmpty()){
  return null
}else{
  return this.items[this.front]
}
}

print(){
  if(this.isEmpty()){
    console.log("queue is empty")
  }else{
    let i
    let str = ""
    for( i= this.front; i !== this.rear; i = (i+1)%this.capacity){
      str += this.items[i] + " "
    }
    str += this.items[i]
    console.log(str)
  }
}
}

const circ = new CircularQueue(5)

console.log(circ.isEmpty())
console.log(circ.isFull())
circ.enqueue(10)
circ.enqueue(20)
circ.enqueue(30)
circ.enqueue(40)
circ.enqueue(50)
console.log(circ.dequeue())
console.log(circ.peek())
circ.print()
circ.enqueue(60)
circ.print()

//Linked lists
//a linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence.

//implementation
//first create a node class that accepts a value and has a next property that points to null
class node{
  constructor(value){
    this.value = value
    this.next = null
  }
}
//create the linked list class
class linkedList{
  constructor(){
    this.head = null
    this.size = 0
  }

  isEmpty(){
    return this.size === 0
  }
  getSize(){
    return this.size
  }
  prepend(value){
    const myNode = new node(value)
    if(this.isEmpty()){
      this.head = myNode
    }else{
      myNode.next = this.head
      this.head = myNode
    }
    this.size++
  }
  append(value){
    const myNode = new node(value)
    if(this.isEmpty()){
      this.head = myNode
    }else{
      let prev = this.head
      while(prev.next){
        prev=prev.next
      }
      prev.next=myNode
    }
    this.size++
  }
  insert(value,index){
    if(index < 0 || index > this.size){
      console.log("invalid index")
      return
    }else if(index === 0){
      this.prepend(value)
    }else if(index >= 0 || index <= this.size){
      const myNode = new node(value)
      let prev = this.head
      for(let i=0;i< index -1;i++ ){
        prev = prev.next
      }
      
      myNode.next = prev.next
      prev.next = myNode

      this.size ++
    }
  }
  remove(index){
    let removedNode 
    if(index < 0 || index >= this.size){
      console.log("invalid index")
      return null
    }else if(index === 0){
      removedNode = this.head
      this.head = this.head.next
    }else if(index >= 0 || index < this.size){
      let prev = this.head
      for(let i=0;i< index -1;i++ ){
        prev = prev.next
      }
      removedNode = prev.next
      prev.next = removedNode.next
    }
    this.size --
     return removedNode.value
  }

removeByValue(value){
  let removedNode
  if(this.isEmpty()){
    console.log("nodelist is empty")
    return null
  }else if(value === this.head.value){
    removedNode = this.head
    this.head = this.head.next
    this.size --
    return removedNode.value
  }else if(value !== this.head.value){
    let prev = this.head
    while(prev.next && prev.next.value !== value){
      prev = prev.next
    }
    if(prev.next){
   removedNode = prev.next
   prev.next = removedNode.next
   this.size --
   return removedNode.value
    }else{
      console.log("invalid value")
      return null
    }
  }
}

search(value){
if(this.isEmpty()){
  return -1
}else{
  let i=0
  let curr = this.head
  while(curr){
    if(curr.value === value){
      return i
    }else{
      curr = curr.next
      i++
    }
  }
  return -1
}
}

reverse(){
  let prev = null
  let curr = this.head
  while(curr){
    let nxt = curr.next
    curr.next = prev
    prev = curr
    curr = nxt
  }
  this.head=prev
}

  print(){
    if(this.isEmpty()){
      console.log("list is empty")
    }else{
      let curr = this.head
      let list = ""
      while(curr){
        list += curr.value + " "
        curr = curr.next
      }
      console.log(list)
    }
  }
}

const myList = new linkedList()

console.log(myList.isEmpty())
console.log(myList.getSize())
myList.prepend(10)//constant case complexity
myList.prepend(20)
myList.prepend(30)
console.log(myList.getSize())
myList.print()
myList.append(40)//linear case complexity
myList.insert(20,10)
myList.insert(50,2)
myList.print()
myList.insert(60,5)
console.log(myList.getSize())
console.log(myList.remove(1))
console.log(myList.getSize())
console.log(myList.removeByValue(1))
console.log(myList.removeByValue(30))
console.log(myList.removeByValue(10))
myList.print()
console.log(myList.search(30))
myList.reverse()
myList.print()

//linkedlist implementation with tail property
class Node{
  constructor(value){
    this.value=value
    this.next=null
  }
}

class LinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.size = 0
  }
  isEmpty(){
    return this.size === 0
  }
  getSize(){
    return this.size
  }
  prepend(value){
   const node = new Node(value)
   if(this.isEmpty()){
    this.head = node
    this.tail = node
   }else{
    node.next = this.head
    this.head = node
   }
   this.size++
  }
  append(value){
    const node = new Node(value)
    if(this.isEmpty()){
    this.head = node
    this.tail = node
   }else{
    this.tail.next = node
    this.tail = node
   }
   this.size++
  }

  removeFromFront(){
  if(this.isEmpty()){
    return null
  }
  let removedNode
   if(this.size === 1){
     removedNode = this.head
    this.head = null
    this.tail = null
    this.size--
  }else{
    removedNode = this.head
    this.head = this.head.next
    this.size--
  }
 
  return removedNode.value
  }

  removeFromEnd(){
if(this.isEmpty()){
  return null
}
let removedNode
if(this.size === 1){
  removedNode = this.tail
 this.head = null
 this.tail = null
 this.size--
return removedNode.value
}else{
  let prev = this.head
  while(prev.next !== this.tail){
    prev = prev.next
  }
  removedNode = prev.next
  prev.next = null
  this.tail = prev

  this.size--
return removedNode.value
}

  }

  print(){
    if(this.isEmpty()){
      console.log("list is empty")
    }else{
      let curr = this.head
      let list = ""
      while(curr){
        list += curr.value + " "
        curr = curr.next
      }
      console.log(list)
    }
  }
}

const list = new LinkedList()

console.log(list.isEmpty())
console.log(list.getSize())
list.prepend(10)//constant case complexity
list.prepend(20)
list.prepend(30)
console.log(list.getSize())
list.print()
list.append(40)
list.print()
console.log(list.removeFromFront())
list.print()
console.log(list.removeFromEnd())
list.print()

//Linked list stack - implementing stack using linked list structure

class LinkedListStack{
  constructor(){
    this.list = new LinkedList()
  }

  push(value){
    this.list.prepend(value)
  }
  pop(){
    return this.list.removeFromFront()
  }
  peek(){
    return this.list.head.value
  }
  isEmpty(){
    return this.list.isEmpty()
  }
  getSize(){
    return this.list.getSize()
  }
  print(){
    return this.list.print()
  }
}

const linkedStack = new LinkedListStack()

console.log(linkedStack.isEmpty())
console.log(linkedStack.getSize())
linkedStack.push(10)
linkedStack.push(20)
linkedStack.push(30)
linkedStack.print()
linkedStack.pop()
console.log(linkedStack.peek())
console.log(linkedStack.getSize())
linkedStack.print()

//queue implementation with linked list
class LinkedListQueue{
  constructor(){
    this.list = new LinkedList
  }

  enqueue(value){
    this.list.append(value)
  }
  dequeue(){
    return this.list.removeFromFront()
  }
  peek(){
    return this.list.head.value
  }
  isEmpty(){
    return this.list.isEmpty()
  }
  getSize(){
    return this.list.getSize()
  }
  print(){
    return this.list.print()
  }
}

const linkedQueue = new LinkedListQueue()

console.log(linkedQueue.isEmpty())
console.log(linkedQueue.getSize())
linkedQueue.enqueue(10)
linkedQueue.enqueue(20)
linkedQueue.enqueue(30)
linkedQueue.print()
linkedQueue.dequeue()
console.log(linkedQueue.peek())
console.log(linkedQueue.getSize())
linkedQueue.print()

//Doubly-the linked list data structures we've discussed so far are singly linked list. Doubly linked list is very similar, only diffrence is that each node has a previous pointer in addition to the next pointer.As a result,removal and insertion at both ends are of constant time complexity, but at the expense of more space 

//implementation
class DoublyNode{
constructor(value){
this.value = value
this.next = null
this.prev = null
}
}

class DoublyLinkList{
  constructor(){
    this.head = null
    this.tail = null
    this.size = 0
  }
  isEmpty(){
    return this.size === 0
  }
  getSize(){
    return this.size
  }
  prepend(value){
    let node = new DoublyNode(value)
    if(this.isEmpty()){
this.head = node
this.tail = node
    }else{
      node.next = this.head
      this.head.prev = node
      this.head = node
    }
    this.size ++
  }

  append(value){
    let node = new DoublyNode(value)
    if(this.isEmpty()){
      this.head = node
      this.tail = node
          }else{
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
          }
          this.size ++
  }
  removeFromFront(){
    if(this.isEmpty()) return null

    if(this.size === 1) {
      this.head = null
      this.tail = null
    }

    const value = this.head.value
    this.head = this.head.next
    this.head.prev = null
    this.size--

    return value
  }
  removeFromEnd(){
    if(this.isEmpty()) return null
    if(this.size === 1) {
      this.head = null
      this.tail = null
    }
    const value = this.tail.value
    this.tail = this.tail.prev
    this.tail.next = null
    this.size --

    return value
  }
  peek(){
    return this.head.value
  }

  print(){
    if(this.isEmpty()){
      console.log("list is empty")
      return null
    }else{
      let curr = this.head
      let list = ""
      while(curr){
        list += curr.value + " "
        curr = curr.next
      }
      console.log(list)
    }
    }

    reversePrint(){
      if(this.isEmpty()) {
        console.log("list is empty")
        return 
      }else{
        let curr = this.tail
        let list = ""
        while(curr){
          list += curr.value + " "

          curr = curr.prev
        }
        console.log(list)
      }
    }
  
}

const doubledList = new DoublyLinkList()

console.log(doubledList.isEmpty())
console.log(doubledList.getSize())
doubledList.prepend(10)
doubledList.prepend(20)
doubledList.print()
doubledList.append(30)
doubledList.append(40)
console.log(doubledList.peek())
doubledList.print()
console.log(doubledList.removeFromFront())
console.log(doubledList.removeFromEnd())
console.log(doubledList.peek())
doubledList.reversePrint()


//Hash tables
//A hash table is a data structure that is used to store keys/value pairs. It uses a hash function to compute an index into an array in which an element will be inserted or searched. By using a good hash function, hashing can work well.objects and map data structures are implementation of hash table data structure
//implementation
class HashTable{
  constructor(size){
    this.table = new Array(size)
    this.size = size
  }
  hash(key){
    let index = 0
    for(let i=0;i<key.length;i++){
      index += key.charCodeAt(i) 
    }
  return index % this.size
  }
  set(key,value){
    let index = this.hash(key)
    this.table[index] = value
  }
  get(key){
    let index = this.hash(key)
    if(this.table[index]){
      return this.table[index]
    }

  }
  remove(key){
    let index = this.hash(key)
    if(this.table[index]){
      let removedValue = this.table[index]
      this.table[index] = undefined
      return removedValue
    }

  }
display(){
  for(let i=0;i<this.size;i++){
    if(this.table[i]){
      console.log(i,this.table[i])
    }
  }
}
}

const myTable = new HashTable(50)

myTable.set("name","adiri")
myTable.set("age",28)
myTable.display()
console.log(myTable.get("age"))
console.log(myTable.remove("name"))
myTable.display()

//the implementation above leaves room for collision , that is,if more than one key/value pairs with the keys having the same characters(even if spelt differentlye.g name and mane),one key/value pair will overwrite the other thus leading to loss of data which is not desired in a sytem .
//implementation to prevent collision
class HashTableWithoutCol{
  constructor(size){
    this.table = new Array(size)
    this.size = size
  }
  hash(key){
    let index = 0
    for(let i=0;i<key.length;i++){
      index += key.charCodeAt(i) 
    }
  return index % this.size
  }
  set(key,value){
    let index = this.hash(key)
    let bucket = this.table[index]
    if(!bucket){
      this.table[index] = [[key,value]]
    }else{
      let sameKey = bucket.find(item=> item[0] === key)
      if(sameKey){   
      sameKey[1] = value
      }else{
        bucket.push([key,value])
      }
    }
    
  }
  get(key){
    let index = this.hash(key)
    let bucket = this.table[index]
    if(bucket){
      let sameKey = bucket.find(item=> item[0] === key)
      if(sameKey){
        return sameKey[1]
    }
    }
   return undefined

  }
  remove(key){
    let index = this.hash(key)
    let bucket = this.table[index]
    if(bucket) {
      let sameKey = bucket.find(item=> item[0] === key)
     if(sameKey){
       bucket.splice(bucket.indexOf(sameKey),1)
       return sameKey
     }
    }
    return null
    }

  
display(){
  for(let i=0;i<this.size;i++){
    if(this.table[i]?.length){
      console.log(i,this.table[i])
    }
  }
}
}

const tab = new HashTableWithoutCol(50)

tab.set("name","adiri")
tab.set("age",28)
tab.set("mane","tega")
tab.display()
console.log(tab.get("age"))
tab.set("age",30)
console.log(tab.remove("name"))
tab.display()


//Trees
//A tree is a hierarchical data structure that consists of nodes connected by edges.Trees are a non-linear datastructure
//Trees have a few properties that are specific to a node .these are :
//Degree(node) - degree of a node is the total number of child nodes it has
//Degree of tree - this is the maximum degree of a node in the tree
//Depth of a node - this is the number of edges from the root to the node.depth of root node is always zero 
//Height of a node - this is the number of edges from the deepest leaf to that node . leaf refers to nodes in the tree that have no children
//Height of tree - this is equal to height of root node
//generic search tree - is a tree data structure implementation in which each node can have many children or nodes
//Binary search tree - is a tree data structure implementation in which each node can have at most two nodes,one on the right, the other on the left. child node smaller than the parent node is placed on the left, child node bigger than the parent node is placed on the right 
//Binary tree implementation
class TreeNode{
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null
  }

  isEmpty(){
    return this.root === null
  }

  insert(value){
    const node = new TreeNode(value)
    if(this.isEmpty()){
      this.root = node
    }else{
      this.insertNode(this.root,node)
    }

  }

  insertNode(root,node){
    if(root.value > node.value){
     if(root.left === null){
      root.left = node
     }else{  
      this.insertNode(root.left,node)
     }
    }else{
      if(root.right === null){
        root.right = node
       }else{
        this.insertNode(root.right,node)
       }
    }
  }

  search(root,value){
    if(!root) return false
    if(value === root.value) return true
    if(value < root.value){
      return this.search(root.left,value)
    }else{
      return this.search(root.right,value)
    }
  }

preOrder(root){
  if(root){
    console.log(root.value)
    this.preOrder(root.left)
    this.preOrder(root.right)
  }
}

inOrder(root){
  if(root){
    this.inOrder(root.left)
    console.log(root.value)
    this.inOrder(root.right)
  }
}
postOrder(root){
  if(root){
    this.postOrder(root.left)
    this.postOrder(root.right)
    console.log(root.value)
  }
}
levelOrder(){
  const queue = new OpQueue()
  queue.enqueue(this.root)
  while(queue.length){
    let curr = queue.dequeue()
    console.log(curr.value)
    if(curr.left){
      queue.enqueue(curr.left)
    }
    if(curr.right){
      queue.enqueue(curr.right)
    }
  }
}
levelOrder2(){
  const queue = []
  queue.push(this.root)
  while(queue.length){
    let curr = queue.shift()
    console.log(curr.value)
    if(curr.left){
      queue.push(curr.left)
    }
    if(curr.right){
      queue.push(curr.right)
    }
  }
}

min(root){
  if(!root) return null
  if(root.left){
    return this.min(root.left)
  }else{
    return root.value
  }
}

max(root){
  if(!root) return null
  if(root.right){
    return this.min(root.right)
  }else{
    return root.value
  }
}

delete(value){
  this.root = this.deleteNode(this.root,value)
}
deleteNode(root,value){
  if(root === null){
    return root
  }
  if(value < root.value){
    root.left = this.deleteNode(root.left,value)
  }else if(value > root.value){
    root.right = this.deleteNode(root.right,value)
  }else{
    if(!root.left && !root.right){
      return null
    }
    if(!root.left){
      return root.right
    }else if(!root.right){
      return root.left
    }
    root.value = this.min(root.right)
    root.right = this.deleteNode(root.right,root.value)
  }
  return root
}
}

const bst = new BinarySearchTree()

console.log(bst.isEmpty())
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log(bst.search(bst.root,15))
console.log(bst.search(bst.root,10))
console.log(bst.search(bst.root,20))
console.log(bst.search(bst.root,18))
bst.preOrder(bst.root)//depth first search traversary
bst.inOrder(bst.root)//depth first search traversary 
bst.postOrder(bst.root)//depth first search traversary
bst.levelOrder()//breadth first search /with optimised queue
bst.levelOrder2()//breadth first search /with regular array 
console.log(bst.min(bst.root))
console.log(bst.max(bst.root))
bst.delete(3)
bst.delete(10)
bst.delete(5)
bst.levelOrder2()


//Graphs
//a graph is a non-linear data structure that consists of a finite number of vertices(a.k.a nodes) connected by edges
//there are two types,directed and undirected . 
//directed has arrows attached to the edges pointing in the direction the graph can be traversed .edges connect one vertext to the other. a vertex in this context is similar to a node in a tree data structure 
//directed graphs have bidirectional edges , no arrows because the graph can traverse in either direction
//a tree datastructure is a specific type of graph data structure , but unlike in trees , graphs do not have an herachical arrangement(i.e from top to bottom when traversing through trees)
//there are two types of undirected graph they are:
//adjacency matrix 
//in this case, the graph is represented with a 2d array as shown below
const adjacencyMatrix = [
  [0,1,0],//each array represents a vertex
  [1,0,1],
  [0,1,0]
]

console.log(adjacencyMatrix[0][1])//checking if vertex of index zero is connected to vertex of index 1 , in the graph . returns 1 if connected , returns 0 if not
console.log(adjacencyMatrix[1][2])
console.log(adjacencyMatrix[2][0])
//adjacency list
//in this case , the graph is represented with a set-like object , with each vertex containing a list of its adjacent vertices as shown below
const adjacencyList={
  "A": ["B"],
  "B":["A","C"],
  "C":["B"]
}

console.log(adjacencyList["A"])//returns list of nodes vertex "A" is connected to
console.log(adjacencyList["B"])
console.log(adjacencyList["C"])

//comparism between adjacencyMatrix and adjacencyList
// with adjacencylist, we only need to store values for edges that ecist,with adjacencymatrix we store values irrespective of whether an edge exists or not.so,storage-wise,adjacencylist is more efficient
//with adjacencylist,inserting and findinf adjacent nodes is constant time complexitywhereas with adjacencymatrix,it is linear time complexity
//adjacencylist allows you to store additional values with an edge such as weight of the edge.with adjacencymatrix,such information would have to be stored externally

//implentation of undirected graph data structre(using the adjacencylist representation)
class Graph{
  constructor(){
    this.adjacencylist = {}
  }

  addVertex(vertex){
  if(!this.adjacencylist[vertex]){
    this.adjacencylist[vertex] = new Set()
  }
  }

  addEdge(vertex1,vertex2){
if(!this.adjacencylist[vertex1]){
this.addEdge(vertex1)
}
if(!this.adjacencylist[vertex2]){
  this.addEdge(vertex2)
}
this.adjacencylist[vertex1].add(vertex2)
this.adjacencylist[vertex2].add(vertex1)
}

  hasEdge(vertex1,vertex2){
    if(!this.adjacencylist[vertex1]) return
    if(!this.adjacencylist[vertex2]) return
    return this.adjacencylist[vertex1].has(vertex2) && this.adjacencylist[vertex2].has(vertex1)
  }

  display(){
    for(let vertex in this.adjacencylist){
      console.log(vertex + "->" + [...this.adjacencylist[vertex]])
    }
  }
  removeEdge(vertex1,vertex2){
    if(!this.adjacencylist[vertex1]) return
    if(!this.adjacencylist[vertex2]) return
    this.adjacencylist[vertex1].delete(vertex2)
    this.adjacencylist[vertex2].delete(vertex1)
  }
  removeVertex(vertex){
    if(!this.adjacencylist[vertex]) return
   for(let list of this.adjacencylist[vertex]){
this.removeEdge(vertex,list)
   }
   delete this.adjacencylist[vertex]
  }
  
}

const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A","B")
graph.addEdge("C","B")
graph.display()
graph.removeVertex("A")
graph.display()
graph.removeEdge("B","C")
graph.display()

//Futher Leraning
// priority queue
//circular linked lists
//AVL trees,red black trees and tries
//Directed acrylic graphs
//Prim's,Krushal's and Floyd's algorithms