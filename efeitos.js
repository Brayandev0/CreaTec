
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



// F U N Ç Ã O   Q U E  E X I B E  O  H E A D E R   M O B I L E

function toggleMenu() {
    // Variáveis para o ícone do menu, o desfoque e o header
    const menuIcon = document.getElementById('menu-mobile'); // Ícone do menu
    const menuHeader = document.querySelector('.header-mobile'); // Cabeçalho móvel
    const backgroundBlur = document.getElementById('desfoque-de-fundo-mobile'); // Desfoque de fundo

    // Alterna a classe 'active' no ícone de menu
    menuIcon.classList.toggle('active');

    // Verifica se a classe 'active' foi adicionada
    if (menuIcon.classList.contains('active')) {
        menuHeader.style.display = 'flex';  // Torna o menu visível
        backgroundBlur.style.display = 'block';  // Torna o desfoque visível
    } else {
        menuHeader.style.display = 'none';  // Esconde o menu
        backgroundBlur.style.display = 'none';  // Esconde o desfoque
    }
}





// F O R M U L Á R I O   D A  P Á G I N A  D E  C O N T A T O

function enviarOrcamento() {
    // Limpa as mensagens de erro antes de validar novamente
    limparErros();

    // Obtendo os valores dos campos e removendo espaços extras
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.replace(/\s/g, ""); // Remove espaços
    let mensagem = document.getElementById("mensagem").value.trim();
    const popupDeEnviado = document.querySelectorAll('.erro-container')

    let formularioValido = true; // Flag para saber se há erros

    // Validação do nome (entre 3 e 50 caracteres e sem números)
    if (nome.length < 3 || nome.length > 50 || /\d/.test(nome)) {
        mostrarErro("nome", "O nome deve ter entre 3 e 50 caracteres e não pode conter números.");
        formularioValido = false;
    }

    // Validação do email (precisa conter @ e um domínio válido)
    if (!email.includes("@") || !email.includes(".")) {
        mostrarErro("email", "Insira um e-mail válido.");
        formularioValido = false;
    }

    // Validação do telefone (entre 9 e 15 números e sem letras)
    if (telefone.length < 9 || telefone.length > 15 || /\D/.test(telefone)) {
        mostrarErro("telefone", "O telefone deve conter apenas números e ter entre 9 e 15 dígitos.");
        formularioValido = false;
    }

    // Validação da mensagem (mínimo 3 caracteres, máximo 155)
    if (mensagem.length < 3 || mensagem.length > 155) {
        mostrarErro("mensagem", "A mensagem deve ter entre 3 e 155 caracteres.");
        formularioValido = false;
    }

    // Se houver erro, não enviar o formulário
    if (!formularioValido) return;
    let dados = {
        "key":"5938237AB",
        "email":email,
        "nome":nome,
        "texto":mensagem,
        "telefone":telefone}
    // Se tudo estiver certo, envia os dados
    popupDeEnviado[0].style.display = 'block';
    fetch("https://chefnow.shop/",{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(dados),
        }).then(resposta => resposta.text()).then(text => confirm(text))
    alert("chegou aq")

    
}




// Função para exibir a mensagem de sucesso e limpar os textos dos campos
function esconderPopup() {
    const popupDeEnviado = document.querySelector('.erro-container');  // Seleciona o popup

    // Limpar os inputs do formulário
    const inputs = document.querySelectorAll('input, textarea');  // Seleciona todos os inputs e textareas no formulário
    inputs.forEach(input => {
        input.value = '';  // Limpa o valor de cada input
    });

    // Esconder o popup
    popupDeEnviado.style.display = 'none';  // Esconde o popup
}

// função para exibir as mensagens de erro
function mostrarErro(campoId, mensagem) {
    let campo = document.getElementById(campoId);
    let containerErro = campo.parentElement.querySelector(".error-message");

    // Se já existe uma mensagem de erro, não cria outra
    if (!containerErro) {
        containerErro = document.createElement("div");
        containerErro.className = "error-message"; 
        containerErro.style.color = "red"; 
        containerErro.style.fontSize = "14px";
        containerErro.style.marginTop = "5px";
        campo.parentElement.appendChild(containerErro);
    }

    // Adiciona a mensagem de erro
    containerErro.textContent = mensagem;
}


// Função para limpar todas as mensagens de erro antes de validar novamente
function limparErros() {
    let mensagensErro = document.querySelectorAll(".error-message");
    mensagensErro.forEach((msg) => msg.remove());
}
