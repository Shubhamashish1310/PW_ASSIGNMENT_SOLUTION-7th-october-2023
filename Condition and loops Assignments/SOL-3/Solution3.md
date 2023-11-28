## Q3. What are loops, and what do we need them? Explain different types of loops with their syntax and examples

# ```Loops```
 Loops are control structures in programming that allow the repeated execution of a block of code. They are essential for automating repetitive tasks and iterating over data structures. There are different types of loops in JavaScript:

## 1. for Loop:
```javascript
for (initialization; condition; update) {
    // Code to be executed in each iteration
}
//Example:
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```
## 2. while Loop:
```javascript
while (condition) {
    // Code to be executed as long as the condition is true
}
//Example:
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
```

## 3. do-while Loop:
```javascript
do {
    // Code to be executed at least once, then repeatedly as long as the condition is true
} while (condition);

//Example:
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 5);
```
## 4. for...in Loop:
```javascript
for (variable in object) {
    // Code to be executed for each property in the object
}

//Example:
const person = { name: "John", age: 30, gender: "male" };

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
```
## 5. for...of Loop:
```mostly used for array and strings```

```javascript
for (variable of iterable) {
    // Code to be executed for each element in the iterable
}

//Example:
const numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
    console.log(num);
}
```
## 6.for-in loops:
```javascript
for (variable in object) {
    // Code to be executed for each property in the object
}

//Example:
const person = { name: "John", age: 30, gender: "male" };

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
```
Loops are fundamental for efficient and concise code, allowing developers to perform repetitive tasks with ease and iterate over collections of data.