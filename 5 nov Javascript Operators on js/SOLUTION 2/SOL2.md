# Describe the usage of the comma operator in JavaScript and provide an example

## Comma Operator in JavaScript

The comma operator in JavaScript allows you to combine multiple expressions into a single statement. It evaluates each expression from left to right, returning the value of the last expression. While it's not commonly used for assignments, it can be employed in scenarios where multiple expressions need to be executed within a single statement.

## Example:

```javascript
let a = 1, b = 2, c = 3;

// The comma operator is used to combine expressions
let result = (a++, b++, c++);

console.log(result); // Outputs the value of the last expression, which is the value of 'c'
console.log(a, b, c); // Outputs: 2 3 4
