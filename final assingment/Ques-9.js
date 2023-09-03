//Q9. Write a program to reverse a stack.

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
    }
    peek() {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1];
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}

function reverseStack(stack) {
    const auxStack = new Stack();
    while (!stack.isEmpty()) {
        auxStack.push(stack.pop());
    }
    while (!auxStack.isEmpty()) {
        stack.push(auxStack.pop());
    }
}

// Example usage:
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);

console.log("Original Stack:");
console.log(myStack.items);

reverseStack(myStack);

console.log("Reversed Stack:");
console.log(myStack.items);