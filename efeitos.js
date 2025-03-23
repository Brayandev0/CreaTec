
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




//    T E L A   D E   S O L U Ç Õ E S 

// Service details data
const serviceDetails = {
    'Website Creation': {
      title: 'Professional Website Creation',
      description: 'Our website creation service delivers custom-designed, responsive websites that perfectly match your brand and business goals. We focus on user experience, modern design principles, and optimal performance. Our process includes detailed planning, design mockups, development, testing, and deployment. We use the latest technologies and best practices to ensure your website is fast, secure, and easy to maintain.'
    },
    'Professional Email': {
      title: 'Business Email Solutions',
      description: 'Get a professional email setup with your domain name to enhance your business credibility. Our email solutions include custom domain configuration, spam protection, email forwarding, and integration with popular email clients. We ensure reliable delivery, security, and professional appearance for all your business communications.'
    },
    'SEO': {
      title: 'Search Engine Optimization',
      description: 'Our comprehensive SEO services help improve your website\'s visibility in search engine results. We perform detailed keyword research, optimize on-page elements, improve technical SEO aspects, and create quality content strategies. Our approach includes regular monitoring and adjustments to maintain and improve your rankings.'
    },
    'Software Development': {
      title: 'Custom Software Solutions',
      description: 'We create tailored software solutions to address your specific business challenges. Our development process includes requirement analysis, architecture design, development, testing, and deployment. We use modern technologies and methodologies to deliver scalable, secure, and efficient software solutions.'
    },
    'Marketing Management': {
      title: 'Strategic Marketing Solutions',
      description: 'Our marketing management services help you reach and engage your target audience effectively. We develop comprehensive marketing strategies, manage campaigns, analyze performance, and optimize results. Services include social media management, content marketing, email campaigns, and advertising management.'
    },
    'Process Automation': {
      title: 'Business Process Automation',
      description: 'Streamline your operations with our intelligent automation solutions. We identify processes that can be automated, implement appropriate tools and workflows, and ensure smooth integration with your existing systems. This results in increased efficiency, reduced errors, and improved productivity.'
    },
    'App Development': {
      title: 'Mobile App Development',
      description: 'We develop high-quality mobile applications for both iOS and Android platforms. Our app development process includes UI/UX design, native or cross-platform development, testing, and deployment. We ensure your app is user-friendly, performant, and aligned with your business objectives.'
    },
    'UI/UX and Logo Design': {
      title: 'Creative Design Services',
      description: 'Our design team creates engaging user interfaces and memorable brand identities. Services include UI/UX design for digital products, logo design, brand guidelines, and visual identity development. We focus on creating designs that are both aesthetically pleasing and functionally effective.'
    }
  };
  
  // Add hover effects and click handlers for service cards
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
    
    card.addEventListener('click', () => {
      const title = card.querySelector('h3').textContent;
      showModal(title);
    });
  });
  
  // Remove default text selection from arrows
  document.querySelectorAll('.arrow').forEach(arrow => {
    arrow.style.userSelect = 'none';
  });
  
  // Update modal functionality
  function showModal(serviceTitle) {
    const details = serviceDetails[serviceTitle];
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    modal.innerHTML = `
      <div class="modal-content">
        <h2>${details.title}</h2>
        <p>${details.description}</p>
        <button class="modal-back">←</button>
      </div>
    `;
    
    const services = document.querySelector('.services');
    services.classList.add('fade-out');
    
    document.body.appendChild(modal);
    
    // Trigger animations
    setTimeout(() => {
      modal.classList.add('active');
    }, 300);
    
    // Back button functionality
    modal.querySelector('.modal-back').addEventListener('click', () => {
      modal.classList.remove('active');
      services.classList.remove('fade-out');
      setTimeout(() => modal.remove(), 300);
    });
    
    // Click outside to close
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        services.classList.remove('fade-out');
        setTimeout(() => modal.remove(), 300);
      }
    });
  }