let resulth = document.getElementById("resulth");
let resultg = document.getElementById("resultg");
let pointsh = 0;
let pointsg = 0;

resulth.innerText = pointsh;
resultg.innerText = pointsg;

function addOne() {
  pointsh += 1;
  resulth.innerText = pointsh;
}
function addTwo() {
  pointsh += 2;
  resulth.innerText = pointsh;
}
function addThree() {
  pointsh += 3;
  resulth.innerText = pointsh;
}
function addOneg() {
  pointsg += 1;
  resultg.innerText = pointsg;
}
function addTwog() {
  pointsg += 2;
  resultg.innerText = pointsg;
}
function addThreeg() {
  pointsg += 3;
  resultg.innerText = pointsg;
}
function newGame() {
  pointsg = 0;
  resultg.innerText = pointsg;
  pointsh = 0;
  resulth.innerText = pointsh;
}
