//Question
//write a program that prints the numbers from 1 to 100
//for multiples of 3 print "fizz" instead of the number and for multiples of 5 print "buzz"
//for numbers which are multiples of both three and five, print "fizzbuzz"

(function fizzBuzz(){
    for(let i=1;i<=100;i++){
        if(i%3 !== 0 && i%5 !== 0){
            console.log(i)
        }
         if(i%3 === 0 && i%5 === 0){
            console.log("fizzBuzz")
        }else {
            if(i%3 === 0){
                console.log("fizz")
            }
            if(i%5 === 0){
                console.log("buzz")
            }
        } 
       
    }
})()

//Question
//find the greatest common diviser of two numbers

function divisor(a,b){
    let min = Math.min(a,b)
    let max = min === a ? b:a
    const remainder = max%min
    if(remainder === 0){
        console.log(min)
    }else{
        divisor(remainder,max)
    }
}
divisor(20,30)

//Question
//n kids are sitting in a circle
//k toys available to distribute
//i position to start from
//e.g 3,5,1 => 2 ,3,7,1 => 1

function lastPosition(n,k,i){
    
     if(k + i - 1 > n ){
        return i + (k%n) -1
     }else{
        return i + k -1
     }
    
}
console.log(lastPosition(3,3,2))

//Question
//Currying and Partial Functions in JavaScript
//write a function that works with both of these scenarios
//add(1,2)->3
//add(1)(2)->3

function add(num1,num2){
    if(num1 && num2){
        return num1 + num2
    }else{
        return function(num2){
            return num1 + num2
        }
    }
}

console.log(add(1,2))
console.log(add(1)(2))

//Question
//Find the Missing Number in a given array
//i'll use summation of first N natural numbers approach where the sum of numbers in a given array is calculated using the formula n*(n+1)/2
function missingNumber(arr,n){
let sumtotal = Math.floor(n * (n+1)/2)
let total = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0)
return sumtotal - total
}
const missingNumberArr = [1,2,3,5,6,7,8]
console.log(missingNumber(missingNumberArr,8))

//Question
//Given
const til= {
    penny:12,
    nickel:10,
    dime:2,
    quarter:12,
    dollar : 30
}
//pay out 20.47usd from till using the minimum amount of coins
//100cents = 1 dollar,25cents= 1quarter,10cents = 1 dime,5 cents = 1nickel,1cent = 1penny
// const totalCents = 20*100 + 47
// const availDollar = til.dollar * 100
// delete til.dollar
// const remainder = totalCents%availDollar
// function cashback(amount){
//   const amountArr =  String(amount).split(".")
//   const dollar = amountArr[0]
//   const cents = amountArr[1]
//   const totalCents = (dollar * 100) + cents

//   const tilArr=O

//   let availDollar = til.dollar * 100
//   delete til.dollar
//   let remainder = totalCents%availDollar

//   if(remainder === 0){
//     return til
//   }else{

//       return cashback(remainder)
//   }
// }

// console.log(cashback(20.47))//not solved ,come back to this later

//Question
//given
let str = "i love javascript"
//write code to convert str to "tpircsavaj evol i"
//simply reverse the string
let reversedString = str.split("").reverse().join("")
console.log(reversedString)

//Question
const profile = {
    name:"techsith",
    getName:()=>{
        console.log(this.name)
    }
}
profile.getName()//given the function above, what will this return. if undefined, what can you do to make it return "techsith"
//ans : profile.getName returns undefined , because the "this" keyword in getName function references the global scope (window) ,arrow functions are anonymous functions hence "this" references the global scope . unlike "this" regular function declaration that references the object in which it was called . 
//also, you can't bind an arrow function
//what can you do to make it return "techsith" , write the function as below
const profile2 = {
    name:"techsith",
    getName:function(){
        console.log(this.name)
    }
}
profile2.getName()

//Question
//given the array below , find the number of max-number
let x = [1,2,2,4,2,4] // should return 2 because there are two 4s in there

const maxNumber = x.filter(item=> item === Math.max(...x))
const numOfMaxNum = maxNumber.length
console.log(numOfMaxNum)

//Question
//Given the code implemetation below , how will be the order of its console.log
//Note: setTimeout() is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack. In other words, you cannot use setTimeout() to create a "pause" before the next function in the function stack fires.
const arr = [5,120,15,21]
function timoutFunc(){
    for(let i=0;i<arr.length;i++){
        setTimeout(()=>{
            console.log(`index: ${i},element: ${arr[i]}`)
        },arr[i])
    }
}
timoutFunc()

//Question
let time = "11:03 PM"
//convert to 24hr time format
function convert(format){
let [time,meridiem] = format.split(" ")
let [hour,minutes] = time.split(":")
let hourInt = parseInt(hour)
if(meridiem === "PM"){
    hourInt += 12
}
if(hourInt >=24){
    hourInt = "00"
}
console.log(`${hourInt}:${minutes}`)
}
convert(time)

//Question
//given 
let numX= 2
//convert number to hexadecimal string
hexString = numX.toString(16)
console.log(hexString)
//And reverse the process with:

numY = parseInt(hexString, 16);


//Question
//calculate sum of elements on the perimeter of the 2 dimensional array given below
const matrix = [
    [1,1,1],
    [1,1,1],
    [1,1,1],
    [1,1,1]
]
//approach - calculate sum of all elements in the outer arrays(on index 0 and 2 relative to the given array),also calculate sum of the first and last elements on the middle arrays, then add the sums to given final result
function sumOfPeri(arr){
    let sum = 0
    let sumArr=0
    arr.map((element,index)=>{
        if(index === 0 || index === arr.length -1){
          sumArr =  element.reduce((acc,curr)=> acc + curr)
        }else{
            sumArr = element[0] + element[element.length - 1]
        }
        sum += sumArr
    })
    console.log(sum)
}
sumOfPeri(matrix)

//Question
//build a custom function with the same operational characteristics as a reduce function
Array.prototype.myReduce = function(callback,curr){
    let currentValue = curr
    if(curr){
        currentValue = curr
    }else{
        currentValue = 0
    }
   for(let i=0;i<this.length;i++){
    currentValue = callback(this[i],currentValue)
   }
   return currentValue
}
const a=["2",2,3]
console.log(a.myReduce((acc,cur)=>{
   return acc + cur
},2))

//build own map function
Array.prototype.myMap = function(callback){
    let result = []
    for(let i=0;i<this.length;i++){
        result.push(callback(this[i]))
    }
    return result
}
console.log(a.myMap(item=>item * 2))

//build own filter function
Array.prototype.myFilter = function(callback){
    let result=[]
    for(let i=0;i<this.length;i++){
        if(callback(this[i]) === true){
            result.push(this[i])
        }
    }
    return result
    }
    
    console.log(a.myFilter(item=> item%2 === 0))