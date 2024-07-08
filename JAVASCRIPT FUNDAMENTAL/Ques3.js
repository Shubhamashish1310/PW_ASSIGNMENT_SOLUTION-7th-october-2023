/*Q3. Write a JavaScript program that demonstrates the use of character classes in regular expressions.
Create a function that searches for specific character classes in a given string and returns the matches. Test
the function with patterns for digits, uppercase letters, lowercase letters, and special characters.*/



/*
Solution:
*/

function regex(pattern, string) {
    if (pattern.test(string)) { // Use the test method to check if the pattern matches the string
        return true;
    }           
    return false;   
}   

console.log(regex(/\d/, "shubham123")); // true
console.log(regex(/\D/, "855")); // false