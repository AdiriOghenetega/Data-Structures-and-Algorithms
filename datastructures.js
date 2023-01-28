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
//Linked lists
//Hash tables
//Trees
//Graphs
