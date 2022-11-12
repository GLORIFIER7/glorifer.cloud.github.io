console.log("Connected");

let number = prompt ("Give me a numbers");

function enterNum (number){
    if (number <= 50) {
        console.log("Currently at number 20. Terminating the loop");
    }
    else if (number %= 10) {
        console.log("The number is divisible by 10. Skipping the number");
    }
    
}

enterNum(number);