
   // Aguarda até que o HTML seja totalmente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Variável para guardar a última posição de scroll
    let lastScrollPosition = window.pageYOffset;
    
    // Seleciona o container do popup
    const popupContainer = document.querySelector('.principal__caixa__popup-container');

    // Função para detectar o scroll
    window.addEventListener('scroll', function() {
        // Posição atual do scroll
        let currentScrollPosition = window.pageYOffset;

        // Se o usuário está rolando para cima (scroll para cima)
        if (currentScrollPosition < lastScrollPosition) {
            // Adiciona a classe que mostra o popup
            popupContainer.classList.add('show');
        } else {
            // Remove a classe se o usuário estiver rolando para baixo (scroll para baixo)
            popupContainer.classList.remove('show');
        }

        // Atualiza a última posição de scroll
        lastScrollPosition = currentScrollPosition;
    });
});

// Evento de load para exibir o popup após o carregamento da página
window.addEventListener('load', () => {
    // Aguarda 2 segundos após o carregamento da página
    setTimeout(() => {
        const popup = document.querySelector('.principal__caixa__popup-container');
        popup.classList.add('show'); // Adiciona a classe 'show' para exibir o popup
    }, 2000); // Tempo em milissegundos (2000ms = 2 segundos)
});
