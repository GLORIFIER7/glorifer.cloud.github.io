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

//Linear Search - applicable for unsorted arrays. It counts the number of index where the value belongs to.

/*
    PSEUDOCODE
    1. Create a variable list to store in an array. Then create a variable where we can search the value.
    2. Create a function that will accept two parameters/arugements for an array and a value.
    3. Inside the function create a loop through the entire array and check if the current item is equals to a value.
    4. if the value is found it will return the value otherwise it will return false
*/

//Step 1. Create a variable list to store in an array. Then create a variable where we can search the value.
let list = [9,26,6,14,3,27,21,45,111,587];
let value = 100;

//Step 2. Create a function that will accept two parameters/arguments for an array and a value.

let linearSearch = (list,value) => {
    //Step 3. Inside the function create a loop through the entire array and check if the current item is equals to a value.
    for(let i=0; i < list.length; i++){
        if(list[i] === value)
        {
            return i;
        }
    }
    return ("There is no value given."); //false statement
}

//invoke the function in the console log
console.log(linearSearch(list,value)); //element 3 is in the index 4
//linear search for grocery items
let items = ["yakult","cheese","soju","chocolate","chuckie","dishwashing liquid", "colgate", "toyo", "sardinas"];
let isFound = false;

items.forEach(function (itemValue, index){
    if(itemValue === "colgate")
    {
        console.log("Item Found: "+itemValue);
        isFound = true;
        return;
    }
});
if (!isFound){
    console.log("Item not found");
}

/*
    Binary Search - applicable when the array is sorted.
    PSEUDOCODE:
    1. Create a variable that displays an array of sorted numbers and another variable that finds the number.
    2. Create a function that accepts two arguments (a sorted array and a value).
    3. Inside the function, create a variable for left and right pointer. Left variable is for the value will be for the first item in the array and the right variable for the value will be the last item in the array. Also, create a middle point varible which can get from an average left and right.
    4. Create a loop until the mid === value
    5. If we find the value we will return the index of that value. If the value is too small, we will move the left pointer up to the previous mid point and recalculate the mid point.
    If the value is tpo large we will move the right pointer down to the mid point and so on until we find our value.
    if the value is not found we will return it as a false statement.
*/

//Step  1. Create a variable that displays an array of sorted numbers and another variable that finds the number.

let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]; //sorted arrays - Ex: 10 consecutive numbers
let valFound = 20; //variable that assigns a number that needs to be found inside the sorted arrays

//Step 2. Create a function that accepts two arguments (a sorted array and a value).
let binarySearch = (sortedList, value) => {
    //Step 3. Inside the function, create a variable for left and right pointer. Left variable is for the value will be for the first item in the array and the right variable for the value will be the last item in the array. Also, create a middle point varible which can get from an average left and right.

    //create a variable for left and right pointer.
    let left = 0; //represents the starting point
    let right = sortedList.length - 1; //this will identify the index.

    //create a middle point varible which can get from an average left and right.
    let mid = Math.floor((left + right)/2); //median of the array to determine where will be the index location.

    //Step 4. Create a loop until the mid === value
    while (sortedList[mid] !== value && left <= right){

        /*
            Step 5. If we find the value we will return the index of that value. If the value is too small, we will move the left pointer up to the previous mid point and recalculate the mid point.
            If the value is tpo large we will move the right pointer down to the mid point and so on until we find our value.
            if the value is not found we will return it as a false statement.
        */

        if (value < sortedList[mid]){
            right = mid - 1;
        } else {
            left = mid + 1;
        }

        mid = Math.floor((left + right)/2);

    }

    //check if our mid point is equal to the value we are looking for then return mid otherwise return as false
    if (sortedList [mid] === value) {
        return (`The value ${value} is found in index ${mid}.`); //midpoint of the array
    }
    else {
        return (`The value ${value} is not found.`); //item not found
    }
}

//invoke the function in the console.
console.log(binarySearch(numbers, valFound));

//SORTING ALGORITHMS

//Bubble Sorting - compares the adjacent to swap the order depending how small the sizes are

function bubbleSorting(arr){
    //nested loop procedure
    //outer loop
    for (let j = 0; j < arr.length; j++) {
        //inner loop
        for (let k = 0; k < arr.length - j- 1; k++) {
            //if statement for ascending order
            if (arr [k + 1] < arr[k]){
                //swapping procedure
                [arr [k+1], arr[k]] = [arr[k], arr[k+1]]
            }
        }
    }
    return arr;
}

//invoke the function in the console log
console.log(bubbleSorting([5,3,8,4,6]));