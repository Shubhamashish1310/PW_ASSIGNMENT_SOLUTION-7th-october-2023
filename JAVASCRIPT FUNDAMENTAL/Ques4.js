/*Q4. Create a JavaScript program that takes a regex pattern and a string as input. Write a function that not
only checks if there is a match but also extracts specific parts of the matched text using groups. Test the
function with patterns that include groups to capture different parts of a date (e.g., day, month, and year)
from a given string.*/



/*  
Solution:       
*/                                                      

function extractDateParts(pattern, string) {
    const match = string.match(pattern); // Use the match method to find the match
    
    if (match) {
        return {
            fullMatch: match[0],  // for full match
            day: match[1],        // for group
            month: match[2],      // for group
            year: match[3]        // for group
        };
    } else {
        return null;
    }
}

// Test the function with a pattern that captures day, month, and year
const datePattern = /(\d{2})-(\d{2})-(\d{4})/;
const testString1 = "Today's date is 12-07-2024.";
const testString2 = "Event date: 05-10-2021.";

console.log(extractDateParts(datePattern, testString1));


console.log(extractDateParts(datePattern, testString2));



const testString3 = "No date here!";
console.log(extractDateParts(datePattern, testString3));

