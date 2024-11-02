document.addEventListener('DOMContentLoaded', function () {
    // Variável para guardar a última posição de scroll
    let lastScrollPosition = window.pageYOffset;

    // Seleciona o container do popup
    const popupContainer = document.querySelector('.principal__caixa__popup-container');

    // Função para detectar o scroll
    window.addEventListener('scroll', function() {
        let currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition < lastScrollPosition) {
            popupContainer.classList.add('show');
        } else {
            popupContainer.classList.remove('show');
        }

        lastScrollPosition = currentScrollPosition;
    });

    // Evento de load para exibir o popup após o carregamento da página
    window.addEventListener('load', () => {
        setTimeout(() => {
            popupContainer.classList.add('show');
        }, 300);
    });

    // Seleciona os itens da lista da seção .segunda__sessao
    const itens = document.querySelectorAll('.segunda__sessao-cards__lista__itens');

    // Observer para animar os itens da lista ao entrar na viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('mostrar');
            } else {
                entry.target.classList.remove('mostrar');
            }
        });
    }, { threshold: 0.1 });

    // Observa cada item da lista
    itens.forEach(item => {
        observer.observe(item);
    });

    // Seleciona todos os títulos que precisam de animação
    const titulos = document.querySelectorAll('.terceira__sessao__titulo');

    // Observer para animar os títulos ao entrar na viewport
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Adiciona a classe para animar o título
            } else {
                entry.target.classList.remove('show'); // Remove a classe se sair da viewport
            }
        });
    }, { threshold: 0.1 });

    // Observa cada título
    titulos.forEach(titulo => {
        titleObserver.observe(titulo);
    });
});
