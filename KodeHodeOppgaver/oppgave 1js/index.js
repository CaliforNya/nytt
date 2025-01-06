// /******************************************************************************

// ASSIGNMENT 1

// Your first task will be to link this javascript file to the index.html file

// using one of the methods I showed in the first lecture.

// <-- Locate the index.html file in the file browser and link it to this file,

// javascript.js

// ******************************************************************************/

// /******************************************************************************

// ASSIGNMENT 2

// Last lecture I showed you how to make variables that can hold values of the

// various data types. Make some variables of the following datatypes:

// String, number, boolean, array

// You can choose what the actual content is.

// Try to use both the let and const keywords

// ******************************************************************************/

// let logOutMessage = " See you soon";
// const myDay = 22;
// let paidSubscription = true;
// let aboutMe = ["pizza", "pasta", "gelato!"];

// /******************************************************************************

// ASSIGNMENT 3

// Try out a few of the operators we looked at (+, -, /, *)

// as well as a few of the shorthand operators (++, --, +=, -=)

// ******************************************************************************/
// let numberOne = 22;
// let numberTwo = 4;
// let sum = (2 * numberOne) / numberTwo;
// console.log(sum);

// let count = 0;
// count += 2;
// console.log(count);

// /******************************************************************************

// ASSIGNMENT 4

// Write an IF/ELSE conditional statement that checks that userName isn't

// empty(""), that the user age is 18+, and that userIsBlocked is false.

// (HINT: Use the && (logical AND) to check all 3 in one IF statement)

// If all of these conditions are true, change the userIsLoggedIn variable to true

// and the goToPage variable to "/home" then console.log a welcome message.

// If any of the conditions for logging in are not met, console.log an error

// message.

// Try changing the values of the variables to make sure your IF/ELSE conditional

// can handle all cases correctly

// ******************************************************************************/

// let userName = "";

// let userAge = 18;

// let userIsLoggedIn = false;

// let userIsBlocked = false;

// let goToPage = "";

// if (userName !== "" && userAge >= 18 && userIsBlocked === false) {
//   userIsLoggedIn = true;
//   goToPage = "/home";
//   console.log("Oh! Hi there");
// } else {
//   console.log("ErrorrTerror ");
// }

// /******************************************************************************

// ASSIGNMENT 5

// Make a variable called userTitle and set the content equal to "Mr." if userMale

// is true, or to "Mrs." if userMale is false. Use the TERNARY conditional to do

// this:

// const variable = statement ? "this if true" : "this if not true"

// Try changing userMale to both true and false and console.log your new variable,

// to see that your conditional is working.

// ******************************************************************************/

// const userMale = false;

// //your code here
// const userTitle = userMale ? "mr." : "mrs.";
// console.log(userTitle);

const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];

// Case 1.
// Finn de mest prisgunstige varene for Alva
// Bruk .filter() for å hente ut alle produkter som koster mindre enn 200 gullmynter. Disse varene selger hun ofte ut raskt, og hun vil gjerne ha dem samlet i en liste.

const lavPris = products.filter((product) => product.price < 200);
console.log(lavPris);

// Lag en liste med produktnavnene for rask oversikt
// Bruk .map() for å lage en liste som kun inneholder navnene på produktene. Alva vil bruke denne listen til å skrive ut skilt i butikken.
const nameArray = products.map((product) => product.name);
console.log(nameArray);

// Finn de populære elektronikk-varene
// Alva elsker elektronikk, men hun har mistet oversikten over hva som finnes i denne kategorien. Bruk en kjedet kombinasjon av .filter() og .map() for å lage en liste som kun inneholder navnene til produktene i kategorien "electronics".

const elektronikkArray = products.filter((product) =>
  product.category.includes("electronics")
);
console.log(elektronikkArray);

const elektronikkArray2 = products
  .filter((product) => product.category === "electronics")
  .map((product) => product.name);

console.log(elektronikkArray2);

// Finn luksusproduktene i Alvas sortiment
// Bruk .some() for å sjekke om det finnes produkter som koster mer enn 1000 gullmynter. Hvis ja, vil Alva legge dem i et spesielt luksushjørne i butikken.

const luksusArray = [];
const luksusProdukt = products.some((product) => {
  if (product.price > 1000) {
    luksusArray.push(product.name);
    return true;
  }
  return false;
});

console.log(luksusArray);

// Regn ut verdien av hele Alvas lager
// Bruk .reduce() for å finne den totale kostnaden av alle produktene. Alva må vite dette for å sette riktig pris på forsikringen av varene sine.
const totalVerdi = products.reduce((sum, product) => sum + product.price, 0);

console.log(totalVerdi);

//  Case 2:
// Alva har bestemt seg for å rydde opp i lageret sitt ved å kjøre et stort salg. Hun trenger din hjelp til å analysere produktene og finne de beste måtene å sette opp tilbudene på.

// Finn alle produkter som koster mindre enn 200 – disse skal få en ekstra rabatt for å bli solgt ut raskt.
// Lag en liste med navnene på alle produktene - slik at Alva kan printe ut et reklameark for salget.
// Finn navnene på alle produkter i kategorien "clothing" – klær selger alltid godt, og Alva vil markedsføre disse spesielt.
// Sjekk om det finnes produkter som koster mer enn 1000 – de dyre produktene kan være litt vanskelige å selge, og Alva vurderer å gi spesialtilbud på dem.
// Regn ut hvor mye hele lageret er verdt før salget starter - Så Alva vet hvor mye hun kan tjene.
