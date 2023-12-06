/* Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using recursion. Test the function with different inputs.*/

function f(n){
    //basecase to avoid negative
    if(n==0){
        return 1;
    }
    // that alogorith
    let factorial = n*f(n-1);
    return factorial;
}
//print the factorial
console.log(f(5));