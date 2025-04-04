// Sistema completo de login com validação e persistência

document.addEventListener('DOMContentLoaded', function() {
    // Verificar se o usuário já está logado
    verificarLoginExistente();
    
    // Elementos do DOM
    const formularioLogin = document.getElementById('formulario-login');
    const campoEmail = document.getElementById('email');
    const campoSenha = document.getElementById('senha');
    const erroEmail = document.getElementById('erro-email');
    const erroSenha = document.getElementById('erro-senha');
    const botaoLogin = document.getElementById('botao-login');
    const mensagemSistema = document.getElementById('mensagem-sistema');
    const checkboxLembrar = document.getElementById('lembrar');
    
    // Configurar validação em tempo real para o campo de email
    campoEmail.addEventListener('input', function() {
        validarCampoEmail();
    });
    
    // Configuração da validação ao sair do campo (blur)
    campoEmail.addEventListener('blur', function() {
        validarCampoEmail(true);
    });
    
    // Configurar validação para o campo de senha
    campoSenha.addEventListener('input', function() {
        validarCampoSenha();
    });
    
    campoSenha.addEventListener('blur', function() {
        validarCampoSenha(true);
    });
    
    // Configurar botão mostrar/ocultar senha
    const botaoMostrarSenha = document.querySelector('.botao-mostrar-senha');
    
    if (botaoMostrarSenha && campoSenha) {
        // Inicializar com ícone de olho fechado
        botaoMostrarSenha.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icone-olho-fechado">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
            </svg>
        `;
        
        botaoMostrarSenha.addEventListener('click', function() {
            alternarVisibilidadeSenha();
        });
    }
    
    // Processar submissão do formulário
    formularioLogin.addEventListener('submit', function(evento) {
        evento.preventDefault();
        
        // Validar todos os campos antes de enviar
        const emailValido = validarCampoEmail(true);
        const senhaValida = validarCampoSenha(true);
        
        if (emailValido && senhaValida) {
            realizarLogin();
        }
    });
    
    // Funções de validação
    
    function validarCampoEmail(exibirErro = false) {
        const email = campoEmail.value.trim();
        let valido = true;
        let mensagem = '';
        
        // Verificar se está vazio
        if (email === '') {
            valido = false;
            mensagem = 'O e-mail é obrigatório';
        } 
        // Verificar se é um formato de e-mail válido
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            valido = false;
            mensagem = 'Digite um e-mail válido';
        }
        
        // Aplicar classes e exibir mensagem se necessário
        if (!valido && exibirErro) {
            campoEmail.classList.add('campo-invalido');
            campoEmail.classList.remove('campo-valido');
            erroEmail.textContent = mensagem;
        } else if (valido) {
            campoEmail.classList.remove('campo-invalido');
            if (email !== '') {
                campoEmail.classList.add('campo-valido');
            } else {
                campoEmail.classList.remove('campo-valido');
            }
            erroEmail.textContent = '';
        }
        
        return valido;
    }
    
    function validarCampoSenha(exibirErro = false) {
        const senha = campoSenha.value;
        let valido = true;
        let mensagem = '';
        
        // Verificar se está vazio
        if (senha === '') {
            valido = false;
            mensagem = 'A senha é obrigatória';
        } 
        // Verificar se atende ao tamanho mínimo
        else if (senha.length < 6) {
            valido = false;
            mensagem = 'A senha deve ter pelo menos 6 caracteres';
        }
        
        // Aplicar classes e exibir mensagem se necessário
        if (!valido && exibirErro) {
            campoSenha.classList.add('campo-invalido');
            campoSenha.classList.remove('campo-valido');
            erroSenha.textContent = mensagem;
        } else if (valido) {
            campoSenha.classList.remove('campo-invalido');
            if (senha !== '') {
                campoSenha.classList.add('campo-valido');
            } else {
                campoSenha.classList.remove('campo-valido');
            }
            erroSenha.textContent = '';
        }
        
        return valido;
    }
    
    function alternarVisibilidadeSenha() {
        if (campoSenha.type === 'password') {
            campoSenha.type = 'text';
            botaoMostrarSenha.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icone-olho-aberto">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>
            `;
        } else {
            campoSenha.type = 'password';
            botaoMostrarSenha.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icone-olho-fechado">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
            `;
        }
    }
    
    // Exibir mensagem do sistema (sucesso, erro, info)
    function mostrarMensagemSistema(mensagem, tipo = 'info') {
        mensagemSistema.textContent = mensagem;
        mensagemSistema.className = 'mensagem-sistema';
        mensagemSistema.classList.add(tipo);
        mensagemSistema.classList.remove('escondido');
        
        // Rolar para a mensagem se necessário
        mensagemSistema.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    // Esconder mensagem do sistema
    function esconderMensagemSistema() {
        mensagemSistema.classList.add('escondido');
    }
    
    // Função para realizar o login
    function realizarLogin() {
        const email = campoEmail.value.trim();
        const senha = campoSenha.value;
        const lembrar = checkboxLembrar.checked;
        
        // Mostrar estado de carregamento
        botaoLogin.classList.add('carregando');
        esconderMensagemSistema();
        
        // Simulação de chamada para API (pode ser substituída por uma chamada real)
        setTimeout(function() {
            // Aqui simulamos uma autenticação fake
            // Em um sistema real, isso seria uma chamada para o backend
            const usuarioAutenticado = autenticarUsuario(email, senha);
            
            botaoLogin.classList.remove('carregando');
            
            if (usuarioAutenticado) {
                // Login bem-sucedido
                mostrarMensagemSistema('Login realizado com sucesso! Redirecionando...', 'sucesso');
                
                // Salvar sessão se a opção "lembrar" estiver marcada
                if (lembrar) {
                    salvarSessao(usuarioAutenticado);
                } else {
                    // Salvar apenas na sessão atual (sem persistência)
                    sessionStorage.setItem('usuarioLogado', JSON.stringify(usuarioAutenticado));
                }
                
                // Redirecionar após um pequeno delay
                setTimeout(function() {
                    window.location.href = '/index.html';
                }, 1500);
            } else {
                // Login falhou
                mostrarMensagemSistema('E-mail ou senha incorretos. Tente novamente.', 'erro');
                // Limpar o campo de senha para nova tentativa
                campoSenha.value = '';
                campoSenha.classList.remove('campo-valido');
                // Focar no campo de senha para facilitar nova tentativa
                campoSenha.focus();
            }
        }, 1500); // Simular delay de rede
    }
    
    // Verificar se há um login salvo
    function verificarLoginExistente() {
        const token = obterToken();
        
        if (token) {
            // Verificar se o token ainda é válido
            if (validarToken(token)) {
                // Redirecionar para a página dashboard
                window.location.href = '/index.html';
            } else {
                // Token expirado, limpar dados
                limparSessao();
            }
        }
    }
    
    // Funções para gerenciar cookies e sessão
    
    function salvarSessao(usuario) {
        // Criar um token simples com data de expiração (7 dias)
        const agora = new Date();
        const expiracao = new Date(agora.getTime() + 3 * 24 * 60 * 60 * 1000); // 3 dias    
        
        const tokenUsuario = {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            exp: expiracao.getTime()
        };
        // Salvar token no localStorage
        localStorage.setItem('authToken', JSON.stringify(tokenUsuario));
        
        // Salvar dados do usuário na sessão
        sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario));
    }
    
    function obterToken() {
        const tokenString = localStorage.getItem('authToken');
        return tokenString ? JSON.parse(tokenString) : null;
    }
    
    function obterUsuarioLogado() {
        const usuarioString = sessionStorage.getItem('usuarioLogado');
        return usuarioString ? JSON.parse(usuarioString) : null;
    }
    
    function validarToken(token) {
        // Verificar se o token ainda não expirou
        const agora = new Date().getTime();
        return token.exp > agora;
    }
    
    function limparSessao() {
        localStorage.removeItem('authToken');
        sessionStorage.removeItem('usuarioLogado');
    }
    
    // Simulação de banco de dados de usuários
    // Em um sistema real, isso estaria no backend
    function autenticarUsuario(email, senha) {
        // Lista de usuários simulada
        const usuarios = [
            {
                id: 1,
                nome: 'João Silva',
                email: 'joao@exemplo.com',
                senha: '123456'
            },
            {
                id: 2,
                nome: 'Maria Souza',
                email: 'maria@exemplo.com',
                senha: 'senha123'
            },
            {
                id: 3,
                nome: 'Admin',
                email: 'admin@site.com',
                senha: 'admin123'
            }
        ];
        
        // Procurar usuário com email e senha correspondentes
        const usuarioEncontrado = usuarios.find(u => 
            u.email === email && u.senha === senha
        );
        
        if (usuarioEncontrado) {
            // Retornar o usuário sem a senha
            const { senha, ...usuarioSemSenha } = usuarioEncontrado;
            return usuarioSemSenha;
        }
        
        return null;
    }
});