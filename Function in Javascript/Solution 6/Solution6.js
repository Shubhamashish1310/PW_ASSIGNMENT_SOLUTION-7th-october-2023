/*Q6. Write a JavaScript function called curry that takes a function as an argument and returns a curried version of that function. The curried function should accept arguments one at a time and return a new function until all arguments are provided. Then, it should execute the original function with all arguments. Test the curry function with a function that adds two numbers.*/

//javascript function called curry
function curry(a){
    //return function as an argument (curries version )
    return function(b){
        if(curry.length==2){
         return a+b;
        }
        else{
            //return a new function if there are more argument
            return function(c){
                return a+b+c;
            }
        } 
    }
}
console.log(curry(4)(6)(9));