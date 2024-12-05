// const myArray = ["apple", "banana", "cherry", "date", "eggplant"];
// console.log(myArray);

// //1.--------------------------------------------------------------------------------------
// // Print the numbers 1-10 using a "for-loop"

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let numbers = [];
// for (let i = 1; i <= 10; i++) {
//   numbers.push(i);
// }
// console.log(numbers);

// //2.--------------------------------------------------------------------------------------
// // Print the numbers 1-10 using a "while loop"

// let i = 0;
// while (i < 10) {
//   i++;
//   console.log(i);
// }

// //3.--------------------------------------------------------------------------------------
// // Print each item in myArray using a "for loop".

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// //4.--------------------------------------------------------------------------------------
// // Using the myArray.push() method, add "mango" to the end of myArray.
// //print myArray using a for... of loop.

// myArray.push("mango");

// for (const fruit of myArray) {
//   console.log(fruit);
// }

// //5.--------------------------------------------------------------------------------------
// //Using the myArray.splice() method, remove "cherry" from myArray
// // print the result using myArray.foreach()
// myArray.splice(2, 1);

// myArray.forEach((fruit) => {
//   console.log(fruit);
// });

// //6.--------------------------------------------------------------------------------------
// // Using the .shift() and .pop() method, remove the first and last item from myArray.
// //print the result
// myArray.pop();
// myArray.shift();
// console.log(myArray);

// // 7.--------------------------------------------------------------------------------------
// // create a variable and assign it the content of myArray as a string using .join().
// // print your variable.
// //BONUS - See if you can make the items be seperated by a space

// let newString = myArray.join(" ");
// console.log(newString);

// //8--------------------------------------------------------------------------------------
// //Create a function that takes a number as an argument and returns that number squared.
// // call your function by using a valid argument

// function numberSquared(number) {
//   let result = number * number;
//   console.log(result);
// }

// numberSquared(12);

// //9.--------------------------------------------------------------------------------------
// //Using the "%" (modulo) operator complete the function,
// // it should take "number" as an argument and return "even" if its even and "odd" if its odd.
// function oddOrEven(number) {
//   number % 2 === 0 ? console.log("even") : console.log("odd");
// }
// oddOrEven(8);

// //call your function by using one of the options below.
// // oddOrEven(prompt());
// //oddOrEven()

// //10.--------------------------------------------------------------------------------------
// //write a function that prints the fibbonacci sequence for the number passed into it
// // HINT! fibbonacchi =
// //  c = a + b;
// //  a = b;
// //  b = c;
// function Fibbonacci(number) {
//   let fArray = [0, 1];
//   let a = 0;
//   let b = 1;

//   for (let i = 2; i < number; i++) {
//     let c = a + b;
//     fArray.push(c);
//     a = b;
//     b = c;
//   }
//   console.log(fArray);
// }
// Fibbonacci(10);

// //11.--------------------------------------------------------------------------------------
// //BONUS!Implement fizzbuzz, if a number is divisible by 3: Fizz, if a number is divisible by 5: Buzz, if the number is divisible by both 3 and 5, FizzBuzz
// // https://www.geeksforgeeks.org/fizz-buzz-implementation/

// function fizzbuzz(number) {
//   if (number % 3 === 0 && number % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (number % 3 === 0) {
//     console.log("fizz");
//   } else if (number % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log("neither fizz, nor buzz");
//   }
// }
// fizzbuzz(15);

// //12.--------------------------------------------------------------------------------------
// //SUPERBONUS - we have not talked about recursion yet, but here is a fun one to try.
// //recursion is when a function calls itself.
// //Complete the function so that it returns the factorial of a number. Factorial (n!) is the product of all whole numbers between 1 and n
// //example: factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
// function factorial(n) {
//   if (n === 0) return 1;
//   let result = 1;

//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;

//   /// din kode her
// }
// console.log(factorial(4));

// const url = "https://pokeapi.co/api/v2/pokemon";

// const pokemonCatch = async (url) => {
//   const response = await fetch(url);

//   const pokemon = await response.json();

//   console.log(pokemon);
// };

// pokemonCatch(url);

//1. create an array of 5 person objects, the objhects should contain first name last name, age and job properties, jobb should be a boolean.
//------------------------------------------------------------------------------------------------------------------------------------------------

// let people = [
//   {
//     firstName: "Nya",
//     lastName: "Zoldyck",
//     age: 29,
//     employed: true,
//   },
//   {
//     firstName: "Blueberry",
//     lastName: "Muffin",
//     age: 12,
//     employed: false,
//   },
//   {
//     firstName: "Endless",
//     lastName: "Sommer",
//     age: 34,
//     employed: false,
//   },
//   {
//     firstName: "Margarita",
//     lastName: "Spicy",
//     age: 22,
//     employed: false,
//   },
//   {
//     firstName: "Velvet",
//     lastName: "Sky",
//     age: 27,
//     employed: false,
//   },
// ];
// //2. print First and last name of the first person in the array. using dot notation on firstname and bracket notation last name
// //------------------------------------------------------------------------------------------------------------------------------------------------

// console.log(people[0].firstName, people[0]["lastName"]);

// //3. That was tiresome.. just so much typing. Lets write a method to that we never need to that again..
// //create a method in every person object that returns first and last name, call it fullName. This can be done manually for each one or with a loop.
// //Print fullName of the second person in the array by calling the method.
// //------------------------------------------------------------------------------------------------------------------------------------------------

// let people2 = [
//   {
//     firstName: "Nya",
//     lastName: "Zoldyck",
//     age: 29,
//     employed: true,
//     fullName: function () {
//       console.log(`${this.firstName} ${this.lastName}`);
//     },
//   },
//   {
//     firstName: "Blueberry",
//     lastName: "Muffin",
//     age: 12,
//     employed: false,
//     fullName: function () {
//       console.log(`${this.firstName} ${this.lastName}`);
//     },
//   },
//   {
//     firstName: "Endless",
//     lastName: "Sommer",
//     age: 34,
//     employed: false,
//     fullName: function () {
//       console.log(`${this.firstName} ${this.lastName}`);
//     },
//   },
//   {
//     firstName: "Margarita",
//     lastName: "Spicy",
//     age: 22,
//     employed: false,
//     fullName: function () {
//       console.log(`${this.firstName} ${this.lastName}`);
//     },
//   },
//   {
//     firstName: "Velvet",
//     lastName: "Sky",
//     age: 27,
//     employed: false,
//     fullName: function () {
//       console.log(`${this.firstName} ${this.lastName}`);
//     },
//   },
// ];
// people2[1].fullName();

// //4. Its the third person's birthday! And their job status changed. Update their age and job status using dot notation.
// //------------------------------------------------------------------------------------------------------------------------------------------------
// people[2].employed = true;
// people[2].age += 1;

// console.log(people[2]);

// //5. Person three is throwing a giant party! create a function called fotballPubben(). The function should check if the person is over 18, print "party time" if they are and "too young" if they are not. It should also print the name of the person.
// // use a loop to call the function for every person in the array.
// //------------------------------------------------------------------------------------------------------------------------------------------------
// let footballPubben = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].age >= 18
//       ? console.log(`${arr[i].firstName}: Party Time`)
//       : console.log(`${arr[i].firstName}: Too Young!`);
//   }
// };

// footballPubben(people);

// //6. It's time for school! Create a function called university. It should take in an person object as well as type of degree (bachelors or masters) as arguments.
// // The function should update age and add two properties called "degree" and "student loan". The value of age, degree and student loan should change depending on what degree
// //was passed into the function. Send one person to uni and print the result.
// //------------------------------------------------------------------------------------------------------------------------------------------------

// let university = (firstName, degree) => {
//   for (let i = 0; i < people.length; i++) {
//     if (people[i].firstName === firstName) {
//       if (degree === "bachelors") {
//         people[i].age += 3;
//         people[i].degree = "bachelors";
//         people[i].studentLoan = 5000;
//       } else if (degree === "masters") {
//         people[i].age += 5;
//         people[i].degree = "masters";
//         people[i].studentLoan = 10000;
//       }
//     }
//   }
// };
// university("Nya", "masters");
// console.log(people[0]);

// // 7. API TIME!
// // Read the documentation of this dog API: https://dog.ceo/dog-api/documentation/
// // Fetch 4 dogs of the same breed or sub-breed and display them in the DOM
// //feel free to change the ID of the images and/or add css.
// //------------------------------------------------------------------------------------------------------------------------------------------------
// //BONUS!!
// //create a way for you to change the breed of the dogs displayed on your page
// //------------------------------------------------------------------------------------------------------------------------------------------------

// const container = document.getElementById("container");
// let imges = [];

// const doggos = async (breed) => {
//   for (let i = 0; i < 4; i++) {
//     let url = `https://dog.ceo/api/breed/${breed}/images/random`;
//     const response = await fetch(url);
//     const doggy = await response.json();
//     //console.log(doggy.message);
//     imges.push(doggy.message);
//   }
//   console.log(imges);

//   let string = "";
//   for (let i = 0; i < imges.length; i++)
//     string += `<img class="dog-pic" src="${imges[i]}">`;
//   // console.log(string);
//   container.innerHTML = string;
// };

// doggos("poodle");
