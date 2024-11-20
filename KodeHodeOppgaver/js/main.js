const button = document.querySelector("#button");
const input = document.querySelector("#input");
const firstText = document.querySelector("#first-p");
const secondText = document.querySelector("#second-p");

// function inputText() {
//   firstText.textContent = input.value;
// }
//inspect tool
// function inspect(event) {
//   console.log(event);
// }
// let i = 0;
// function addPTags() {
//   let node = document.createElement("p");
//   let parent = document.querySelector("div");
//   node.textContent = input.value;
//   parent.appendChild(node);
//   node.id = `p-${i}`;
//   i++;
// }
let i = 1;

function addElement() {
  let inputText = input.value;

  const node = document.createElement(element);
  const parent = document.querySelector("div");
  node.innerHTML = inputText;
  node.id = `element-${i}`;
  i++;
  parent.appendChild(node);
}

const changeText = (event) => {
  if (event.target.nodeName === "P" && input.value !== "") {
    let temp = document.getElementById(event.target.id);
    temp.textContent = input.value;
  }
};

button.addEventListener("click", addElement);
document.addEventListener("click", changeText);
