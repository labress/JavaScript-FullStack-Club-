

const submitButton = document.querySelector("#submit-button"); 
const nameInput = document.querySelector("#name")
const myForm = document.querySelector("#my-form")
const emailInput = document.querySelector("#email")

const items = document.querySelectorAll(".item");
const body = document.querySelector("body");

submitButton.addEventListener("click", function(e) {
    e.preventDefault();
 // Evita o comportamento padrão do botão de submit, que é recarregar a página


    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue ==="" || emailValue === "") {
        return alert("Preencha os campos");
    }

    myForm.style.backgroundColor = "purple";

    items[0].textContent = nameValue ;
    items[1].textContent = emailValue ;

    body.style.backgroundColor = "rgb(100,500 , 30)";
});









// nameInput.addEventListenner("change", function(e) {
//    console.log(e.target.value); // Imprime o valor do input no console quando ele for alterado })