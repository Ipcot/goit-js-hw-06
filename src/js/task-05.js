const inputTextEl = document.querySelector("input#name-input");
const spanTextEl = document.querySelector("span#name-output")

const onTextInput = event => 
    spanTextEl.textContent = event.currentTarget.value;

    inputTextEl.addEventListener("input", onTextInput)
