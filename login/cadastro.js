// JavaScript completo para a página de cadastro
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário de cadastro
    const formularioCadastro = document.getElementById('formulario-cadastro');
    
    // Seleciona os campos de entrada
    const campoNome = document.getElementById('nome');
    const campoEmail = document.getElementById('email');
    const campoTelefone = document.getElementById('telefone');
    const campoSenha = document.getElementById('senha');
    
    // Adicionar elementos para mensagens de erro
    adicionarElementosErro();
    
    // Configurar validação em tempo real para todos os campos
    configurarValidacoes();
    
    // Configurar o botão de mostrar/ocultar senha
    const botaoMostrarSenha = document.querySelector('.botao-mostrar-senha');
    
    if (botaoMostrarSenha && campoSenha) {
        // Substituir o ícone existente por um que alterna entre olho aberto e fechado
        botaoMostrarSenha.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icone-olho-fechado">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
            </svg>
        `;
        
        botaoMostrarSenha.addEventListener('click', function() {
            alternarVisibilidadeSenha(campoSenha, botaoMostrarSenha);
        });
    }
    
    // Adiciona um listener para o evento de envio do formulário
    formularioCadastro.addEventListener('submit', function(evento) {
        // Previne o comportamento padrão do formulário (recarregar a página)
        evento.preventDefault();
        
        // Validar todos os campos
        const nomeValido = validarCampoNome(true);
        const emailValido = validarCampoEmail(true);
        const telefoneValido = validarCampoTelefone(true);
        const senhaValida = validarCampoSenha(true);
        
        // Só prosseguir se todos os campos forem válidos
        if (nomeValido && emailValido && telefoneValido && senhaValida) {
            // Mostra os dados no console (apenas para demonstração)
            console.log('Dados de cadastro:', {
                nome: campoNome.value,
                email: campoEmail.value,
                telefone: campoTelefone.value,
                senha: campoSenha.value
            });
            
            // Cadastrar usuário
            cadastrarUsuario();
        }
    });
    
    // Função para adicionar elementos de erro abaixo dos campos
    function adicionarElementosErro() {
        // Adicionar mensagem de erro para o campo nome se não existir
        if (!document.getElementById('erro-nome')) {
            const erroNome = document.createElement('div');
            erroNome.id = 'erro-nome';
            erroNome.className = 'mensagem-erro';
            campoNome.parentNode.appendChild(erroNome);
        }
        
        // Adicionar mensagem de erro para o campo email se não existir
        if (!document.getElementById('erro-email')) {
            const erroEmail = document.createElement('div');
            erroEmail.id = 'erro-email';
            erroEmail.className = 'mensagem-erro';
            campoEmail.parentNode.appendChild(erroEmail);
        }
        
        // Adicionar mensagem de erro para o campo telefone se não existir
        if (!document.getElementById('erro-telefone')) {
            const erroTelefone = document.createElement('div');
            erroTelefone.id = 'erro-telefone';
            erroTelefone.className = 'mensagem-erro';
            campoTelefone.parentNode.appendChild(erroTelefone);
        }
        
        // Adicionar mensagem de erro para o campo senha se não existir
        if (!document.getElementById('erro-senha')) {
            const erroSenha = document.createElement('div');
            erroSenha.id = 'erro-senha';
            erroSenha.className = 'mensagem-erro';
            campoSenha.parentNode.appendChild(erroSenha);
        }
        
        // Adicionar área para mensagem do sistema se não existir
        if (!document.getElementById('mensagem-sistema')) {
            const mensagemSistema = document.createElement('div');
            mensagemSistema.id = 'mensagem-sistema';
            mensagemSistema.className = 'mensagem-sistema escondido';
            // Inserir antes do formulário
            formularioCadastro.parentNode.insertBefore(mensagemSistema, formularioCadastro);
        }
    }
    
    // Configurar validações para todos os campos
    function configurarValidacoes() {
        // Validação para o campo nome
        campoNome.addEventListener('input', function() {
            validarCampoNome();
        });
        
        campoNome.addEventListener('blur', function() {
            validarCampoNome(true);
        });
        
        // Validação para o campo email
        campoEmail.addEventListener('input', function() {
            validarCampoEmail();
        });
        
        campoEmail.addEventListener('blur', function() {
            validarCampoEmail(true);
        });
        
        // Validação para o campo telefone
        campoTelefone.addEventListener('input', function() {
            formatarTelefone(this);
            validarCampoTelefone();
        });
        
        campoTelefone.addEventListener('blur', function() {
            validarCampoTelefone(true);
        });
        
        // Validação para o campo senha
        campoSenha.addEventListener('input', function() {
            validarCampoSenha();
        });
        
        campoSenha.addEventListener('blur', function() {
            validarCampoSenha(true);
        });
    }
    
    // Funções de validação para cada campo
    function validarCampoNome(exibirErro = false) {
        const nome = campoNome.value.trim();
        const erroNome = document.getElementById('erro-nome');
        let valido = true;
        let mensagem = '';
        
        // Verificar se está vazio
        if (nome === '') {
            valido = false;
            mensagem = 'O nome é obrigatório';
        } 
        // Verificar se tem pelo menos nome e sobrenome
        else if (nome.split(' ').filter(parte => parte.length > 0).length < 2) {
            valido = false;
            mensagem = 'Digite nome e sobrenome';
        }
        // Verificar se contém apenas letras e espaços
        else if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(nome)) {
            valido = false;
            mensagem = 'O nome deve conter apenas letras';
        }
        
        // Aplicar classes e exibir mensagem se necessário
        if (!valido && exibirErro) {
            campoNome.classList.add('campo-invalido');
            campoNome.classList.remove('campo-valido');
            erroNome.textContent = mensagem;
        } else if (valido) {
            campoNome.classList.remove('campo-invalido');
            if (nome !== '') {
                campoNome.classList.add('campo-valido');
            } else {
                campoNome.classList.remove('campo-valido');
            }
            erroNome.textContent = '';
        }
        
        return valido;
    }
    
    function validarCampoEmail(exibirErro = false) {
        const email = campoEmail.value.trim();
        const erroEmail = document.getElementById('erro-email');
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
        // Verificar se o email já está em uso (simulação)
        else if (emailJaExiste(email)) {
            valido = false;
            mensagem = 'Este e-mail já está cadastrado';
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
    
    function validarCampoTelefone(exibirErro = false) {
        const telefone = campoTelefone.value.trim().replace(/\D/g, '');
        const erroTelefone = document.getElementById('erro-telefone');
        let valido = true;
        let mensagem = '';
        
        // Verificar se está vazio
        if (telefone === '') {
            valido = false;
            mensagem = 'O telefone é obrigatório';
        } 
        // Verificar se tem um número mínimo de dígitos (10 para fixo, 11 para celular)
        else if (telefone.length < 10 || telefone.length > 11) {
            valido = false;
            mensagem = 'Digite um telefone válido';
        }
        
        // Aplicar classes e exibir mensagem se necessário
        if (!valido && exibirErro) {
            campoTelefone.classList.add('campo-invalido');
            campoTelefone.classList.remove('campo-valido');
            erroTelefone.textContent = mensagem;
        } else if (valido) {
            campoTelefone.classList.remove('campo-invalido');
            if (telefone !== '') {
                campoTelefone.classList.add('campo-valido');
            } else {
                campoTelefone.classList.remove('campo-valido');
            }
            erroTelefone.textContent = '';
        }
        
        return valido;
    }
    
    function validarCampoSenha(exibirErro = false) {
        const senha = campoSenha.value;
        const erroSenha = document.getElementById('erro-senha');
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
        // Verificar se tem pelo menos um número e uma letra
        else if (!/(?=.*[A-Za-z])(?=.*\d)/.test(senha)) {
            valido = false;
            mensagem = 'A senha deve conter letras e números';
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
    
    // Função para formatar o telefone conforme o usuário digita
    function formatarTelefone(input) {
        let valor = input.value.replace(/\D/g, '');
        let formatado = '';
        
        if (valor.length > 0) {
            formatado = '(' + valor.substring(0, 2);
            
            if (valor.length > 2) {
                formatado += ') ' + valor.substring(2, 7);
                
                if (valor.length > 7) {
                    formatado += '-' + valor.substring(7, 11);
                }
            }
        }
        
        input.value = formatado;
    }
    
    // Função para alternar visibilidade da senha
    function alternarVisibilidadeSenha(campoSenha, botao) {
        if (campoSenha.type === 'password') {
            campoSenha.type = 'text';
            botao.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icone-olho-aberto">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>
            `;
        } else {
            campoSenha.type = 'password';
            botao.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icone-olho-fechado">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
            `;
        }
    }
    
    // Funções para verificar se o e-mail já existe
    function emailJaExiste(email) {
        // Lista de usuários simulada (mesma do login.js)
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
        
        // Verificar se o email já está na lista de usuários
        return usuarios.some(usuario => usuario.email === email);
    }
    
    // Mostrar mensagem do sistema (sucesso, erro, info)
    function mostrarMensagemSistema(mensagem, tipo = 'info') {
        const mensagemSistema = document.getElementById('mensagem-sistema');
        mensagemSistema.textContent = mensagem;
        mensagemSistema.className = 'mensagem-sistema';
        mensagemSistema.classList.add(tipo);
        mensagemSistema.classList.remove('escondido');
        
        // Rolar para a mensagem se necessário
        mensagemSistema.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    

    // Função que cadastra o usuário
    function cadastrarUsuario() {
        const nome = campoNome.value.trim();
        const email = campoEmail.value.trim();
        const telefone = campoTelefone.value.trim();
        const senha = campoSenha.value;
        
        // Adicionar classe de carregamento ao botão
        const botaoCadastrar = formularioCadastro.querySelector('button[type="submit"]');
        botaoCadastrar.classList.add('carregando');
        botaoCadastrar.disabled = true;
        
        // Simulando requisição ao servidor (1 segundo de delay)
        setTimeout(function() {
            // Criar novo usuário
            const novoUsuario = {
                id: gerarNovoId(),
                nome: nome,
                email: email,
                telefone: telefone,
                senha: senha
            };
            
            // Salvar o novo usuário (em um sistema real, isso seria feito no backend)
            // Neste caso, simulamos salvando no localStorage
            salvarNovoUsuario(novoUsuario);
            
            // Criar um token de autenticação (mesma lógica do login)
            criarSessaoUsuario(novoUsuario);
            
            // Mostrar mensagem de sucesso
            mostrarMensagemSistema('Cadastro realizado com sucesso! Redirecionando...', 'sucesso');
            
            // Remover classe de carregamento
            botaoCadastrar.classList.remove('carregando');
            
            // Redirecionar para página de dashboard após um breve delay
            setTimeout(function() {
                window.location.href = '/index.html';
            }, 1500);
        }, 1000);
    }
    
    // Função para gerar um novo ID para usuário (simulação)
    function gerarNovoId() {
        // Em um sistema real, o ID seria gerado pelo backend
        // Aqui vamos apenas gerar um número aleatório grande
        return Math.floor(100000 + Math.random() * 900000);
    }
    
    // Função para salvar o novo usuário na "base de dados"
    function salvarNovoUsuario(usuario) {
        // Em um sistema real, isso seria uma chamada para API
        
        // Obter lista atual de usuários (se existir)
        let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        
        // Adicionar o novo usuário
        usuarios.push(usuario);
        
        // Salvar no localStorage
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
    
    // Criar sessão do usuário após cadastro (mesmo comportamento do login)
    function criarSessaoUsuario(usuario) {
        // Criar um token simples com data de expiração (7 dias)
        const agora = new Date();
        const expiracao = new Date(agora.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 dias
        
        const tokenUsuario = {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            exp: expiracao.getTime()
        };
        
        // Salvar token no localStorage
        localStorage.setItem('authToken', JSON.stringify(tokenUsuario));
        
        // Remover senha para segurança
        const { senha, ...usuarioSemSenha } = usuario;
        
        // Salvar dados do usuário na sessão
        sessionStorage.setItem('usuarioLogado', JSON.stringify(usuarioSemSenha));
    }
});