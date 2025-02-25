document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".header-buttons-container");
    const underline = document.createElement("div");
    underline.classList.add("underline");
    container.appendChild(underline);

    const buttons = document.querySelectorAll(".header-buttons");

    buttons.forEach((button) => {
        button.addEventListener("mouseenter", function () {
            const rect = button.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            underline.style.width = `${rect.width}px`;
            underline.style.left = `${rect.left - containerRect.left}px`;
        });
    });

    container.addEventListener("mouseleave", function () {
        underline.style.width = "0";
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", function () {
        mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
    });
});

let currentSlide = 0;
const slides = document.querySelectorAll(".carousel .ladding-page-link");
const totalSlides = slides.length;
const carousel = document.querySelector(".carousel");
const dotsContainer = document.querySelector(".carousel-dots");

if (screenWidth > 768) {
    // Criar bolinhas para cada slide
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.setAttribute("onclick", `goToSlide(${i})`);
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dot");
dots[0].classList.add("active");

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });
}

function moveSlide(step) {
    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}
}


setInterval(() => moveSlide(1), 5000);


function adjustLayout() {
        const screenWidth = window.innerWidth;
        const carouselContainer = document.querySelector(".carousel-container");
        const linkisContainer = document.querySelector(".ladding-page-linkis");
        const elementsToRemove = document.querySelectorAll("#pc-close");

        if (screenWidth > 768) {
            // Remove a classe do carrossel e exibe os links normais
            if (carouselContainer) {
                carouselContainer.style.display = "none";
            }
            if (linkisContainer) {
                linkisContainer.style.display = "block";
            }

            // Remove todos os elementos com ID "pc-close"
            elementsToRemove.forEach(el => el.remove());
        } else {
            // Se for menor, ativa o carrossel e esconde os links normais
            if (carouselContainer) {
                carouselContainer.style.display = "block";
            }
            if (linkisContainer) {
                linkisContainer.style.display = "none";
            }
        }
    }

    // Executa ao carregar a página
    adjustLayout();

    // Adiciona um listener para executar sempre que a tela for redimensionada
    window.addEventListener("resize", adjustLayout);