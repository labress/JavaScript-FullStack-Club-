const myForm = document.querySelector('.my-form');
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#submit-button');

const errorMsg = document.querySelector('.msg');

const items = document.querySelector('.items');

submitButton.addEventListener("click", function(e) {
    e.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === "" || emailValue === "") {
        errorMsg.textContent = "Please fill in all fields";
        errorMsg.classList = "error";

        setTimeout(() => {
            errorMsg.textContent = "";
            errorMsg.classList = "";
        }, 3000);
        return;
    } 

    const li = document.createElement("li");
    li.classList = `${nameValue} : ${emailValue}`;
    li.innerHTML = `Name: ${nameValue} <br> Email: ${emailValue}`;

    items.appendChild(li);

    nameInput.value = "";
    emailInput.value = ""; 
});