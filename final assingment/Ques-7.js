//Q7. Write a program to convert prefix expression to infix expression.

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function prefixToInfix(prefixExpression) {
    const stack = [];
    const operators = ['+', '-', '*', '/'];

    for (let i = prefixExpression.length - 1; i >= 0; i--) {
        const char = prefixExpression[i];

        if (char.match(/[a-zA-Z0-9]/)) {
            // If it's an operand, push it onto the stack
            stack.push(char);
        } else if (isOperator(char)) {
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            const infixExpression = `(${operand1}${char}${operand2})`;
            stack.push(infixExpression);
        }
    }
    return stack.pop();
}

// Example usage:
const prefixExpression = '*+AB-CD';
const infixExpression = prefixToInfix(prefixExpression);

console.log(`Prefix Expression: ${prefixExpression}`);
console.log(`Infix Expression: ${infixExpression}`);