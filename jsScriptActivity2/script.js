//Prompt a user to enter a number.
let number = prompt ("Give me a number");

for (number; number >= 0; number--)
{
    //When a number is less than to 50, we need to display the message that we need to terminate the loop

    if (number < 50){
        console.log(`Currently at number ${number}. Terminating the loop`);
        break; //jumps out of the loop
    }

    //When a number is divisible by 10, display a message that it is divisible by 10. Therefore, they will skip the number.
    if (number % 10 === 0)
    {
        console.log(`The number is divisible by 10. Skipping the number`);
        continue; //jumps over one iteration in the loop
    }

    //If it is divisible by 5, display the number.

    if (number % 5 === 0)
    {
        console.log(number);
    }

} 