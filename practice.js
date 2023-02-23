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
function cashback(amount){
  const amountArr =  amount.split(",")
  const dollar = amountArr[0]
  const cents = amountArr[1]
  const totalCents = (dollar * 100) + cents

  const tilArr=O

  let availDollar = til.dollar * 100
  delete til.dollar
  let remainder = totalCents%availDollar

  if(remainder === 0){
    return til
  }else{

      return cashback(remainder)
  }
}

console.log(cashback(20.47))