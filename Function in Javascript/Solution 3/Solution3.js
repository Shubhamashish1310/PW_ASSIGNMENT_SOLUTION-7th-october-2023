/*Q3. Create an IIFE (Immediately Invoked Function Expression) that calculates the square of a number and immediately displays the result*/

//IIFE (Immediately Invoked Function Expression)
(function iifi(){
    function square(x){
 //it calculate the square of a number
        return x*x;
    }
   let result = square(3);
   console.log(result);

   console.log(square(10));
})();

