const myArray = ["apple", "banana", "cherry", "date", "eggplant"];
console.log(myArray);

//1.--------------------------------------------------------------------------------------
// Print the numbers 1-10 using a "for-loop"

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let numbers = [];
for (let i = 1; i <= 10; i++) {
  numbers.push(i);
}
console.log(numbers);

//2.--------------------------------------------------------------------------------------
// Print the numbers 1-10 using a "while loop"

let i = 0;
while (i < 10) {
  i++;
  console.log(i);
}

//3.--------------------------------------------------------------------------------------
// Print each item in myArray using a "for loop".

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

//4.--------------------------------------------------------------------------------------
// Using the myArray.push() method, add "mango" to the end of myArray.
//print myArray using a for... of loop.

myArray.push("mango");

for (const fruit of myArray) {
  console.log(fruit);
}

//5.--------------------------------------------------------------------------------------
//Using the myArray.splice() method, remove "cherry" from myArray
// print the result using myArray.foreach()
myArray.splice(2, 1);

myArray.forEach((fruit) => {
  console.log(fruit);
});

//6.--------------------------------------------------------------------------------------
// Using the .shift() and .pop() method, remove the first and last item from myArray.
//print the result
myArray.pop();
myArray.shift();
console.log(myArray);

// 7.--------------------------------------------------------------------------------------
// create a variable and assign it the content of myArray as a string using .join().
// print your variable.
//BONUS - See if you can make the items be seperated by a space

let newString = myArray.join(" ");
console.log(newString);

//8--------------------------------------------------------------------------------------
//Create a function that takes a number as an argument and returns that number squared.
// call your function by using a valid argument

function numberSquared(number) {
  let result = number * number;
  console.log(result);
}

numberSquared(12);

//9.--------------------------------------------------------------------------------------
//Using the "%" (modulo) operator complete the function,
// it should take "number" as an argument and return "even" if its even and "odd" if its odd.
function oddOrEven(number) {
  number % 2 === 0 ? console.log("even") : console.log("odd");
}
oddOrEven(8);

//call your function by using one of the options below.
// oddOrEven(prompt());
//oddOrEven()

//10.--------------------------------------------------------------------------------------
//write a function that prints the fibbonacci sequence for the number passed into it
// HINT! fibbonacchi =
//  c = a + b;
//  a = b;
//  b = c;
function Fibbonacci(number) {
  let fArray = [0, 1];
  let a = 0;
  let b = 1;

  for (let i = 2; i < number; i++) {
    let c = a + b;
    fArray.push(c);
    a = b;
    b = c;
  }
  console.log(fArray);
}
Fibbonacci(10);

//11.--------------------------------------------------------------------------------------
//BONUS!Implement fizzbuzz, if a number is divisible by 3: Fizz, if a number is divisible by 5: Buzz, if the number is divisible by both 3 and 5, FizzBuzz
// https://www.geeksforgeeks.org/fizz-buzz-implementation/
function fizzbuzz(number) {
  number % 3 === 0 && number % 5 === 0 ? console.log(true) : console.log(false);
}

fizzbuzz(11);

//12.--------------------------------------------------------------------------------------
//SUPERBONUS - we have not talked about recursion yet, but here is a fun one to try.
//recursion is when a function calls itself.
//Complete the function so that it returns the factorial of a number. Factorial (n!) is the product of all whole numbers between 1 and n
//example: factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
function factorial(n) {
  if (n === 0) return 1;
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;

  /// din kode her
}
console.log(factorial(4));
