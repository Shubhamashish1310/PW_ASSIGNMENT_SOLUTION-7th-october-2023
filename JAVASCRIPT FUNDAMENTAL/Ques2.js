/*Q2. Create a JavaScript program that demonstrates the basic usage of regular expressions. Write a function
that takes a regex pattern and a string as input and returns true if there is a match, and false otherwise. Test
the function with various patterns and strings.*/


/*
Solution:
*/

function regex(pattern, string) {
    if (pattern.test(string)) { // Use the test method to check if the pattern matches the string
        return true;
    }
    return false;
}

console.log(regex(/hel/, "hello shubham")); // true
console.log(regex(/shubhamwa/, "shubhama world shubhama")); // false
