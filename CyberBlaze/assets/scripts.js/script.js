document.addEventListener('DOMContentLoaded', function () {
    // Variável para guardar a última posição de scroll
    let lastScrollPosition = window.pageYOffset;

    // Seleciona o container do popup
    const popupContainer = document.querySelector('.hero-section__box__popup-container');

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

    // Exibe o popup após o carregamento da página
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
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0.1 });

    // Observa cada título
    titulos.forEach(titulo => {
        titleObserver.observe(titulo);
    });

    // Adicionando animação "jump-kick" para os títulos
    const elementosComAnimacao = document.querySelectorAll('.anydevice__big__title');

    // Observer para animar os elementos com jump-kick ao entrar na viewport
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('jump-kick');
            } else {
                entry.target.classList.remove('jump-kick');
            }
        });
    }, { threshold: 0.1 });

    // Observa cada elemento com animação
    elementosComAnimacao.forEach(elemento => {
        animationObserver.observe(elemento);
    });
});

// Lógica para os slides Swiper

// Função para ajustar o espaço entre slides do Swiper
function ajustarEspacoEntreSlides(id, spaceBetweenLarge, spaceBetweenSmall) {
    const tamanhoDaTela = window.innerWidth;
    const espacoEntreSlides = (tamanhoDaTela >= 350) ? spaceBetweenLarge : spaceBetweenSmall;

    new Swiper(id, {
        slidesPerView: 1,
        spaceBetween: espacoEntreSlides,
        pagination: {
            el: `${id} .swiper-pagination`,
            type: 'bullets',
        },
    });
}

// Função para configurar carrosséis duplicados
function configurarCarrosselDuplicado(id, spaceBetweenLarge, spaceBetweenSmall) {
    const tamanhoDaTela = window.innerWidth;
    const espacoEntreSlides = (tamanhoDaTela >= 350) ? spaceBetweenLarge : spaceBetweenSmall;

    const swiperWrapper = document.querySelector(`${id} .swiper-wrapper`);
    swiperWrapper.innerHTML += swiperWrapper.innerHTML; // Duplica os slides

    new Swiper(id, {
        slidesPerView: 3,
        spaceBetween: espacoEntreSlides,
        loop: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
        },
        speed: 3000,
        allowTouchMove: true,
        freeMode: true,
        freeModeMomentum: false,
    });
}

// Ajusta os Swipers ao carregar a página
window.onload = function () {
    ajustarEspacoEntreSlides('#swiper-do-container-4', 55, 10);
    configurarCarrosselDuplicado('#games-carousel__slider-1', 30, 10);
    configurarCarrosselDuplicado('#games-carousel__slider-2', 30, 10);
};

// Reajusta os Swipers ao redimensionar a janela
window.addEventListener('resize', function () {
    ajustarEspacoEntreSlides('#swiper-do-container-4', 55, 10);
    configurarCarrosselDuplicado('#games-carousel__slider-1', 30, 10);
    configurarCarrosselDuplicado('#games-carousel__slider-2', 30, 10);
});

// Função para alternar a visibilidade de um dropdown
function toggleDropdown(listId) {
    const dropdownList = document.getElementById(listId);
    const button = dropdownList.previousElementSibling; // Botão que controla o dropdown
    const arrow = button.querySelector('.partners__footer__dropdown-buttons__button__dropdown-arrow'); // Seta dentro do botão

    // Alterna a visibilidade da lista de dropdown
    dropdownList.classList.toggle('active');
    
    // Alterna a rotação da seta
    arrow.classList.toggle('rotated');
}
