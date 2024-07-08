/*2. The following is an array of 10 students ages:
=> const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
. Sort the array and find the min and max age.
. Find the median age(one middle item or two middle items divided by two)
. Find the average age(all items divided by number of items)
. Find the range of the ages(max minus min)
. Compare the value of (min - average) and (max - average), use abs() method.*/

function studentages() {
    let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

    //sort the array
    ages = ages.sort((a,b)=>a-b); //[19, 19, 20, 22, 24, 24, 24, 25, 25, 26]
    console.log(ages);

    //find the min and max age
    console.log("min age is",ages[0],"max age is",ages[ages.length-1]);

    //find the median age
    console.log("median age is",ages[Math.floor(ages.length/2)]);

    //find the average age
    console.log("average age is",ages.reduce((a,b)=>a+b,0)/ages.length);

    //find the range
    console.log("range is",ages[ages.length-1]-ages[0]);

    //compare the value of (min - average) and (max - average)
    console.log("difference between min and average is",Math.abs(ages[0]-ages.reduce((a,b)=>a+b,0)/ages.length));
    console.log("difference between max and average is",Math.abs(ages[ages.length-1]-ages.reduce((a,b)=>a+b,0)/ages.length));
}

studentages()