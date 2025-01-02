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
