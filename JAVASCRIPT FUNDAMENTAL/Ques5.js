/*Q5. You are building a shipping application. Write a program that takes the type of package ("standard",
"express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time
based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and
"overnight" would be delivered the next day.*/

function calculateDeliveryTime(packageType) {
    switch (packageType) {
        case "standard":
            return "3-5 days";
        case "express":
            return "1-2 days";
        case "overnight":
            return "next day";
        default:
            return "Invalid package type";
    }
}

console.log("door hai kuch din lagega, yahi kuch ",calculateDeliveryTime( "standard")); // 3-5 days
console.log("tum bolo toh - " ,calculateDeliveryTime("express")); // 1-2 days
console.log("bhai bs samjo" ,calculateDeliveryTime("overnight")); // next day
console.log(calculateDeliveryTime("premium")); // Invalid package type