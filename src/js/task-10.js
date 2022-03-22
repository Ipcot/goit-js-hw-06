function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const buttonCreateEl = document.querySelector("button[data-create]")
const buttonDestroyEl = document.querySelector("button[data-destroy]")
const divBoxesEl = document.querySelector("#boxes")


buttonCreateEl.addEventListener("click", onButtonCreateBoxes);
buttonDestroyEl.addEventListener("click", onButtonDestroyBoxes)

function onButtonCreateBoxes() {
  const divBoxes = createBoxes(inputEl.value)
  divBoxesEl.append(...divBoxes);
}

function createBoxes(amount) {
  const arrayBoxes = [];
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");
    box.style.margin = "auto";
    box.style.width = `${20 + 10 * i}px`;
    box.style.height = `${20 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    arrayBoxes.push(box)
  } 
  return arrayBoxes;
   }


function onButtonDestroyBoxes() {
  divBoxesEl.innerHTML = "";
}