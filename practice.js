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