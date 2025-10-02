console.log("script.js loaded"); // Verifica que el script se carga

const banner = document.getElementById("banner");
const message = document.getElementById("message");
let count = 0;

const changeCount = () => banner.innerHTML = `Car Count: ${count}`;
const errorMessage = () => message.innerHTML = "No Cars To Subtract";
const changeMessage = (x) => message.innerHTML = `One car was ${x}`;

const add = () => {
    count += 1;
    changeCount();
    changeMessage("added");
};

const subtract = () => {
    if (count > 0) {
        count -= 1;
        changeCount();
        changeMessage("subtracted");
    } else {
        errorMessage();
    }
};

const buttonAdd = document.getElementById("add");
const buttonSubtract = document.getElementById("subtract");

if (buttonAdd && buttonSubtract) {
    buttonAdd.addEventListener("click", add);
    buttonSubtract.addEventListener("click", subtract);
    console.log("Event listeners added for buttons");
} else {
    console.error("Button elements not found");
}