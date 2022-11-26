console.log("connected");

//recursion
/*
    Syntax:
    function recurse(){
        //function code
        recurse();
        //function code
    }
    recurse();
*/

// let countDown = function func(fromNumber) {
//     console.log(fromNumber);

//     let nextNum = fromNumber -1;

//     if(nextNum > 0){
//         func(nextNum);
//     }
//     else {
//         alert ("Happy New Year");
//     }
// }

// let newYearCountDown = countDown;
// countDown = null;
// newYearCountDown(5);

//factorial using a recursion

function factorial(x){
    //if number is 0
    if (x === 0){
        return 1
    }
    else {
        return x * factorial(x-1);
    }
}

const num = 3;

if (num > 0){
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}

//Linear Search - applicable for unsorted arrays. It counts the number of index.

/*
    PSEUDOCODE
    1. Create a variable list to store in an array. Then create a variable where we can search the value.
    2. Create a function that will accept two parameters/arugements for an array and a value.
    3. Inside the function create a loop through the entire array and check if the current item is equals to a value.
    4. if the value is found it will return the value otherwise it will return false
*/

//Step 1. Create a variable list to store in an array. Then create a variable where we can search the value.
let list = [9,26,6,14,3,27,21,45,111,587];
let value = 3;

//Step 2. Create a function that will accept two parameters/arguments for an array and a value.

let linearSearch = (list,value) => {
    //Step 3. Inside the function create a loop through the entire array and check if the current item is equals to a value.
    for(let i=0; i < list.length; i++){
        if(list[i] === value)
        {
            return i;
        }
    }
    return -1; //false stament
}

//invoke the function in the console log
console.log(linearSearch(list,value)); //element 3 is in the index 4

//linear search for grocery items
let items = ["yakult","cheese","soju","chocolate","chuckie","dishwashing liquid", "colgate", "toyo", "sardinas"];
let isFound = false;

items.forEach(function (itemValue, index){
    if(itemValue === "toyo")
    {
        console.log("Item Found: "+itemValue+ " at index "+index);
        isFound = true;
        return;
    }
});

if (!isFound){
    console.log("Item not found");
}




