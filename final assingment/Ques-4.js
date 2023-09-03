//Q4. Write a program to print the first non-repeated character from a string?

function firstNonRepeatedChar(inputStr) {
    const charCount = new Map();
    for (const char of inputStr) {
        if (charCount.has(char)) {
            charCount.set(char, charCount.get(char) + 1);
        } else {
            charCount.set(char, 1);
        }
    }
    for (const char of inputStr) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }
    return null;
}

// Example usage:
const inputString = "programming";
const result = firstNonRepeatedChar(inputString);

if (result !== null) {
    console.log(`The first non-repeated character is: ${result}`);
} else {
    console.log("There are no non-repeated characters in the string.");
}