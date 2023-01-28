function fibonacci(n) {
  const myArray = [0, 1]
  for (let i = 2; i < n; i++) {
    myArray[i] = myArray[i - 1] + myArray[i - 2]
  }
  return myArray
}

const num = fibonacci(8)
console.log(num)

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i
  }
  return result
}

console.log(factorial(5))

function isPrime(n) {
  if (n < 1) {
    return false
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true

}
console.log(isPrime(21))

function isPowerOfTwo(n) {
  if (n < 1) {
    return false
  }
  for (let i = 1; i < n; i++) {
    if (n % 2 !== 0) return false
    n = n / 2
  }
  return true
}

console.log(isPowerOfTwo(5))

function fiboRecu(n) {
  if (n === 0) return 0
  if (n === 1) return 1

  return fiboRecu(n - 2) + fiboRecu(n - 1)
}
console.log(fiboRecu(6))

function recursiveFactorial(n) {
  if (n === 0) return 1
  return n * recursiveFactorial(n - 1)
}
console.log(recursiveFactorial(5))

function linearSearch(n, t) {
  //given that n is an array
  for (let i = 0; i < n.length; i++) {
    if (n[i] === t) return i
  }
  return -1
}
console.log(linearSearch([2, 3, 4, 5, 6, 7], 17))

function binarySearch(n, t) {
  let firstIndex = 0
  let lastIndex = n.length - 1
  while (firstIndex <= lastIndex) {
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2)
    if (n[middleIndex] === t) return middleIndex
    if (n[middleIndex] > t) {
      lastIndex = middleIndex - 1
    } else {
      firstIndex = middleIndex + 1
    }
  }
  return -1
}
console.log(binarySearch([-5, 2, 4, 6, 10], 10))

function recursiveBinarySearch(n, t) {
  return search(n, t, n.length - 1, 0)
}
function search(n, t, lastIndex, firstIndex) {
  if (firstIndex > lastIndex) return -1
  let middleIndex = Math.floor((firstIndex + lastIndex) / 2)
  if (n[middleIndex] === t) return middleIndex
  if (n[middleIndex] < t) {
    return search(n, t, lastIndex, middleIndex + 1)
  } else {
    return search(n, t, middleIndex - 1, lastIndex)
  }
}
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10))

function bubbleSort(n) {
  let swapped
  do {
    swapped = false
    for (let i = 0; i < n.length - 1; i++) {
      if (n[i] < n[i + 1]) {
        let temp = n[i]
        n[i] = n[i + 1]
        n[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)
  return n
}
console.log(bubbleSort([-2, 1, 8, 3, -7]))

function insertionSort(arr){
    for(let i=1; i < arr.length; i++){
      let current = arr[i]
      let j=i-1
      while(j >= 0 && current < arr[j]){
        
       arr[j+1] = arr[j] 
        j=j-1
      }
      arr[j+1] = current 
    }
  }
const arr= [8,20,-2,4,-6]
insertionSort(arr)
console.log(arr)

  function insertionSortDescend(arr){
    for(let i=1; i < arr.length; i++){
      let current = arr[i]
      let j=i-1
       while(j >= 0 && current > arr[j]){
        
       arr[j+1] = arr[j] 
        j=j-1
      }
      arr[j+1] = current 
    }
  }
const arr2= [8,20,-2,4,-6]
insertionSortDescend(arr2)
console.log(arr2)

function quickSort(arr){
  if(arr<2){
    return arr
  }
  let pivot = arr[arr.length-1]
  let left=[]
  let right = []
  
  for(let i=0;i<arr.length-1;i++){
  
    if(pivot> arr[i]){
      left.push(arr[i])
    }else if(pivot<arr[i]){
      right.push(arr[i])
    }
  }
  return [...quickSort(left),pivot,...quickSort(right)]
}
console.log(quickSort([8,20,-2,4,-6]))

function mergeSort(arr){
  if(arr.length<2) return arr
  let mid= Math.floor(arr.length/2)
  let arrLeft = arr.slice(0,mid)
  let arrRight = arr.slice(mid)
return merge(mergeSort(arrLeft),mergeSort(arrRight))
}
function merge(leftArr,rightArr){
  let sortedArr = []
  while(leftArr.length && rightArr.length){
    if(leftArr[0]<= rightArr[0]){
    sortedArr.push(leftArr.shift())
    }else{
  sortedArr.push(rightArr.shift())
    }
  }
    return [...sortedArr,...leftArr,...rightArr]
}

console.log(mergeSort([8,20,-2,4,-6]))

function cartesianProduct(arr1,arr2){
  let newArr = []
     for(let i=0;i<arr1.length;i++){
      for(let j=0;j<arr2.length;j++){
        newArr.push([arr1[i],arr2[j]])
      }
    }
      return newArr
}
console.log(cartesianProduct([1,2],[3,4]))//has a worst case time complexity of O(n^2) i.e quadratic ,when the length of both sets of arrays are equal. 
console.log(cartesianProduct([1,2],[3,4,5])) //and a worst case time complexity of O(mn) when the length of the arrays are not equal.m and n represent both arrays

function climbingStaircase(n){
  const known = [1,2]//since we already know that n=1steps and n=2steps can be climbed one way and two ways respectively
  for(let i=2;i<=n;i++){
    known[i]=known[i-1] + known[i-2]
  }
  return known[n-1]
}
console.log(climbingStaircase(3))//worst case time complexity of O(n)-linear

function towerOfHanoi(n,fromRod,toRod,usingRod){
  if(n===1){
    console.log(`move disk 1 from ${fromRod} to ${toRod}`)
    return
  }
  towerOfHanoi(n-1,fromRod,usingRod,toRod)
  console.log(`move disk ${n} from ${fromRod} to ${toRod}`)
  towerOfHanoi(n-1,usingRod,toRod,fromRod)
}

towerOfHanoi(5,"A","C","B")//worst case time complexity of O(2^n)

//Algorithm design techniques for beginner
//brute force - simple and exhaustive technique that evaluates every possible outcome to find the best solution.example: linear search
//greedy algorithms - choose the best option at the current time,without any consideration for the future.example:Dijkstra's algorithm,Prim's algorithm and kruskal's algorithm
//Divide and conquer - Divide the problem into smaller sub-problems.Each sub-problem is then solved and the partial solutions are recombined to determine the overall solution.example:binary search,quick sort,merge sort and tower of hanoi
//Dynamic programming - Divide the problem into smaller sub-problems.break it down into smaller but overlapping sub problems.store the result and reuse it for the same sub-problems.this is called memoization and is an optimization technique that improves the time complexity of your algorithm.example: Fibonacci numbers and climbing staircase
//Backtracking - Generate all possible solutions.check if the solution satisfies all the given comstrains and only then you proceed with generating subsequent solutions.if the constraints are not satisfied,bactrack and go on a different path to find the solution.example: N-Queens problem

//more problems to solve
//finding the GCD(greatest common divisor) using Euclidian algorithm
function euclidianGCD(a,b){
  let remainder = b%a
    if(remainder === 0)return a
    return euclidianGCD(remainder,a)
  }
  //formula - euclidianGCD(a,b)= euclidianGCD([b%a],a) or euclidianGCD(b,[a%b])
  console.log(euclidianGCD(3768,1701))//time complexity of the Euclidean Algorithm is O(log(min(a,b))

//Finding permutations and combinations of a list of numbers
function permutation(array){
  let result = []
  function perms(subArr,currentPerm){
    if(subArr.length === 0){
      result.push(currentPerm)
    }
    
    for(let i=0;i<subArr.length;i++){
      const newSubArr = subArr.slice(0,i).concat(subArr.slice(i+1))
      
      const newCurrentPerm = currentPerm.concat(subArr[i])
      
      perms(newSubArr,newCurrentPerm)
    }
  }
  perms(array,[])
  return result
}
console.log(permutation([1,2,3]))//This recursive solution has a complexity of O(n!) as it is governed by the equation: T(n) = n * T(n-1) + O(1)
//Finding the longest common substring in a given string
//knapsack problem
const myArr=[1,2,3,5,4,8]

const arrList = myArr.map(item=>{
    let itemId= Date.now()
    return Date.now()
})

console.log(arrList)

