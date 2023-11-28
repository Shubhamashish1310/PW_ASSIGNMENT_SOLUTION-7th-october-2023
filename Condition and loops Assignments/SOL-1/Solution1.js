//EXAMPLE 1 if
const x = 10;
if (x > 5) {
    console.log("x is greater than 5");
}

//EXAMPLE 2 if-else
const age = 20;
if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

//EXAMPLE 3 if-else if-else ladder:
const num = 0;
if (num > 0) {
    console.log("Number is positive");
} else if (num < 0) {
    console.log("Number is negative");
} else {
    console.log("Number is zero");
}

//EXAMPLE 4 Switch Statement:
const day = "Monday";
switch (day) {
    case "Monday":
        console.log("It's the start of the week");
        break;
    case "Friday":
        console.log("It's almost the weekend");
        break;
    default:
        console.log("It's a regular day");
}
