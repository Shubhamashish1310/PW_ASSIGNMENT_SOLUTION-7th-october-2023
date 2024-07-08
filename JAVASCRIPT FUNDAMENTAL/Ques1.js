/* Q1. Write a JavaScript function called outerFunction that takes a parameter and returns an inner function.
 The inner function should access both the parameter of outerFunction and a variable declared within
 outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these
 variables even after outerFunction has finished executing.*/


 function outerFunction(a){
     let b = 10;
     function innerFunction(){
         console.log(a,b);
     }
     return innerFunction;
 }

 let shubham =outerFunction(20) ;//20,10
 shubham(); //20,10

 //console.log(b);//Uncaught ReferenceError: b is not defined due to lexical scoping

