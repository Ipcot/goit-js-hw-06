
const refs = {
  body: document.querySelector("body"),
  button: document.querySelector(".change-color"),
  span: document.querySelector("span"),
}

refs.button.addEventListener("click", onButtonChangeColor);

function onButtonChangeColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
