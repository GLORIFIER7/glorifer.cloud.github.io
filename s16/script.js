console.log("hello nested");

//Nested IFs
//An If Statement that is the target of another if or else. 

// function eligibility (age) {
//     if (age < 18)
//     {
//         return ("Minor ka pa, child labor yan if ever");
//     }
//     else
//     {
//         //NESTED IF EXAMPLE
//         if (age >= 18 && age <= 60){
//             return ("Aba pwede ka pa mag work, ayihii sasahod na siya");
//         }
//         else 
//         {
//             return ("Tanders ka na, pension na need mo");
//         }
//     }
// }

// let userInput = prompt ("Enter your age");
// console.log(eligibility(userInput));

//Exercise 1: Nested IF
/*

Create a JavaScript code that will determine if the input type is even or odd.

MAIN GOAL:
Perform a Nested If for this scenario.
Enclose inside the function.
When a user input a word, it will display “Unexpected Input”
When a user inputs none, it will display “Please input inside the box”.
When a user inputs a valid number, it will display even or odd.


*/
function oddEven(num){
    if(isNaN (num) || typeof parseInt (num) !== "number"){
        //isNan - determines whether a values is NaN (not a number) or a number
        return `Unexpected Input`;
    }

    else if (num === '') {
        return "Please input inside the box";
    }

    else {
        if (num % 2 == 0)
        {
            return ("Even Number");
        }
        else {
            return ("Odd Number");
        }
    }
}

let userInput = prompt ("Give Me a Number");
console.log(oddEven(userInput));