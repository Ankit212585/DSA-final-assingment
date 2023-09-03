//Q10. Write a program to find the smallest number using a stack.

class Stack {
    constructor() {
        this.items = [];
        this.minStack = [];  
    }

    push(item) {
        this.items.push(item);
        if (this.minStack.length === 0 || item <= this.minStack[this.minStack.length - 1])
        {
         this.minStack.push(item);
        }
    }

    pop() {
        if (!this.isEmpty())
         {
            if (this.items[this.items.length - 1] === this.minStack[this.minStack.length - 1])
            {
                this.minStack.pop();
            }
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

    getMin() {
        if (!this.isEmpty()) {
            return this.minStack[this.minStack.length - 1];
        }
    }
}

// Example usage:
const myStack = new Stack();
myStack.push(3);
myStack.push(5);
myStack.push(2);
myStack.push(1);

console.log("Stack:");
console.log(myStack.items);

const smallest = myStack.getMin();
console.log(`Smallest number in the stack: ${smallest}`);