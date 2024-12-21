// Lógica para o popup e animações

document.addEventListener('DOMContentLoaded', function () {
    // Variável para guardar a última posição de scroll
    let lastScrollPosition = window.pageYOffset;

    // Seleciona o container do popup
    const popupContainer = document.querySelector('.principal__caixa__popup-container');

    // Função para detectar o scroll
    window.addEventListener('scroll', function () {
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

// Lógica para os slides Swiper

// Verifica o tamanho da tela e ajusta o espaço entre os slides do primeiro Swiper (container 4)
function ajustarEspacoEntreSlidesContainer4() {
    const tamanhoDaTela = window.innerWidth;
    const espacoEntreSlides = (tamanhoDaTela >= 350) ? 55 : 10; // Ajuste os valores conforme necessário

    new Swiper('#swiper-do-container-4', {
        spaceBetween: espacoEntreSlides,
        slidesPerView: 1,
        pagination: {
            el: '#swiper-do-container-4 .swiper-pagination',
            type: 'bullets',
        },
    });
}

// Verifica o tamanho da tela e ajusta o espaço entre os slides do segundo Swiper (container 5)
function ajustarEspacoEntreSlidesGamescarouselslider1() {
    const tamanhoDaTela = window.innerWidth;
    const espacoEntreSlides = (tamanhoDaTela >= 350) ? 30 : 10; // Ajuste os valores conforme necessário

         // Duplica os slides manualmente para criar um efeito contínuo
    const swiperWrapper = document.querySelector('#games-carousel__slider-1 .swiper-wrapper');
    swiperWrapper.innerHTML += swiperWrapper.innerHTML; // Duplica os slides

    new Swiper('#games-carousel__slider-1', {
        slidesPerView: '3', // Permite múltiplos slides visíveis
        spaceBetween: espacoEntreSlides, // Define o espaçamento dinâmico entre os slides
        loop: false, // Ativa o loop infinito
        loopedSlides: 3, // Número de slides no loop (ajustar conforme a quantidade de slides)
        autoplay: {
            delay: 0, // Sem pausas
            disableOnInteraction: true, // Continua após interação
            reverseDirection: true, // Faz o autoplay ir no sentido inverso
        },
        speed: 3000, // Controle da suavidade da transição (quanto maior, mais fluido e lento o deslizamento)
        allowTouchMove: true, // Desabilita o movimento manual (opcional para não interferir no automático)
        freeMode: true, // Remove travas nos slides, tornando o movimento fluido
        freeModeMomentum: false
    });
}

function ajustarEspacoEntreSlidesGamescarouselslider2() {
    const tamanhoDaTela = window.innerWidth;
    const espacoEntreSlides = (tamanhoDaTela >= 350) ? 30 : 10; // Ajuste os valores conforme necessário

        // Duplica os slides manualmente para criar um efeito contínuo
    const swiperWrapper = document.querySelector('#games-carousel__slider-2 .swiper-wrapper');
    swiperWrapper.innerHTML += swiperWrapper.innerHTML; // Duplica os slides

    new Swiper('#games-carousel__slider-2', {
        slidesPerView: '3', // Permite múltiplos slides visíveis
        spaceBetween: espacoEntreSlides, // Define o espaçamento dinâmico entre os slides
        loop: false, // Ativa o loop infinito
        loopedSlides: 3, // Número de slides no loop (ajustar conforme a quantidade de slides)
        autoplay: {
            delay: 0, // Sem pausas
            disableOnInteraction: false, // Continua após interação
            reverseDirection: true, // Faz o autoplay ir no sentido inverso
        },
        speed: 3000, // Controle da suavidade da transição (quanto maior, mais fluido e lento o deslizamento)
        allowTouchMove: true, // Desabilita o movimento manual (opcional para não interferir no automático)
        freeMode: true, // Remove travas nos slides, tornando o movimento fluido
        freeModeMomentum: false
    });
}

// Chama as funções ao carregar a página
window.onload = function () {
    ajustarEspacoEntreSlidesContainer4();
    ajustarEspacoEntreSlidesGamescarouselslider1();
    ajustarEspacoEntreSlidesGamescarouselslider2();
};

// Chama as funções ao redimensionar a janela
window.addEventListener('resize', function () {
    ajustarEspacoEntreSlidesContainer4();
    ajustarEspacoEntreSlidesGamescarouselslider1();
    ajustarEspacoEntreSlidesGamescarouselslider2();
});

