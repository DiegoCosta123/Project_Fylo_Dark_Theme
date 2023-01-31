const email = document.getElementById("email");
const buttonEmail = document.getElementById("button_content");

const errorMessage = document.getElementsByClassName("requiredField");


function buttonEmail() {
    if (email.value == '') {
        document.querySelector(".error-name").textContent = "email obrigatório";
        document.querySelector(".error-name").style.display = "block";
        return;
    }
}

// buttonEmail.addEventListener("click", (event) => {

//     event.preventDefault();

//     if (email.value == '') {
//         document.querySelector(".error-name").textContent = "email obrigatório";
//         document.querySelector(".error-name").style.display = "block";
//         return;
//     }
// })

