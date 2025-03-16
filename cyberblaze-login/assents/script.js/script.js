function togglePassword() {
    const passwordInput = document.getElementById('senha');
    const eyeIcon = document.getElementById('eye-icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.setAttribute('fill', '#FF7F50'); // Cor ao mostrar a senha
    } else {
        passwordInput.type = 'password';
        eyeIcon.setAttribute('fill', 'white'); // Cor padrão
    }
}

let Gmail = document.getElementById("email");
let senha = document.getElementById("senha");
let button = document.getElementById("button");

function emailEstaVazio() {
    return Gmail.value.trim() === "";
}

function senhaEstaVazia() {
    return senha.value.trim() === "";
}

function exibirAlerta() {
    if (emailEstaVazio() && senhaEstaVazia()) {
        alert("Todos os campos estão em branco! Preencha-os.");
    } else if (emailEstaVazio()) {
        alert("O campo Email está em branco! Adicione um Email válido.");
    } else if (senhaEstaVazia()) {
        alert("O campo Senha está em branco! Adicione uma Senha válida.");
    }
}

function enviarFormulario() {
    if (!emailEstaVazio() && !senhaEstaVazia()) {
        alert("Formulário enviado com sucesso!");
        limparCampos();
    } else {
        exibirAlerta();
    }
}

function limparCampos() {
    Gmail.value = "";
    senha.value = "";
}

button.addEventListener("click", enviarFormulario);

button.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        enviarFormulario();
    }
})
