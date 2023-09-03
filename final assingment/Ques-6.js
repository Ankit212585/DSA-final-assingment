//Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}
function postfixToPrefix(postfixExpression) {
    const stack = [];
    
    for (let char of postfixExpression) {
        if (!isOperator(char)) {
            stack.push(char);
        } else {  
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            const prefixExpression = char + operand1 + operand2;
            stack.push(prefixExpression);
        }
    }
    return stack.pop();
}

// Example usage:
const postfixExpression = '23+5*';
const prefixExpression = postfixToPrefix(postfixExpression);
console.log(`Postfix Expression: ${postfixExpression}`);
console.log(`Prefix Expression: ${prefixExpression}`);