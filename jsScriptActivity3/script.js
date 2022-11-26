console.log("Connected");


// let user = prompt("Enter your weight in kilogram(kg).");
// const userWeight = (user * 2.20462262);
// console.log(userWeight);

// let message = ("Your weight in pounds(lbs) is ");
// console.log(message+userWeight);
// alert(message+userWeight);


class userWeight{

    constructor (user, message)
    {
        this.user = user;
        this.message = message;
        
    }
   
}
console.log(userWeight);
let user = prompt("Enter your weight in kilogram(kg).");
console.log(user);
const userWeightKgLbs = (user * 2.20462262);
console.log(userWeightKgLbs);

let message = ("Your weight in pounds(lbs) is ");
console.log(message+userWeightKgLbs);
alert(message+userWeightKgLbs);


 
