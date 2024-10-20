/******************************************************************************

ASSIGNMENT 1



Your first task will be to link this javascript file to the index.html file

using one of the methods I showed in the first lecture.



<-- Locate the index.html file in the file browser and link it to this file, 

javascript.js

******************************************************************************/

/****************************************************************************** 

ASSIGNMENT 2



Last lecture I showed you how to make variables that can hold values of the 

various data types. Make some variables of the following datatypes: 

String, number, boolean, array

You can choose what the actual content is.

Try to use both the let and const keywords

******************************************************************************/

let logOutMessage = " See you soon";
const myDay = 22;
let paidSubscription = true;
let aboutMe = ["pizza", "pasta", "gelato!"];

/****************************************************************************** 

ASSIGNMENT 3



Try out a few of the operators we looked at (+, -, /, *)

as well as a few of the shorthand operators (++, --, +=, -=)

******************************************************************************/
let numberOne = 22;
let numberTwo = 4;
let sum = (2 * numberOne) / numberTwo;
console.log(sum);

let count = 0;
count += 2;
console.log(count);

/****************************************************************************** 

ASSIGNMENT 4



Write an IF/ELSE conditional statement that checks that userName isn't 

empty(""), that the user age is 18+, and that userIsBlocked is false. 



(HINT: Use the && (logical AND) to check all 3 in one IF statement)



If all of these conditions are true, change the userIsLoggedIn variable to true 

and the goToPage variable to "/home" then console.log a welcome message. 



If any of the conditions for logging in are not met, console.log an error 

message.



Try changing the values of the variables to make sure your IF/ELSE conditional

can handle all cases correctly 

******************************************************************************/

let userName = "";

let userAge = 18;

let userIsLoggedIn = false;

let userIsBlocked = false;

let goToPage = "";

if (userName !== "" && userAge >= 18 && userIsBlocked === false) {
  userIsLoggedIn = true;
  goToPage = "/home";
  console.log("Oh! Hi there");
} else {
  console.log("ErrorrTerror ");
}

/******************************************************************************

ASSIGNMENT 5



Make a variable called userTitle and set the content equal to "Mr." if userMale 

is true, or to "Mrs." if userMale is false. Use the TERNARY conditional to do 

this:



const variable = statement ? "this if true" : "this if not true"



Try changing userMale to both true and false and console.log your new variable,

to see that your conditional is working.

******************************************************************************/

const userMale = false;

//your code here
const userTitle = userMale ? "mr." : "mrs.";
console.log(userTitle);
