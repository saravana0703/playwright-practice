//function to reverse the string

 function reverseString (str) {

    let string1 = str.split("");
    let string2 = "";
    console.log(string1);
    
 //Loop them in reverse direction 

 for (let i = str.length -1 ; i >= 0; i-- ){
    //Concatenate the string
     string2 += string1[i];
 }
 //Print the new string
 console.log(string2);
} 
//Check if the reverse string and original string are the same
function isPalindrome(instr, reversestr){
    if (instr === reversestr) {
        return true;
    }else {
        return false
    }
}
let str1 = "saravana";
let str2 = reverseString(str1);
console.log(isPalindrome(str1, str2));