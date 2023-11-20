# ```Q2. Describe the categorization of operators in JavaScript based on their functionality. Provide examples for each category```

## Categorization of Operators in JavaScript

In JavaScript, operators can be categorized based on their functionality. Here are the main categories with examples for each:

### 1. **Arithmetic Operators:**
   - Perform mathematical calculations.
   - Examples: `+, -, *, /, %` (addition, subtraction, multiplication, division, modulus).

   ```javascript
   let result = 10 + 5; // result is 15
```
### 2. Assignment Operators:
- Assign values to variables.
- Examples: =, +=, -=, *=, /= (assignment, addition assignment, subtraction assignment, multiplication assignment, division assignment).

```javascript
let x = 10;
x += 5; // x is now 15
```
### 3. Comparison Operators:
- Compare values and return a boolean result.
- Examples: ==, ===, !=, !==, >, <, >=, <= (equal, strict equal, not equal, strict not equal, greater than, less than, greater than or equal, less than or equal).
```javascript
Copy code
let a = 10;
let b = 5;
console.log(a > b); // true
```
### 4. Logical Operators:
- Combine multiple boolean values and return a boolean result.
- Examples: &&, ||, ! (logical AND, logical OR, logical NOT).
```javascript
Copy code
let condition1 = true;
let condition2 = false;
console.log(condition1 && condition2); // false
```
### 5. Unary Operators:
- Operate on a single operand.
- Examples: ++, -- (increment, decrement).
```javascript
Copy code
let counter = 5;
counter++; // counter is now 6
```
### 6. Conditional (Ternary) Operator:
Provides a shorthand way of writing an if-else statement.
Example: condition ? expr1 : expr2.
```javascript
Copy code
let age = 20;
let status = (age >= 18) ? 'Adult' : 'Minor';
```
### 7. Bitwise Operators:
- Perform bitwise operations on integer values.
- Examples: &, |, ^, ~, <<, >>, >>> (AND, OR, XOR, NOT, left shift, right shift, zero-fill right shift).
```javascript
Copy code
let a = 5; // binary representation: 0101
let b = 3; // binary representation: 0011
console.log(a & b); // 1 (bitwise AND)
```
### 8. String Operators:
- Concatenate strings.
- Example: + (string concatenation).
```javascript
Copy code
let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName; // John Doe 
```

These categories cover the diverse set of operators in JavaScript, providing developers with powerful tools for manipulating data and creating complex algorithms.

