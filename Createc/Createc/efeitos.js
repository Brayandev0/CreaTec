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





document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel .ladding-page-link");
    const totalSlides = slides.length;
    const carousel = document.querySelector(".carousel");
    const prevButton = document.querySelector(".carousel-btn.prev");
    const nextButton = document.querySelector(".carousel-btn.next");
    const dotsContainer = document.querySelector(".carousel-dots");
    let autoSlide;

    // Criar os indicadores (bolinhas)
    function createDots() {
        dotsContainer.innerHTML = ""; // Limpa antes de criar
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement("span");
            dot.classList.add("dot");
            if (i === currentSlide) dot.classList.add("active"); // Deixa ativa a do primeiro slide
            dot.dataset.index = i; // Define o índice do slide correspondente
            dotsContainer.appendChild(dot);
        }
    }

    // Atualizar posição do carrossel
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentSlide * 24.5}%)`;
        carousel.style.transition = "transform 0.5s ease-in-out";
        updateDots();
    }

    // Atualizar indicadores (bolinhas)
    function updateDots() {
        document.querySelectorAll(".dot").forEach((dot, index) => {
            dot.classList.toggle("active", index === currentSlide);
        });
    }

    // Avançar slide
    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
        } else {
            currentSlide = 0; // Volta para o primeiro
        }
        updateCarousel();
    }

    // Voltar slide
    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = totalSlides - 1; // Vai para o último
        }
        updateCarousel();
    }

    // Ir para um slide específico ao clicar na bolinha
    function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
    }

    // Iniciar autoplay SOMENTE em telas menores que 768px
    function startAutoSlide() {
        if (window.innerWidth < 768) {
            autoSlide = setInterval(nextSlide, 5000);
        }
    }

    // Parar autoplay ao interagir
    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    // Eventos dos botões
    prevButton.addEventListener("click", () => {
        stopAutoSlide();
        prevSlide();
    });

    nextButton.addEventListener("click", () => {
        stopAutoSlide();
        nextSlide();
    });

    // Evento das bolinhas
    dotsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("dot")) {
            stopAutoSlide();
            goToSlide(Number(e.target.dataset.index));
        }
    });

    // Criar bolinhas e iniciar autoplay se necessário
    createDots();
    startAutoSlide();

    // Atualizar autoplay e bolinhas ao redimensionar a tela
    window.addEventListener("resize", () => {
        stopAutoSlide();
        startAutoSlide();
        createDots();
    });
});




function enviarOrcamento() {
    alert("teste")
    let data = document.getElementById("dados_form");
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let telefone = document.getElementById("telefone").value
    let mensagem = document.getElementById("mensagem").value
    let sobre_nos = document.getElementById("sobre_nos").value

    if(nome.length <= 2 || nome.length >= 50){
        // aqui voce poem oq vai mudar caso o nome seja invalido
        return alert("deu erro aq paizao" + nome) // ele retorna os erros, para implementar uma mensagem coloque nos return aq 
    };
    if(!email.includes("@") || !email.includes(".com")){
        // aqui voce poem oq vai mudar caso o nome seja invalido
        return alert("erro" + email)
    }
    if(telefone.length < 9 || telefone.length > 15){
        // aqui voce poem oq vai mudar caso o nome seja invalido
        return alert("erro no telefone" + telefone)

    }
    if(mensagem.length > 155 || mensagem.length < 3){
        // aqui voce poem oq vai mudar caso o nome seja invalido
        return alert("opa paezao erro na mensagem " + mensagem)
    }};









    // o popup caso tudo esteja correto voce começa a fazer aqui 
    document.addEventListener("DOMContentLoaded", function () {
        // Seleciona os elementos corretamente
        const fecharBtn = document.querySelector(".fechar-orcamento"); 
        const abrirBtn = document.querySelector(".header-orcamento-button");
        const desfoqueDiv = document.querySelector(".div-desfoque-do-fundo");
        const orcamentoDiv = document.querySelector(".pedir-orcamento");
    
        // Verifica se os elementos existem antes de adicionar eventos
        if (fecharBtn && abrirBtn && desfoqueDiv && orcamentoDiv) {
            abrirBtn.addEventListener("click", function () {
                desfoqueDiv.style.display = "block";  
                orcamentoDiv.style.display = "block"; 
            });
    
            fecharBtn.addEventListener("click", function () {
                desfoqueDiv.style.display = "none";  
                orcamentoDiv.style.display = "none"; 
            });
        }
    });
    
    
