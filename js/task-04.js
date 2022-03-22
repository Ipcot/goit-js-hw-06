const counter = {
    counterValue: 0,
    increment() {
        this.counterValue += 1;
    },
    decrement() {
        this.counterValue -= 1;
    },
}

const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener("click", () => {
    counter.decrement();
    counterValue.textContent = counter.counterValue;
});

incrementBtn.addEventListener("click", () => {
    counter.increment();
    counterValue.textContent = counter.counterValue;
});






