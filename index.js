const email = document.getElementById("email");
const buttonEmail = document.getElementById("button_content");

const errorMessage = document.getElementsByClassName("requiredField");


buttonEmail.addEventListener("click", () => {
    if (email.value == '') {
        console.log("vazio")
        document.getElementById("error-name").textContent = "email obrigatório";
        document.getElementById("error-name").style.display = "block";
        return;
    }
    document.getElementById("error-name").style.display = "none";
});

