function buscaCep(cep) {
    fetch('https://viacep.com.br/ws/'+cep+'/json/')
    .then(response => {
        if(!response.ok){
            console.log("ERRO DE CONEXÃO")
        }

    return response.json()
    })
    .then(data => {
        console.log(data)
        endereco.value = data.logradouro
        bairro.value = data.bairro
        cidade.value = data.localidade
        estado.value = data.uf
    })
    .catch(error => {
        console.log("Erro: ", error)
    })
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
    alert ("Conectado com sucesso!")
}