//Create a function - print odd numbers (from 1 to 25) and execute in debug mode

function printOddNumbers (numbers){
    for(let i = numbers; i <= 25; i++)
    {
        if (i%2 != 0) {
            console.log(`${i} is an odd number`);
        }
        else
        {
            console.log("the numbers are even")
        }
    }
}
printOddNumbers(0);