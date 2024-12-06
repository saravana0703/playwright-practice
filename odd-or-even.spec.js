//Create a function named `isOddOrEven` that takes a number as a parameter 

function isOddOrEven (number) {

    // Use a conditional statement to check if the number is divisible by 2

    if (number%2 === 0){
        return "The number is even";
    }
    else{
        return "The number is odd"
    }

}

//Declare and initialize the variable
let num1 = 50;
let num2 = 27;

//Call the function and print the result
console.log(isOddOrEven(num1));
console.log(isOddOrEven(num2));
