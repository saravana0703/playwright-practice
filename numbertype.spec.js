//Create a function named that takes a number as a parameter.

function numberType (number) {

    /* Use a conditional statement to check if the number is greater than 0, to check if the number is less than 0,
and to handle the case when the number is zero.*/
    if (number > 0) {
        console.log("it is a positive number");
    } else if (number < 0) {
        console.log("it is a negative number");
    } else {
        console.log('the number is neutral');
    }
}
//Declare and initialize the variable.

numberType(1);
numberType(-1);
numberType(0);
numberType(true);
numberType(false);