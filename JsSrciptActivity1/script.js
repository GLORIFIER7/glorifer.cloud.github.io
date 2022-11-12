console.log("Connected");

/*
1.What is the difference between a comparison operator and an assignment operator?
    
       So what's the difference between a comparison operator and an assignment operator?
       The difference between a comparison operator and an assignment operator is that the (comparison operator) is the one who assigns its value whether it is true or false while (assignment operator) is the one who assign its value.

2.What is a Boolean? What does it represent?

        The Boolean is logical binary Numbers which represent to
        zero(0) is equals to False
        one(1) is equals to True.

How is the (+=) operator different than (+) operator?

        The difference between
        (+=) operator is arithmetic operator and
        (+) is increment operator is
        (+) is equals to short-hand
        (+=) is equals to long-hand

*/
// Code Part

// 1.Set two variables equal to two different numbers. Use a comparison operator to compare these two variables. Change one of their values by using the +=, -=, *=, or /= operator. Then, compare their values again.

let i = 15;

console.log(i += 3);//18- adds the number in the initial value
console.log(i);//18

//Subtraction Assignment Operators (-=)
console.log(i -= 10);//8

//Multiplication Assignment Operator (*=)
console.log(i *= 15); //120
//i = 8
// 8*15 = 120

//Division Assignment Operator (/=)
console.log(i /= 2); //60
//i = 120 based on above
// 120/2 = 60

//Modulus Assignment Operator (%=)
console.log(i %= 8); //remainder is 4





// 2.Try out the <= and >= operators.
let eat = prompt ("Enter a number to Eat");

function eatAllYouCan (eat){
    if (eat <=30) {
        console.log("Mami");
    }else if (eat <= 61)
    {
        console.log("Angels Burger");
    } else if ((eat >= 61)&& (eat <= 88))
    {
        console.log("Jollibee Bucket Chicken");
    } else if ((eat >= 89) && (eat <= 117))
    {
        console.log("Eat All You can Samyupsal");
    } else {
        console.log("Lomi");
    }
}

eatAllYouCan(eat);

// 3.Try to use the !== operator.

console.log(false !== true); //true