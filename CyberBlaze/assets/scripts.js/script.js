document.addEventListener('DOMContentLoaded', () => {
    const popupContainer = document.querySelector('.hero-section__box__popup-container');
    const itens = document.querySelectorAll('.segunda__sessao-cards__lista__itens');
    const titulos = document.querySelectorAll('.terceira__sessao__titulo');
    const elementosComAnimacao = document.querySelectorAll('.anydevice__big__title');
    let lastScrollPosition = window.pageYOffset;

    // Função genérica para manipular classes com IntersectionObserver
    const createObserver = (elements, className) => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => 
                entry.target.classList.toggle(className, entry.isIntersecting)
            );
        }, { threshold: 0.1 });
        elements.forEach(el => observer.observe(el));
    };

    // Exibe popup com base no scroll
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        popupContainer.classList.toggle('show', currentScroll < lastScrollPosition);
        lastScrollPosition = currentScroll;
    });

    // Exibe popup após o carregamento da página
    setTimeout(() => popupContainer?.classList.add('show'), 300);

    // Ativa observadores para animações
    createObserver(itens, 'mostrar');
    createObserver(titulos, 'show');
    createObserver(elementosComAnimacao, 'jump-kick');
});
// Função genérica para configurar Swipers
const configurarSwiper = (id, config, duplicar = false) => {
    if (duplicar) {
        const wrapper = document.querySelector(`${id} .swiper-wrapper`);
        if (wrapper) wrapper.innerHTML += wrapper.innerHTML;
    }
    return new Swiper(id, config);
};

window.addEventListener('load', () => {
    const config = {
        slidesPerView: 1,
        spaceBetween: window.innerWidth >= 350 ? 55 : 10,
    };

    // Adiciona a paginação apenas se a largura da tela for menor que 950px
    if (window.innerWidth < 950) {
        config.pagination = {
            el: '#swiper-do-container-4 .swiper-pagination',
            type: 'bullets',
        };
    }

    configurarSwiper('#swiper-do-container-4', config);
});


    ['#games-carousel__slider-1', '#games-carousel__slider-2'].forEach(id => {
        configurarSwiper(id, {
            slidesPerView: 3,
            spaceBetween: window.innerWidth >= 350 ? 0 : 10,
            loop: false,
            autoplay: { delay: 0, disableOnInteraction: false, reverseDirection: true },
            speed: 3000,
            freeMode: true,
            freeModeMomentum: false,
              breakpoints: {
                0: { slidesPerView: 3 },   // Para telas menores que 950px
                950: { slidesPerView: 5 }  // Para telas maiores ou iguais a 950px
            }
        }, true);
    });

// Reajusta os Swipers ao redimensionar a janela
window.addEventListener('resize', () => window.dispatchEvent(new Event('load')));

// Alterna dropdown
const toggleDropdown = id => {
    const dropdownList = document.getElementById(id);
    const arrow = dropdownList?.previousElementSibling?.querySelector('.partners__footer__dropdown-buttons__button__dropdown-arrow');
    dropdownList?.classList.toggle('active');
    arrow?.classList.toggle('rotated');
};
