//PART 1


//Use an external JS file and ensure that it is connected to index.html
// console.log("Hello World");

// //Create multiple variables that will store the different JavaScript data types containing information relating to user details.
// let firstName = "John";
// console.log(`First Name: ${firstName}`);

// let lastName = "Smith";
// let age = 30;
// let hobbies = ["Biking", "Mountain", "Climbing", "Swimming"];
// let workAddress = {
//     houseNumber: "32",
//     street: "Washington",
//     city: "Lincoln",
//     state: "Nebraska"
// };

// console.log(`Last Name: ${lastName}`);
// console.log(`Age: ${age}`);
// console.log(`Hobbies: `);
// console.log(hobbies);
// console.log(`Work Address: `);
// console.log(workAddress);

// //Create a function that will accept the first name, last name and age as arguments and print those details in the console as a single string. This function will also print the hobbies and work address.

// function printUserInfo (fn, ln, Age) {
//                         //parameters
//     console.log(`My name is ${fn} ${ln}, ${Age} years of age`);

//     console.log(`This was printed inside of a function: `);
//     console.log(hobbies);

//     console.log(`This was printed inside of a function: `);
//     console.log(workAddress);
// }

// //invoke the function and provide arguments
// printUserInfo("Jelly", "Lumactud", "20");

// //Create another function that will return a value and store it in a variable.
// function returnValue() {
//     return true;
//     //The return statement stops the execution of a function and returns a value.
// }

// console.log(returnValue);

// let isMarried = returnValue();

// console.log(`The value of isMarrried is: ${isMarried}`);

//Part 2 - Nested IFs
/*
    Username: student@mail.com
    Password: discovery
*/

// let login_attempts = 3;

// let uname = prompt ("Enter a username or email");
// let pass = prompt ("Enter a password");

// function login (uname, pass){
//     if (uname == "student@mail.com" && pass == "discovery")
//     {
//         alert ("Successfully Login");
//     }

//     else {
//         login_attempts = login_attempts - 1;

//         alert ("Login Failed Now Only"+login_attempts+"Login Attempts Available");

//         let uname = prompt ("Enter a username or email");
//         let pass = prompt ("Enter a password");

//         if (uname == "student@mail.com" && pass == "discovery")
//         {
//             alert ("Successfully Login");
//         }

//         else {
//             login_attempts = login_attempts - 1;

//             alert ("Login Failed Now Only"+login_attempts+"Login Attempts Available");

//             let uname = prompt ("Enter a username or email");
//             let pass = prompt ("Enter a password");

//             if (uname == "student@mail.com" && pass == "discovery")
//             {
//                 alert ("Successfully Login");
//             }

//             else {
//                 login_attempts = login_attempts - 1;

//                 alert ("Login Failed Now Only"+login_attempts+"Login Attempts Available");
//             }
//         }
//     }
// }

// login (uname, pass);

//Part 3 - Using Loop
/*
    Username: student@mail.com
    Password: discovery
*/

// let i = 3;
// while (i != 0)
// {
//     let userName = "student@mail.com"
//     let uname = prompt ("Enter a username or email");

//     let userPassword = "discovery";
//     let pass = prompt ("Enter a password");

//     if (userName == uname && userPassword == pass)
//     {
//         i = 4 - i;
//         alert ("Successfully Login");
//         break;
//     }

//     else {
//         i = i-1;
//         alert ("Login Failed Now Only"+i+"Login Attempts Available");
//     }
// }
// STEP 1
// console.log("Hello World");
// let student = ["John", "Jane", "Joe"];
// let message = (" is added to the student's list");
// console.log(student[0] + message);
// console.log(student[1] + message);
// console.log(student[2] + message);
// console.log("There are total number of 3 students in the student's list");

// // STEP 2
// console.log(student[1]);
// console.log(student[2]);
// console.log(student[0]);
// // STEP 3
// let foundJoe = student.find(
//     function() {
//        return (student !== "Joe")
//     }
// );

// if (foundJoe === undefined) {
//     console.log(`Joe is not found on the list`);
// }

// else {
//     console.log(`Joe is an Enrollee`);
// };
// // STEP 4
// let section = [" - Section A"];
// let s1 = student[1]+section;
// let s2 = student[2]+section;
// let s3 = student[0]+section;
// let sInfo = [s1, s2, s3];
// console.log(sInfo);
// // STEP 5
// function removeJoe() {
//     console.log(student[2].slice);
//     if (removeJoe === true) {
//         console.log("Joe was removed from student list");
//     }
//     else(console.log(student));
// }

// removeJoe();
let name = JSON;
let surname = Dole;
console.log(${name} + )