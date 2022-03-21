const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit)


function onFormSubmit(event) {
    event.preventDefault();
    const inputEmailEl = event.currentTarget.elements.email.value
    const inputPasswordEl = event.currentTarget.elements.password.value

    if (inputEmailEl && inputPasswordEl) {

        const formData = {
            email: inputEmailEl,
            password: inputPasswordEl,
        };

        console.log(formData);

        formEl.reset();
        
    } else alert("Все поля должны быть заполнены!");
}

