/*
3. Object Extensibility and Sealing
a) Use the Object.preventExtensions method to prevent any further additions of properties to the student object.
b) Use the Object.isExtensible method to check if the student object is extensible. Store the result in a variable
called extensibleStatus.
c) Create a new object called teacher with a 'subject' property set to 'Math'.
d) Use the Object.seal method to seal the teacher object, preventing any additions or deletions of properties.
e) Use the Object.isSealed method to check if the teacher object is sealed. Store the result in a variable called
sealedStatus.
f) Print the extensibleStatus and sealedStatus to the console. */



function student() {
    //a
    const student = {
        name: "Shubham",
        age: 22,
        marks: 90
    };
    Object.preventExtensions(student);

    //b
    const extensibleStatus = Object.isExtensible(student);

    //c
    const teacher = {
        subject: "Math"
    };

    //d
    Object.seal(teacher);  

    //e
    const sealedStatus = Object.isSealed(teacher);  

    //f
    console.log(extensibleStatus); //false
    console.log(sealedStatus);    //true
}

student()