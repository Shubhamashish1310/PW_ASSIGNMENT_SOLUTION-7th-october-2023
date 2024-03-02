function outerfunction(num1){

    function innerfunction(){
console.log(num1);
        return outerfunction()
    }
}

outerfunction(innerfunction(                                                                                           ))