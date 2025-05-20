
              //HEADER 

const searchButton = document.getElementById('searchButton');

function toggleSearchIntup(e) {
    e.preventDefault();
    this.classList.toggle('active');

    // overlay.classList.toggle('active');

    const input = document.querySelector('.search__input');
    if (this.classList.contains('active')) {
        input.focus();
    }
}

searchButton.addEventListener('click', toggleSearchIntup);

/*overlay.addEventListener('click', () => {
    searchButton.classList.remove('active');
    overlay.classList.remove('active');
  }); */

                    //WRAPPERS 

const backgrounds = [
    {
        gradient: "linear-gradient(to right, #000, rgba(255, 255, 255, 0))",
        image: "url('/cyberblaze-games/assets/imgs/wrappers/webp/GTA-5.webp')",
    },
    {
        gradient: "linear-gradient(to right, #000, rgba(255, 255, 255, 0))",
        image: "url('/cyberblaze-games/assets/imgs/wrappers/webp/days-gone.webp')"
    },
    {
        gradient: "linear-gradient(to right, #000, rgba(255, 255, 255, 0))",
        image: "url('/cyberblaze-games/assets/imgs/wrappers/webp/call\ of\ duty\ III.webp')"
    },
    {
        gradient: "linear-gradient(to right, #000, rgba(255, 255, 255, 0))",
        image: "url('/cyberblaze-games/assets/imgs/wrappers/webp/ghost-wire.webp')"
    }, 
    {
        gradient: "linear-gradient(to right, #000, rgba(255, 255, 255, 0))",
        image: "url('./assets/imgs/fotor-20250419142048.png')"
    }
];


const scrollButtons = document.querySelectorAll(".scroll");

const wrapper = document.querySelector(".wrapper");

let currentIndex = 0;

// Função para trocar o background e mostrar a seção ativa
function changeBackgroundAndContent(index) {

    wrapper.style.backgroundImage = ` ${backgrounds[index].gradient}, ${backgrounds[index].image}`;

    // Esconde todas as seções
    document.querySelectorAll(".wrapper-1, .wrapper-2, .wrapper-3, .wrapper-4, .wrapper-5").forEach(section => {
        section.style.display = "none";
    });

    // Mostra a seção ativa
    const currentWrapper = document.querySelector(`.wrapper-${index + 1}`);
    if (currentWrapper) {
        currentWrapper.style.display = "flex";
    }

    // Ativa o botão de scroll correspondente e destaca
    scrollButtons.forEach((bnt, i) => {
        if (i === index) {
            bnt.classList.add('active'); // Destaca o botão
        } else {
            bnt.classList.remove('active');// Remove a classe de destaque dos outros botões
        }
    });
}


// Adiciona o evento de clique aos botões de scroll
scrollButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        currentIndex = index; // Atualiza o índice atual
        changeBackgroundAndContent(index);
    });
});


// Função para mudar o conteúdo automaticamente a cada 5 segundos
function autoChangeContent() {
    currentIndex = (currentIndex + 1) % backgrounds.length// Muda para a próxima seção
    changeBackgroundAndContent(currentIndex);
}

// Chama a função automaticamente a cada 5 segundos
setInterval(autoChangeContent, 30000);

// Inicializa com a primeira seção
changeBackgroundAndContent(currentIndex);


                 //NAVBAR

function toggleFilterBorder(event) {
    const checkbox = event.target; // (event.target) Ele pega o elemento que foi clicado
    const parentFilter = checkbox.closest('.filter');

    if (checkbox.checked) {
        parentFilter.classList.add('filter--active');
    } else {
        parentFilter.classList.remove('filter--active');
    }
}


function setupfilterToggles() {
    const checkboxes = document.querySelectorAll('.button__check');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', toggleFilterBorder);
    });
}

// Chama a função quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', setupfilterToggles);



const menuButtons = document.querySelectorAll('.button');

function handleMenuClick(event) {
  menuButtons.forEach(btn => btn.classList.remove('active'));
  event.currentTarget.classList.add('active');
}

menuButtons.forEach(btn => {
  btn.addEventListener('click', handleMenuClick);
});




// Alterna dropdown
const toggleDropdown = id => {
    const dropdownList = document.getElementById(id);
    const arrow = dropdownList?.previousElementSibling?.querySelector('.button');
    dropdownList?.classList.toggle('active');
    arrow?.classList.toggle('rotated');
};





const navItems = document.querySelectorAll(".tab-button");
const contentSections = document.querySelectorAll(".content-section");

// Mapeia os botões aos IDs das seções
const tabIds = ["meus-jogos", "biblioteca", "instalar", "fanatico"];

navItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Remove 'active' de todos os botões e seções
    navItems.forEach(i => i.classList.remove("active"));
    contentSections.forEach(section => section.classList.remove("active"));

    // Ativa o botão clicado e a seção correspondente
    item.classList.add("active");
    const targetSection = document.getElementById(tabIds[index]);
    if (targetSection) {
      targetSection.classList.add("active");
    }
  });
});
