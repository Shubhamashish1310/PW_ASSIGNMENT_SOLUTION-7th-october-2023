/* Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the function with various incomesjavascript function called calculateTaxincome as an argument */

function calculateTax(income){
    let taxes =[];
    for(i of income){
        //checking for income stats of india
        if(i>1500000){
            console.log("Very Rich Person he will pay tax Amaount:-",i*0.3);
            tax=i*0.3
        }
       else if(i>1250001 && i<1500000){
            console.log("Rich Person he will pay tax Amount:-",i*0.25);
            tax=i*0.25
        }
       else if(i>1000001 && i<1250000){
            console.log("Moderate Rich Person he will pay tax Amount:-",i*0.20);
            tax=i*0.20
        }
       else if(i>750001 && i<1000000){
            console.log("Upper Middle CLass Person he will pay tax Amount:-",i*0.15);
            tax=i*0.15
        }
       else if(i>500001 && i<700000){
            console.log("Moderate Class he will pay tax Amount:-",i*0.1);
            tax=i*0.1
        }
       else if(i>250001 && i<500000){
            console.log("Lower Middle Class he will pay tax Amount:-",i*0.05);
            tax=i*0.05
        }
        else{
            console.log("Low Income Tax To Pay:-",i*0);
            tax=i*0
        }
        console.log("His Annual Income=", i);
        

    }
    taxes[income] = tax;
   
    return taxes;
}

console.log(calculateTax([1700000,1400000,1100000,600000,800000,300000,10000]));
