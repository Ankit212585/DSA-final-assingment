//Q8. Write a program to check if all the brackets are closed in a given code snippet.

function areBracketsBalanced(codeSnippet) {
    const stack = [];
    const bracketPairs = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    for (let char of codeSnippet) {
        if (bracketPairs[char]) {
            stack.push(char);
        } else if (Object.values(bracketPairs).includes(char)) {
            const top = stack.pop();
            if (bracketPairs[top] !== char) {
                return false; // Mismatched brackets
            }
        }
    }
    return stack.length === 0;
}

// Example usage:
const codeSnippet1 = 'if (x > 0) { console.log("x is positive"); }';
const codeSnippet2 = 'function() { return "unbalanced } code"; }';

console.log(areBracketsBalanced(codeSnippet1)); // Output: true
console.log(areBracketsBalanced(codeSnippet2)); // Output: false