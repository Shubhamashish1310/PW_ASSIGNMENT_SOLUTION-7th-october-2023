/*4. Assignment: Building a Student Management System

Description:
You are tasked with building a student management system using JavaScript. The system should allow you to
perform various operations on a list of students, including adding, updating, deleting, and displaying student
information.

Requirements:
Here is an initial array of students. Each student is represented as an object with the following properties: id,
firstName, lastName, age, and grade.

JavaScript
const students = [
{ id: 1, firstName: "John", lastName: "Doe", age: 20, grade:
"A" },
{ id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade:
"B" },
{ id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade:
"A" },
// Add more students as needed
];

Implement the following functions using pure JavaScript (without any external libraries or frameworks):

a. Add a Student: Create a function to add a new student to the array.
b. Update Student Information: Create a function to update a student's information based on their id.
c. Delete a Student: Create a function to delete a student based on their id.
d. List All Students: Create a function to display a list of all students.
e. Find Students by Grade: Create a function to find all students who have a specific grade.
f. Calculate Average Age: Create a function to calculate the average age of all students using array method.
*/


//SOLUTION :=>
    
let students = [];
function studentmanagement() {
    //a
     students = [
        { id: 1, firstName: "John", lastName: "Doe", age: 20, grade:
            "A" },
        { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade:
            "B" },
        { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade:
            "D" },
        { id: 3, firstName: "shubham", lastName: "ashish", age: 22, grade:
            "A" },


    ];

}

//a
function addStudent() {
    const newStudent = {
        id: 4,
        firstName: "Alice",
        lastName: "Lee",
        age: 21,
        grade: "B"
    };
    students.push(newStudent);
}
 //b
function updateStudentInfo() {
    const studentToUpdate = students.find(student => student.id === 2);
    if (studentToUpdate) {
        studentToUpdate.age = 23;
        studentToUpdate.grade = "C";
    }
}

//c
function deleteStudent() {
    const studentToDelete = students.find(student => student.id === 2);
    if (studentToDelete) {
        students.splice(students.indexOf(studentToDelete), 1);
    }   
}        

//d
function listAllStudents() {
    console.log(students);
}

//e
function findStudentsByGrade() {
    const studentsByGrade = students.filter(student => student.grade === "B");
    console.log(studentsByGrade);
}

//f
function calculateAverageAge() {
    const totalAge = students.reduce((total, student) => total + student.age, 0);
    const averageAge = totalAge / students.length;
    console.log(averageAge);
}

studentmanagement();
addStudent();
deleteStudent();
listAllStudents();
findStudentsByGrade();
calculateAverageAge();