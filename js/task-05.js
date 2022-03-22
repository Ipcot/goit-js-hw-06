const inputTextEl = document.querySelector("input#name-input");
const spanTextEl = document.querySelector("span#name-output")

function onTextInput(event) {
    spanTextEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        spanTextEl.textContent = "Anonymous"
    }
}
    inputTextEl.addEventListener("input", onTextInput)
