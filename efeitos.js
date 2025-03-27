
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
// Dados dos detalhes dos serviços
const serviceDetails = {
    'Criação de Websites': {
      title: 'Criação de Websites Profissionais',
      description: 'Nosso serviço de criação de sites oferece designs personalizados e responsivos que se alinham perfeitamente com sua marca e objetivos de negócio. Nos concentramos na experiência do usuário, princípios de design modernos e desempenho ideal. Nosso processo inclui planejamento detalhado, protótipos de design, desenvolvimento, testes e implantação. Utilizamos as tecnologias mais recentes e melhores práticas para garantir que seu site seja rápido, seguro e fácil de manter.'
    },
    'E-mail Profissional': {
      title: 'Soluções de E-mail Corporativo',
      description: 'Tenha um e-mail profissional com seu domínio para aumentar a credibilidade do seu negócio. Nossas soluções de e-mail incluem configuração de domínio personalizado, proteção contra spam, encaminhamento de e-mails e integração com clientes de e-mail populares. Garantimos entrega confiável, segurança e aparência profissional para todas as suas comunicações comerciais.'
    },
    'SEO': {
      title: 'Otimização para Mecanismos de Busca',
      description: 'Nossos serviços abrangentes de SEO ajudam a melhorar a visibilidade do seu site nos resultados de pesquisa. Realizamos pesquisa detalhada de palavras-chave, otimizamos elementos on-page, melhoramos aspectos técnicos de SEO e criamos estratégias de conteúdo de qualidade. Nossa abordagem inclui monitoramento regular e ajustes para manter e melhorar seu posicionamento.'
    },
    'Desenvolvimento de Software': {
      title: 'Soluções de Software Personalizadas',
      description: 'Criamos soluções de software sob medida para resolver os desafios específicos do seu negócio. Nosso processo de desenvolvimento inclui análise de requisitos, design de arquitetura, desenvolvimento, testes e implantação. Utilizamos tecnologias modernas e metodologias ágeis para entregar soluções escaláveis, seguras e eficientes.'
    },
    'Gestão de Marketing': {
      title: 'Soluções Estratégicas de Marketing',
      description: 'Nossos serviços de gestão de marketing ajudam você a alcançar e engajar seu público-alvo de forma eficaz. Desenvolvemos estratégias de marketing abrangentes, gerenciamos campanhas, analisamos desempenho e otimizamos resultados. Nossos serviços incluem gestão de mídias sociais, marketing de conteúdo, campanhas de e-mail e gestão de publicidade.'
    },
    'Automação de Processos': {
      title: 'Automação de Processos Empresariais',
      description: 'Simplifique suas operações com nossas soluções inteligentes de automação. Identificamos processos que podem ser automatizados, implementamos as ferramentas e fluxos de trabalho adequados e garantimos integração perfeita com seus sistemas existentes. Isso resulta em maior eficiência, redução de erros e melhoria na produtividade.'
    },
    'Desenvolvimento de Apps': {
      title: 'Desenvolvimento de Aplicativos Móveis',
      description: 'Desenvolvemos aplicativos móveis de alta qualidade para as plataformas iOS e Android. Nosso processo de desenvolvimento inclui design UI/UX, desenvolvimento nativo ou multiplataforma, testes e implantação. Garantimos que seu aplicativo seja intuitivo, performático e alinhado com seus objetivos de negócio.'
    },
    'Design UI/UX e Logotipos': {
      title: 'Serviços Criativos de Design',
      description: 'Nossa equipe de design cria interfaces de usuário envolventes e identidades visuais memoráveis. Nossos serviços incluem design UI/UX para produtos digitais, criação de logotipos, diretrizes de marca e desenvolvimento de identidade visual. Nos concentramos em criar designs que sejam tanto esteticamente agradáveis quanto funcionalmente eficazes.'
    }
};

// Adiciona eventos após o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Efeitos hover e cliques para os cards de serviço
    document.querySelectorAll('.service-card').forEach(card => {
        // Efeito hover
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
        
        // Clique para abrir modal
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            showModal(title);
        });
    });
});

// Função para mostrar o modal
let currentModal = null;

function showModal(serviceTitle) {
    // Fecha o modal atual se existir
    if (currentModal) {
        closeModal(currentModal);
    }

    const details = serviceDetails[serviceTitle];
    if (!details) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    modal.innerHTML = `
    <header>
    <nav class="navbar">  <!-- H E A D E R  P A R A  T E L A S  G R A N D E S-->
        <div class="logo">
            <img src="/arts/logo (2).png" alt="Createc Logo" class="nav-logo" onclick="window.location.href='index.html'">
            <div class="menu-btn" onclick="toggleMenu()" id="menu-mobile">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        </div>
        <div class="nav-buttons" id="header-buttons">
            <button class="nav-btn" id="btn-iniciar"  onclick="window.location.href='index.html'">Início</button>
            <button class="nav-btn" id="btn-quem-somos"  onclick="window.location.href='sobre-nos.html'">Sobre Nós</button>
            <button class="nav-btn" id="btn-solucoes"  onclick="window.location.href='solucoes.html'">Soluções</button>
            <button class="nav-btn" id="btn-servicos"  onclick="window.location.href='servicos.html'">Serviços</button>
            <button class="nav-btn" id="btn-desenvolvedores"  onclick="window.location.href='equipe.html'">Equipe</button>
            <button class="nav-btn" id="btn-solucoes"  onclick="window.location.href='faq.html'">FAQ</button>
            <button class="nav-btn" id="btn-suporte" onclick="window.location.href='https://createc.com.br/atendimento'">Suporte</button>
            <button class="nav-btn" id="btn-contato"  onclick="window.location.href='contato.html'">Contato</button>
        </div>
        <div style="width: 20%; background: transparent;"></div>
    </nav>
    <div class="desfoque" id="desfoque-de-fundo-mobile" onclick="toggleMenu()"></div> <!-- Div que desfoca o fundo quando o header -mobile aparece-->
    <nav class="header-mobile" id="header-mobile">  <!-- Div que contem o header mobile-->
        <img class="mobile-logo" src="arts/logo (2).png"> <!-- Logo que parece na parte de cima-->
        <div class="mobile-buttons">  <!-- container dos botões do header-mobile-->
            <button class="mobile-button" onclick="window.location.href='index.html'"> <!-- botao do header mobile-->
                <img src="arts/mobile-button-home.png" class="mobile-button-icone">
                <p> Inicío</p>
            </button>
            <button class="mobile-button" onclick="window.location.href='sobre-nos.html'">
                <img src="arts/mobile-button-sobre.png" class="mobile-button-icone">
                <p> Sobre nós </p>
            </button>
            <button class="mobile-button" onclick="window.location.href='solucoes.html'">
                <img src="arts/mobile-button-solucoes.png" class="mobile-button-icone">
                <p> Soluções</p>
            </button>
            <button class="mobile-button" onclick="window.location.href='servicos.html'">
                <img src="arts/mobile-button-servicos.png" class="mobile-button-icone">
                <p> Serviços </p>
            </button>
            <button class="mobile-button" onclick="window.location.href='equipe.html'">
                <img src="arts/mobile-button-equipe.png" class="mobile-button-icone">
                <p> Equipe</p>
            </button>
            <button class="mobile-button" onclick="window.location.href='faq.html'">
                <img src="arts/mobile-button-faq.png" class="mobile-button-icone">
                <p> FAQ</p>
            </button>
            <button class="mobile-button" onclick="window.location.href='https://createc.com.br/atendimento'">
                <img src="arts/mobile-button-suporte.png" class="mobile-button-icone">
                <p> Suporte</p>
            </button>
            <button class="mobile-button"   onclick="window.location.href='contato.html'">
                <img src="arts/mobile-button-contato.png" class="mobile-button-icone">
                <p> Contato</p>
            </button>
        </div>
        <div class="mobile-social-icons">
            <a href="#" class="social-icon" id="facebook-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="var(--primary-color)">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
            </a>
            <a href="https://www.instagram.com/createc.com.br " class="social-icon" id="instagram-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="var(--primary-color)">
                    <path d="M12 2c-2.714 0-3.056.012-4.123.06-1.064.049-1.791.218-2.427.465a4.901 4.901 0 0 0-1.772 1.153 4.9 4.9 0 0 0-1.153 1.772c-.247.636-.416 1.363-.465 2.427C2.012 8.944 2 9.286 2 12s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.9 4.9 0 0 0 1.153 1.772 4.901 4.901 0 0 0 1.772 1.153c.636.247 1.363.416 2.427.465 1.067.048 1.409.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.901 4.901 0 0 0 1.772-1.153 4.9 4.9 0 0 0 1.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.409.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.9 4.9 0 0 0-1.153-1.772 4.901 4.901 0 0 0-1.772-1.153c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.714 2 12 2zm0 1.8c2.667 0 2.986.01 4.041.058.976.045 1.505.208 1.858.345.467.182.8.4 1.15.75.35.35.568.683.75 1.15.137.353.3.882.345 1.858.048 1.055.058 1.374.058 4.041 0 2.667-.01 2.986-.058 4.041-.045.976-.208 1.505-.345 1.858a3.09 3.09 0 0 1-.75 1.15 3.09 3.09 0 0 1-1.15.75c-.353.137-.882.3-1.858.345-1.055.048-1.374.058-4.041.058-2.667 0-2.986-.01-4.041-.058-.976-.045-1.505-.208-1.858-.345a3.09 3.09 0 0 1-1.15-.75 3.09 3.09 0 0 1-.75-1.15c-.137-.353-.3-.882-.345-1.858-.048-1.055-.058-1.374-.058-4.041 0-2.667.01-2.986.058-4.041.045-.976.208-1.505.345-1.858.182-.467.4-.8.75-1.15a3.09 3.09 0 0 1 1.15-.75c.353-.137.882-.3 1.858-.345 1.055-.048 1.374-.058 4.041-.058zm0 3.065a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27zm0 8.47a3.335 3.335 0 1 1 0-6.67 3.335 3.335 0 0 1 0 6.67zm6.538-8.67a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"/>
                </svg>
            </a>
            <a href="#" class="social-icon" id="youtube-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="var(--primary-color)">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.246 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/>
                </svg>
            </a>
            <a href="#" class="social-icon" id="linkedin-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 26 26" fill="var(--primary-color)">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
            </a>
            <a href="https://x.com/CreatecB75879?t=_b2wIyhRzxwehRZRXig29w&s=08 " class="social-icon" id="twitter-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="var(--primary-color)">
                    <path d="M23.643 4.937a9.72 9.72 0 0 1-2.828.775 4.935 4.935 0 0 0 2.165-2.723 9.864 9.864 0 0 1-3.127 1.195 4.92 4.92 0 0 0-8.384 4.482A13.963 13.963 0 0 1 1.671 3.15a4.916 4.916 0 0 0 1.523 6.573 4.902 4.902 0 0 1-2.228-.616v.061a4.92 4.92 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.224.084 4.927 4.927 0 0 0 4.598 3.417A9.876 9.876 0 0 1 0 19.54a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.01-7.502 14.01-14.01 0-.213-.005-.426-.014-.637a9.935 9.935 0 0 0 2.439-2.532z"/>
                </svg>
            </a>                
            <a href="#" class="social-icon" id="github-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="var(--primary-color)">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            </a>
            <a href="#" class="social-icon" id="whatsapp-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="var(--primary-color)">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
            </a>
        </div>
        <p>&copy; Createc 2025. Todos os direitos reservados</p>
    </nav>  
  </header>
        <div class="modal-content">
            <button class="modal-close" aria-label="Fechar">×</button>
            <h2>${details.title}</h2>
            <p>${details.description}</p>
        </div>
         <footer>
      <div class="footer-terms">
          <button class="terms-toggle" aria-expanded="false" aria-controls="terms-dropdown">
              Termos e Políticas
              <svg class="toggle-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
          </button>
          <div id="terms-dropdown" class="terms-dropdown">
              <a href="/Politicas-de-Privacidade/index.html" class="footer-link">Termos de Serviço</a>
              <a href="/Politicas-de-Privacidade/privacy-policy.html" class="footer-link">Política de Privacidade</a>
              <a id="cookieBtn" class="footer-link">Configuração de Cookies</a>
          </div>
      </div>
      <p class="copyright">&copy; Createc 2025. Todos os direitos reservados</p>
      <div class="social-icons">  
          <a href="https://www.facebook.com/profile.php?id=61574403354143" class="social-icon" id="facebook-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="var(--primary-color)">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
          </a>
          <a href="https://www.instagram.com/createc.com.br" class="social-icon" id="instagram-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="var(--primary-color)">
                  <path d="M12 2c-2.714 0-3.056.012-4.123.06-1.064.049-1.791.218-2.427.465a4.901 4.901 0 0 0-1.772 1.153 4.9 4.9 0 0 0-1.153 1.772c-.247.636-.416 1.363-.465 2.427C2.012 8.944 2 9.286 2 12s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.9 4.9 0 0 0 1.153 1.772 4.901 4.901 0 0 0 1.772 1.153c.636.247 1.363.416 2.427.465 1.067.048 1.409.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.901 4.901 0 0 0 1.772-1.153 4.9 4.9 0 0 0 1.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.409.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.9 4.9 0 0 0-1.153-1.772 4.901 4.901 0 0 0-1.772-1.153c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.714 2 12 2zm0 1.8c2.667 0 2.986.01 4.041.058.976.045 1.505.208 1.858.345.467.182.8.4 1.15.75.35.35.568.683.75 1.15.137.353.3.882.345 1.858.048 1.055.058 1.374.058 4.041 0 2.667-.01 2.986-.058 4.041-.045.976-.208 1.505-.345 1.858a3.09 3.09 0 0 1-.75 1.15 3.09 3.09 0 0 1-1.15.75c-.353.137-.882.3-1.858.345-1.055.048-1.374.058-4.041.058-2.667 0-2.986-.01-4.041-.058-.976-.045-1.505-.208-1.858-.345a3.09 3.09 0 0 1-1.15-.75 3.09 3.09 0 0 1-.75-1.15c-.137-.353-.3-.882-.345-1.858-.048-1.055-.058-1.374-.058-4.041 0-2.667.01-2.986.058-4.041.045-.976.208-1.505.345-1.858.182-.467.4-.8.75-1.15a3.09 3.09 0 0 1 1.15-.75c.353-.137.882-.3 1.858-.345 1.055-.048 1.374-.058 4.041-.058zm0 3.065a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27zm0 8.47a3.335 3.335 0 1 1 0-6.67 3.335 3.335 0 0 1 0 6.67zm6.538-8.67a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"/>
              </svg>
          </a>
          <a href=" https://www.youtube.com/channel/UCi7oVwfmS6tShPmKbQ6CrJg" class="social-icon" id="youtube-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" fill="var(--primary-color)">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.246 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/>
              </svg>
          </a>
          <a href="https://www.linkedin.com/groups/10078001" class="social-icon" id="linkedin-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="var(--primary-color)">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
          </a>
          <a href="https://x.com/CreatecB75879?t=_b2wIyhRzxwehRZRXig29w&s=08" class="social-icon" id="twitter-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="var(--primary-color)">
                  <path d="M23.643 4.937a9.72 9.72 0 0 1-2.828.775 4.935 4.935 0 0 0 2.165-2.723 9.864 9.864 0 0 1-3.127 1.195 4.92 4.92 0 0 0-8.384 4.482A13.963 13.963 0 0 1 1.671 3.15a4.916 4.916 0 0 0 1.523 6.573 4.902 4.902 0 0 1-2.228-.616v.061a4.92 4.92 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.224.084 4.927 4.927 0 0 0 4.598 3.417A9.876 9.876 0 0 1 0 19.54a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.01-7.502 14.01-14.01 0-.213-.005-.426-.014-.637a9.935 9.935 0 0 0 2.439-2.532z"/>
              </svg>
          </a>                
          <a href="https://api.whatsapp.com/send?phone=5534984180453&text=Ol%C3%A1%2C+eu+gostaria+de+solicitar+um+or%C3%A7amento" class="social-icon" id="whatsapp-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="var(--primary-color)">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
          </a>
      </div> 
  </footer>
    `;
    
    document.body.appendChild(modal);
    currentModal = modal;
    
    // Forçar reflow para ativar a animação
    void modal.offsetWidth;
    
    modal.classList.add('active');
    
    // Botão de fechar
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeModal(modal);
    });
    
    // Fechar ao clicar fora
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
}

function closeModal(modal) {
    if (!modal) return;
    
    modal.classList.remove('active');
    
    // Remover após a animação
    setTimeout(() => {
        if (modal && modal.parentNode) {
            modal.parentNode.removeChild(modal);
        }
        if (modal === currentModal) {
            currentModal = null;
        }
    }, 300); // Tempo deve corresponder à duração da transição
}


  // F U N Ç Ã O  D O  F O O T E R  P A R A   M O S T R A R  O S  L I N K S  D E  P O L I T I C A S


  // Adicione este script para controlar o dropdown de termos
  document.addEventListener('DOMContentLoaded', function() {
    const termsToggle = document.querySelector('.terms-toggle');
    const termsDropdown = document.querySelector('.terms-dropdown');
    
    if (termsToggle && termsDropdown) {
        termsToggle.addEventListener('click', function(e) {
            e.stopPropagation(); // Impede que o evento chegue ao document
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            termsDropdown.classList.toggle('show');
        });
    }
    
    // Fechar o dropdown quando clicar fora
    document.addEventListener('click', function() {
        if (termsDropdown && termsDropdown.classList.contains('show')) {
            termsToggle.setAttribute('aria-expanded', 'false');
            termsDropdown.classList.remove('show');
        }
    });
});



// Função para criar dinamicamente o modal de cookies e adicioná-lo ao body
function createCookieModal() {
  // Criar o container principal do modal
  const cookieModal = document.createElement('div');
  cookieModal.id = 'cookieModal';
  cookieModal.className = 'cookie-modal';
  
  // Definir o conteúdo HTML para o modal
  cookieModal.innerHTML = `
        
      <div class="cookie-modal-content">
          <div class="cookie-modal-header">
              <h2>Configurações de Cookies</h2>
              <span class="close-button">&times;</span>
          </div>
          <div class="cookie-modal-body">
              <p>Utilizamos cookies para melhorar sua experiência em nosso site. Selecione quais tipos de cookies você aceita:</p>
              
              <div class="cookie-option">
                  <input type="checkbox" id="necessarios" checked disabled>
                  <label for="necessarios">Cookies Necessários</label>
                  <p class="cookie-description">Essenciais para o funcionamento básico do site. Não podem ser desativados.</p>
              </div>
              
              <div class="cookie-option">
                  <input type="checkbox" id="estatisticas">
                  <label for="estatisticas">Cookies de Estatísticas</label>
                  <p class="cookie-description">Ajudam a entender como os visitantes interagem com o site, melhorando seu desempenho.</p>
              </div>
          </div>
          <div class="cookie-modal-footer">
              <button id="acceptSelected" class="cookie-save-button">Salvar Preferências</button>
              <button id="acceptAll" class="cookie-accept-all-button">Aceitar Todos</button>
          </div>
      </div>
  `;
  
  // Adicionar o modal ao body do documento
  document.body.appendChild(cookieModal);
  
  // Obter referências para elementos interativos dentro do modal
  const closeButton = cookieModal.querySelector('.close-button');
  const acceptSelectedBtn = document.getElementById('acceptSelected');
  const acceptAllBtn = document.getElementById('acceptAll');
  
  // Adicionar evento de clique para o botão de fechar
  closeButton.addEventListener('click', () => {
      // Animação de desaparecimento antes de esconder
      cookieModal.style.opacity = '0';
      setTimeout(() => {
          cookieModal.style.display = 'none';
          cookieModal.style.opacity = '1'; // Resetar opacidade para próxima abertura
      }, 300);
  });

  // Adicionar evento para fechar o modal quando clicar fora do conteúdo
  window.addEventListener('click', (e) => {
      if (e.target === cookieModal) {
          cookieModal.style.display = 'none';
      }
  });

  // Adicionar evento para o botão "Salvar Preferências"
  acceptSelectedBtn.addEventListener('click', () => {
      saveCookiePreferences();
      cookieModal.style.display = 'none';
  });

  // Adicionar evento para o botão "Aceitar Todos"
  acceptAllBtn.addEventListener('click', () => {
      // Marcar todas as checkboxes exceto as desativadas
      document.querySelectorAll('.cookie-option input[type="checkbox"]').forEach(checkbox => {
          if (!checkbox.disabled) {
              checkbox.checked = true;
          }
      });
      saveCookiePreferences();
      cookieModal.style.display = 'none';
  });

  // Retornar o elemento de modal criado
  return cookieModal;
}

// Função para salvar as preferências atuais de cookies no localStorage
function saveCookiePreferences() {
  // Criar um objeto para armazenar as preferências
  const preferences = {
      necessarios: true, // Sempre obrigatório
      preferencias: document.getElementById('preferencias').checked,
      estatisticas: document.getElementById('estatisticas').checked,
      marketing: document.getElementById('marketing').checked
  };
  
  // Salvar preferências no localStorage como string JSON
  localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
  
  // Registrar preferências salvas para depuração
  console.log('Preferências de cookies salvas:', preferences);
}

// Função para carregar preferências previamente salvas do localStorage
function loadSavedPreferences() {
  // Tentar obter preferências salvas do localStorage
  const savedPreferences = localStorage.getItem('cookiePreferences');
  
  // Se existirem preferências, aplicá-las às checkboxes
  if (savedPreferences) {
      const preferences = JSON.parse(savedPreferences);
      
      // Definir checkboxes de acordo com as preferências salvas
      document.getElementById('preferencias').checked = preferences.preferencias;
      document.getElementById('estatisticas').checked = preferences.estatisticas;
      document.getElementById('marketing').checked = preferences.marketing;
  }
}

// Função para verificar se precisamos mostrar o diálogo de consentimento de cookies
function checkCookieConsent() {
  // Removida a lógica para exibição automática do modal
  // O modal agora só aparece quando o botão é clicado
}

// Inicializar tudo quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', () => {
  // Criar o modal de cookies quando a página carregar
  const cookieModal = createCookieModal();
  
  // Obter referência para o botão de configurações de cookies
  const cookieBtn = document.getElementById('cookieBtn');
  
  // Adicionar evento de clique para mostrar as configurações de cookies
  cookieBtn.addEventListener('click', () => {
      cookieModal.style.display = 'flex';
  });
  
  // Carregar quaisquer preferências previamente salvas
  loadSavedPreferences();
  
  // A verificação automática para exibir o modal foi removida
  // O modal só será exibido ao clicar no botão
});



