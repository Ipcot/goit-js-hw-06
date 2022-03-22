
const InputData = document.querySelector('#validation-input');
InputData.addEventListener('blur', checkInputValue);

function checkInputValue(event) {
    let inputSymbol = event.currentTarget.value;
    InputData.classList.add('invalid');
    
    if (inputSymbol.length === Number(InputData.dataset.length)) {
        InputData.classList.replace('invalid', 'valid');
    } else InputData.classList.replace('valid', 'invalid');
    
}