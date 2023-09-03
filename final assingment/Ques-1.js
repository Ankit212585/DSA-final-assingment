// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?


function findPairsWithSum(arr, targetSum) {
   
    const seen = new Set();
    const pairs = [];
    
    for (let num of arr) { 
        const complement = targetSum - num;
         
    if (seen.has(complement))
     {   
       pairs.push([num, complement]);
     } 
        seen.add(num);
    }
    return pairs;
}
// Example usage:
const arr = [1, 2, 3, 4, 5, 6];
const targetSum = 7;
const result = findPairsWithSum(arr, targetSum);
console.log(result); // Output: [ [ 3, 4 ], [ 2, 5 ], [ 1, 6 ] ]