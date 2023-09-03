//Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
reverseArrayInPlace(myArray);
console.log(myArray); // Output: [5, 4, 3, 2, 1]