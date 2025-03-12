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
    // Verificar se a largura da tela é menor que 769px
    if (window.innerWidth < 769) {
        let currentSlide = 0;
        const slides = document.querySelectorAll(".carousel .ladding-page-link");
        const totalSlides = slides.length;
        const prevButton = document.querySelector(".carousel-btn.prev");
        const nextButton = document.querySelector(".carousel-btn.next");
        const dotsContainer = document.querySelector(".carousel-dots");

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

        // Atualizar os slides
        function updateSlides() {
            slides.forEach((slide, index) => {
                slide.style.display = (index === currentSlide) ? "block" : "none";
            });
            updateDots();
        }

        // Atualizar os indicadores (bolinhas)
        function updateDots() {
            const dots = document.querySelectorAll(".dot");
            dots.forEach((dot, index) => {
                dot.classList.toggle("active", index === currentSlide);
            });
        }

        // Avançar slide
        function nextSlide() {
            // Adiciona o efeito de desfoque no slide atual
            slides[currentSlide].classList.add("blur");

            // Após o desfoque, troque o slide
            setTimeout(() => {
                currentSlide = (currentSlide + 1) % totalSlides; // Vai para o próximo, ou volta ao início
                updateSlides();
                slides[currentSlide].classList.remove("blur"); // Remove o desfoque do novo slide
            }, 500); // Tempo de desfoque antes de mudar o slide
        }

        // Voltar slide
        function prevSlide() {
            // Adiciona o efeito de desfoque no slide atual
            slides[currentSlide].classList.add("blur");

            // Após o desfoque, troque o slide
            setTimeout(() => {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Vai para o anterior, ou vai para o último
                updateSlides();
                slides[currentSlide].classList.remove("blur"); // Remove o desfoque do novo slide
            }, 500); // Tempo de desfoque antes de mudar o slide
        }

        // Ir para um slide específico ao clicar na bolinha
        function goToSlide(index) {
            // Adiciona o efeito de desfoque no slide atual
            slides[currentSlide].classList.add("blur");

            // Após o desfoque, troque o slide
            setTimeout(() => {
                currentSlide = index;
                updateSlides();
                slides[currentSlide].classList.remove("blur"); // Remove o desfoque do novo slide
            }, 500); // Tempo de desfoque antes de mudar o slide
        }

        // Eventos dos botões
        prevButton.addEventListener("click", () => {
            prevSlide();
            resetAutoSlide(); // Resetar o intervalo de troca automática
        });

        nextButton.addEventListener("click", () => {
            nextSlide();
            resetAutoSlide(); // Resetar o intervalo de troca automática
        });

        // Evento das bolinhas
        dotsContainer.addEventListener("click", (e) => {
            if (e.target.classList.contains("dot")) {
                goToSlide(Number(e.target.dataset.index));
                resetAutoSlide(); // Resetar o intervalo de troca automática
            }
        });

        // Função para iniciar a troca automática de slides a cada 3 segundos
        let autoSlideInterval;
        function startAutoSlide() {
            if (window.innerWidth < 769) {  // Verifica se a tela é menor que 769px
                autoSlideInterval = setInterval(nextSlide, 3000); // Troca a cada 3 segundos
            }
        }

        // Função para resetar o intervalo de troca automática ao interagir
        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            startAutoSlide();
        }

        // Inicializar
        createDots();
        updateSlides();
        startAutoSlide(); // Iniciar a troca automática assim que a página carregar
    }
});

function toggleMenu() {     
    // Mudar o menu do celular: alterna entre os botões do header e o ícone de menu (X)
    const menuBtn = document.querySelector('.menu-btn');
    const botoesDiv = document.getElementById('header-buttons'); // Corrigido getElementById para querySelector
    
    menuBtn.classList.toggle('active'); // Alterna a classe 'active'

    if (menuBtn.classList.contains('active')) { // Verifica se a classe 'active' está presente
        botoesDiv.style.display = 'flex';
    } else {
        botoesDiv.style.display = 'none';
    }
}



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




