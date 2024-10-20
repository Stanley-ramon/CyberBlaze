
document.addEventListener('DOMContentLoaded', function () {
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
    
    // Evento de load para exibir o popup após o carregamento da página
    window.addEventListener('load', () => {
        // Aguarda 2 segundos após o carregamento da página
        setTimeout(() => {
            popupContainer.classList.add('show'); // Adiciona a classe 'show' para exibir o popup
        }, 300); // Tempo em milissegundos
    });

    // Seleciona os itens da lista da seção .segunda__sessao
    const itens = document.querySelectorAll('.segunda__sessao-cards__lista__itens');

    // Observer para animar os itens da lista ao entrar na viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('mostrar');
            } else {
                entry.target.classList.remove('mostrar'); // Para animar novamente ao rolar para cima
            }
        });
    }, { threshold: 0.1 });

    // Observa cada item da lista
    itens.forEach(item => {
        observer.observe(item);
    });
});
