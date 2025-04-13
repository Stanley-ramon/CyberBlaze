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
        alert("FORMULÁRIO ENVIADO COM SUCESSO!");
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

document.addEventListener("keydown", function (event) {
    const form = document.querySelector("form.inputs");
    const activeElement = document.activeElement;

    if (form.contains(activeElement) && event.key === "Enter") {
        event.preventDefault(); // Impede que o botão "sobre" ou qualquer outro seja acionado
        enviarFormulario();
    }
});


function toggleAbout() {
    const panel = document.getElementById("aboutPanel");
    const buttonAbout = document.getElementById("about");

    if (!panel.classList.contains('open')) {
        panel.classList.remove('closing');
        panel.classList.add('open');
        buttonAbout.classList.add('open');
    } else {
        panel.classList.remove('open');
        panel.classList.add('closing');
        buttonAbout.classList.remove('open');
    }
}