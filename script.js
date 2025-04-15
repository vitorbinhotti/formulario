function buscaCep(cep) {
    fetch('https://viacep.com.br/ws/' + cep + '/json/')
        .then(response => {
            if (!response.ok) {
                console.log("ERRO DE CONEXÃO")
            }

            return response.json()
        })
        .then(data => {
            document.querySelector("#endereco").value = data.logradouro || "";
            document.querySelector("#bairro").value = data.bairro || "";
            document.querySelector("#cidade").value = data.localidade || "";
            document.querySelector("#estado").value = data.uf || "";
          })
        .catch(error => {
            console.log("Erro: ", error)
        })
}

const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (nameInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }

    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu email");
        return;
    }

    if (!validatePassword(passwordInput.value)) {
        alert("A senha precisa ser no mínimo 8 digitos");
        return;
    }

    if(messageTextarea.value === "") {
        alert("Por favor, escreva uma mensagem");
        return;
    }

    form.submit();
});

function isEmailValid(email) {

    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}

function validatePassword(password, minDigits) {
    if (password.lenght >= minDigits) {
        return true
    }

    return false
}


function confereSenha() {
    const senha = document.querySelector('input[name=senha]');
    const confirma = document.querySelector('input[name=confirma]');

    if (confirma.value === senha.value) {
        confirma.setCustomValidity('');
    } else {
        confirma.setCustomValidity('As senhas não conferem');
    }
}

function senhaOK() {
    alert("Conectado com sucesso!")
}
