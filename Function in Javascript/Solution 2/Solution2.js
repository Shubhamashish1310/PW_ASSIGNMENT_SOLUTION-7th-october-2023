// Q2. Create a JavaScript function called generateGreeting that takes a name as an argument and returns a personalized greeting message. Use this function to greet three different people creating  javascript function 

function generateGreeting(name){

    for(let i=0;i<name.length;i++){
        console.log("Good evening, my enchanting", name[i] ,"You're the embodiment of grace and elegance.")
    }

}

generateGreeting(['Dumpy','Riya','Arpita']);