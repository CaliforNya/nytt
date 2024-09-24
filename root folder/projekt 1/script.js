let strings = " bla bla bla";
let numbers = 123455;
let boolean = true;
let arrays = [1, 2, 3, 33, 34];
let objects = {
  name: "per harald",
  age: 23,
  isAlive: true,
};

let isAlive = true;
const navn = "per harald";

if (isAlive === true) {
  console.log("yippie!");
} else if (!isAlive) {
  console.log("dead");
} else {
  console.log("you dont exist");
}
let i = 0;
while (i < arrays.length - 1) {
  i++;
  console.log(arrays[i]);
}
function greeting() {
  console.log("hei" + objects.name + "!");
}

let counter = 0;
console.log(counter);

function countdown() {
  if (counter < 0) {
    counter--;
  }
  console.log(counter);
}

function count() {
  console.log(counter);
  counter++;
}
let num1 = 5;
let num2 = 5;
let sum = num1 + num2;
