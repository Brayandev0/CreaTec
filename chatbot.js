// Importa o módulo de estilos e configuração
import { getChatbotStyles } from './chatbotcss.js';
import { config } from './chatbotconfig.js';

// Função para injetar o CSS na página
const injectChatbotStyles = () => {
  // Cria elemento de estilo
  const styleElement = document.createElement('style');
  // Define o conteúdo do estilo
  styleElement.textContent = getChatbotStyles();
  // Adiciona ao cabeçalho do documento
  document.head.appendChild(styleElement);
};

// Função para criar todo o HTML do chatbot dinamicamente
const createChatbotHTML = () => {
  // Cria o elemento container principal
  const chatbotContainer = document.createElement('div');
  chatbotContainer.className = 'chatbot-container hidden';

  // Detecta se é dispositivo móvel para ajustes específicos
  const isMobile = window.innerWidth <= 768;

  // Aplica estilos específicos para dispositivo móvel se necessário
  if (isMobile) {
    chatbotContainer.style.maxWidth = config.dimensions.mobileMaxWidth;
    chatbotContainer.style.height = config.dimensions.mobileHeight;
    chatbotContainer.style.bottom = config.position.mobileBottom;
    chatbotContainer.style.right = config.position.mobileRight;
  }

  // HTML completo do chatbot
  chatbotContainer.innerHTML = `
    <!-- Tela inicial (Home) -->
    <div class="chatbot-screen chatbot-screen-home active">
        <!-- Cabeçalho com background e profiles -->
        <div class="chatbot-header">
            <div class="chatbot-header-avatar">
                <svg class="chatbot-header-logo" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#fff" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,16.5c-2.49,0-4.5-2.01-4.5-4.5 S9.51,7.5,12,7.5s4.5,2.01,4.5,4.5S14.49,16.5,12,16.5z M12,11c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S12.55,11,12,11z"/>
                </svg>
            </div>
            <div class="chatbot-header-profile">
                <div class="chatbot-header-profiles">
                    <div class="chatbot-header-profile-pic"></div>
                    <div class="chatbot-header-profile-pic"></div>
                    <div class="chatbot-header-profile-pic"></div>
                </div>
            </div>
        </div>
        <!-- Seção de boas-vindas -->
        <div class="chatbot-welcome">
            <h2 class="chatbot-welcome-title">Olá</h2>
            <p class="chatbot-welcome-subtitle">Como podemos ajudar?</p>
        </div>
        <!-- Lista de opções disponíveis -->
        <div class="chatbot-options">
            <!-- Opção para enviar mensagem -->
            <div class="chatbot-option-item">
                <div class="chatbot-option-content">
                    <p class="chatbot-option-title">Envie uma mensagem</p>
                    <p class="chatbot-option-description">Normalmente respondemos em alguns minutos</p>
                </div>
                <button class="chatbot-option-button chatbot-send-message-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"/>
                    </svg>
                </button>
            </div>
            <!-- Opções adicionais -->
            <div class="chatbot-option-item">
                <p class="chatbot-option-title">Usar sistema de suporte externo</p>
                <div class="chatbot-option-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                    </svg>
                </div>
            </div>
            <div class="chatbot-option-item">
                <p class="chatbot-option-title">Acessar a FAQ</p>
                <div class="chatbot-option-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                    </svg>
                </div>
            </div>
        </div>
        <!-- Navegação inferior -->
        <div class="chatbot-navigation">
            <button class="chatbot-nav-button chatbot-nav-inicio active">
                <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"/>
                </svg>
                <span>Início</span>
            </button>
            <button class="chatbot-nav-button chatbot-nav-mensagens">
                <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20,2H4A2,2,0,0,0,2,4V22L6,18H20a2,2,0,0,0,2-2V4A2,2,0,0,0,20,2ZM6,9h12v2H6Zm8,5H6V12h8Zm4-6H6V6H18Z"/>
                </svg>
                <span>Mensagens</span>
            </button>
        </div>
    </div>

    <!-- Tela de Mensagens -->
    <div class="chatbot-screen chatbot-screen-messages">
        <!-- Cabeçalho da tela de mensagens -->
        <div class="chatbot-messages-header">
            <h2 class="chatbot-messages-title">Mensagens</h2>
        </div>
        <!-- Lista de conversas existentes -->
        <div class="chatbot-messages-list">
            <div class="chatbot-message-item" data-chat-id="1">
                <div class="chatbot-message-avatar"></div>
                <div class="chatbot-message-content">
                    <p class="chatbot-message-text">Opa! Ficou com alguma dúvida? Chame a...</p>
                    <p class="chatbot-message-info">Atendimento • Há 2min</p>
                </div>
            </div>
        </div>
        <!-- Área para iniciar nova conversa -->
        <div class="chatbot-messages-compose">
            <button class="chatbot-compose-button">
                Envie uma mensagem
                <svg width="16" height="16" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"/>
                </svg>
            </button>
        </div>
        <!-- Navegação inferior -->
        <div class="chatbot-navigation">
            <button class="chatbot-nav-button chatbot-nav-inicio">
                <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"/>
                </svg>
                <span>Início</span>
            </button>
            <button class="chatbot-nav-button chatbot-nav-mensagens active">
                <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20,2H4A2,2,0,0,0,2,4V22L6,18H20a2,2,0,0,0,2-2V4A2,2,0,0,0,20,2ZM6,9h12v2H6Zm8,5H6V12h8Zm4-6H6V6H18Z"/>
                </svg>
                <span>Mensagens</span>
            </button>
        </div>
    </div>

    <!-- Tela de Chat (Conversas individuais) -->
    <div class="chatbot-screen chatbot-screen-chat">
        <!-- Cabeçalho da conversa -->
        <div class="chatbot-chat-header">
            <button class="chatbot-back-button">
                <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"/>
                </svg>
            </button>
            <div class="chatbot-chat-info">
                <h2 class="chatbot-chat-title">Atendimento</h2>
                <p class="chatbot-chat-status">Online</p>
            </div>
        </div>
        <!-- Área de mensagens da conversa -->
        <div class="chatbot-chat-messages">
            <!-- Mensagens serão inseridas dinamicamente aqui -->
        </div>
        <!-- Área de input para nova mensagem -->
        <div class="chatbot-chat-input">
            <input type="text" class="chatbot-message-input" placeholder="Digite sua mensagem...">
            <button class="chatbot-send-button">
                <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z"/>
                </svg>
            </button>
        </div>
    </div>
  `;

  // Cria botão flutuante para mostrar/ocultar o chatbot
  const toggleButton = document.createElement('div');
  toggleButton.className = 'chatbot-toggle-button';
  toggleButton.innerHTML = `
    <svg class="chatbot-icon-chat" viewBox="0 0 24 24">
        <path d="M20,2H4A2,2,0,0,0,2,4V22L6,18H20a2,2,0,0,0,2-2V4A2,2,0,0,0,20,2ZM6,9h12v2H6Zm8,5H6V12h8Zm4-6H6V6H18Z"/>
    </svg>
    <svg class="chatbot-icon-close" viewBox="0 0 24 24">
        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
    </svg>
  `;

  // Adiciona os elementos ao body
  document.body.appendChild(chatbotContainer);
  document.body.appendChild(toggleButton);
};

// Funcionalidade do chatbot
const initChatbot = () => {
  // Elementos do DOM do chatbot
  const chatbotElements = {
    container: document.querySelector('.chatbot-container'),
    toggleButton: document.querySelector('.chatbot-toggle-button'),
    screenHome: document.querySelector('.chatbot-screen-home'),
    screenMessages: document.querySelector('.chatbot-screen-messages'),
    screenChat: document.querySelector('.chatbot-screen-chat'),
    navInicio: document.querySelectorAll('.chatbot-nav-inicio'),
    navMensagens: document.querySelectorAll('.chatbot-nav-mensagens'),
    sendMessageButtons: document.querySelectorAll('.chatbot-send-message-btn, .chatbot-compose-button'),
    backButton: document.querySelector('.chatbot-back-button'),
    messageItems: document.querySelectorAll('.chatbot-message-item'),
    chatInput: document.querySelector('.chatbot-message-input'),
    sendButton: document.querySelector('.chatbot-send-button')
  };

  // Armazenamento de dados do chat
  const chatData = {
    currentChatId: null,
    chats: {
      1: {
        title: 'Atendimento',
        messages: [
          {
            text: 'Opa! Ficou com alguma dúvida? Chame a gente aqui!',
            sender: 'bot',
            time: 'Há 2min'
          }
        ]
      }
    }
  };

  // Função para alternar entre as telas
  const switchScreen = (screenToShow) => {
    // Remove a classe 'active' de todas as telas
    const screens = document.querySelectorAll('.chatbot-screen');
    screens.forEach(screen => {
      screen.classList.remove('active');
    });

    // Adiciona a classe 'active' na tela que deve ser exibida
    screenToShow.classList.add('active');

    // Atualiza o estado ativo dos botões de navegação
    if (screenToShow === chatbotElements.screenHome) {
      chatbotElements.navInicio.forEach(btn => btn.classList.add('active'));
      chatbotElements.navMensagens.forEach(btn => btn.classList.remove('active'));
    } else if (screenToShow === chatbotElements.screenMessages || screenToShow === chatbotElements.screenChat) {
      chatbotElements.navInicio.forEach(btn => btn.classList.remove('active'));
      chatbotElements.navMensagens.forEach(btn => btn.classList.add('active'));
    }
  };

  // Função para abrir a tela de chat com um chat específico
  const openChat = (chatId) => {
    // Define o ID do chat atual
    chatData.currentChatId = chatId;
    const chat = chatData.chats[chatId];

    // Atualiza o cabeçalho do chat
    document.querySelector('.chatbot-chat-title').textContent = chat.title;

    // Limpa e preenche as mensagens do chat
    const chatMessagesContainer = document.querySelector('.chatbot-chat-messages');
    chatMessagesContainer.innerHTML = '';

    // Adiciona cada mensagem do chat ao container
    chat.messages.forEach(message => {
      const messageEl = document.createElement('div');
      messageEl.className = `chatbot-message ${message.sender === 'bot' ? 'chatbot-message-received' : 'chatbot-message-sent'}`;

      const messageText = document.createElement('div');
      messageText.innerHTML = message.text;

      const messageTime = document.createElement('div');
      messageTime.className = 'chatbot-message-time';
      messageTime.textContent = message.time;

      messageEl.appendChild(messageText);
      messageEl.appendChild(messageTime);
      chatMessagesContainer.appendChild(messageEl);
    });

    // Muda para a tela de chat
    switchScreen(chatbotElements.screenChat);
  };

  // Função para criar um novo chat
  const createNewChat = () => {
    // Cria um ID único para o novo chat
    const newChatId = Date.now().toString();
    chatData.chats[newChatId] = {
      title: 'Novo atendimento',
      messages: [
        {
          text: '💬 <strong>Olá! Bem-vindo ao atendimento da Createc.</strong>\n\n<strong>Como posso te ajudar?</strong> Escolha uma opção:\n\n<strong>1️⃣ Conhecer nossos serviços</strong>\n<strong>2️⃣ Suporte técnico</strong>\n<strong>3️⃣ Falar com um atendente</strong>\n\n🚀 Envie o número da opção ou sua dúvida!',
          sender: 'bot',
          time: 'Agora'
        }
      ]
    };

    // Adiciona o novo chat à lista de mensagens
    const messagesList = document.querySelector('.chatbot-messages-list');
    const newChatItem = document.createElement('div');
    newChatItem.className = 'chatbot-message-item';
    newChatItem.setAttribute('data-chat-id', newChatId);

    // Cria a estrutura HTML do item de chat
    newChatItem.innerHTML = `
      <div class="chatbot-message-avatar"></div>
      <div class="chatbot-message-content">
        <p class="chatbot-message-text">Novo atendimento iniciado...</p>
        <p class="chatbot-message-info">Atendimento • Agora</p>
      </div>
    `;

    // Adiciona evento de clique para abrir o chat
    newChatItem.addEventListener('click', () => {
      openChat(newChatId);
    });

    // Adiciona o novo chat no início da lista
    messagesList.prepend(newChatItem);

    // Abre o novo chat
    openChat(newChatId);
  };

  // Função para enviar uma mensagem no chat atual
  const sendMessage = () => {
    // Obtém o texto da mensagem e verifica se não está vazio
    const messageText = chatbotElements.chatInput.value.trim();
    if (!messageText) return;

    const currentChat = chatData.chats[chatData.currentChatId];
    const now = new Date();
    const timeString = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;

    // Adiciona a mensagem aos dados do chat
    currentChat.messages.push({
      text: messageText,
      sender: 'user',
      time: timeString
    });

    // Adiciona a mensagem à interface do usuário
    const chatMessagesContainer = document.querySelector('.chatbot-chat-messages');
    const messageEl = document.createElement('div');
    messageEl.className = 'chatbot-message chatbot-message-sent';

    const messageTextEl = document.createElement('div');
    messageTextEl.textContent = messageText;

    const messageTime = document.createElement('div');
    messageTime.className = 'chatbot-message-time';
    messageTime.textContent = timeString;

    messageEl.appendChild(messageTextEl);
    messageEl.appendChild(messageTime);
    chatMessagesContainer.appendChild(messageEl);

    // Limpa o campo de entrada
    chatbotElements.chatInput.value = '';

    // Rola automaticamente para o final da conversa
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;

    // Atualiza a pré-visualização da mensagem na lista de mensagens
    const messageItem = document.querySelector(`.chatbot-message-item[data-chat-id="${chatData.currentChatId}"]`);
    if (messageItem) {
      messageItem.querySelector('.chatbot-message-text').textContent = messageText.substring(0, 30) + (messageText.length > 30 ? '...' : '');
      messageItem.querySelector('.chatbot-message-info').textContent = `Você • ${timeString}`;
    }

    // Simula uma resposta do bot após um curto atraso
    setTimeout(() => {
      const botResponse = "Obrigado pela sua mensagem! Em breve um atendente entrará em contato.";

      // Adiciona a resposta do bot aos dados do chat
      currentChat.messages.push({
        text: botResponse,
        sender: 'bot',
        time: timeString
      });

      // Adiciona a resposta do bot à interface do usuário
      const botMessageEl = document.createElement('div');
      botMessageEl.className = 'chatbot-message chatbot-message-received';

      const botMessageTextEl = document.createElement('div');
      botMessageTextEl.textContent = botResponse;

      const botMessageTime = document.createElement('div');
      botMessageTime.className = 'chatbot-message-time';
      botMessageTime.textContent = timeString;

      botMessageEl.appendChild(botMessageTextEl);
      botMessageEl.appendChild(botMessageTime);
      chatMessagesContainer.appendChild(botMessageEl);

      // Rola automaticamente para o final da conversa
      chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    }, 1000);
  };

  // Função para mostrar/ocultar o chatbot
  const toggleChatbot = () => {
    chatbotElements.container.classList.toggle('hidden');
  };

  // Adiciona eventos de clique para navegação
  chatbotElements.navInicio.forEach(btn => {
    btn.addEventListener('click', () => {
      switchScreen(chatbotElements.screenHome);
    });
  });

  chatbotElements.navMensagens.forEach(btn => {
    btn.addEventListener('click', () => {
      switchScreen(chatbotElements.screenMessages);
    });
  });

  // Adiciona evento de clique para o botão de mostrar/ocultar
  chatbotElements.toggleButton.addEventListener('click', toggleChatbot);

  // Adiciona eventos de clique para os botões de enviar mensagem
  chatbotElements.sendMessageButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      createNewChat();
    });
  });

  // Adiciona evento de clique para o botão de voltar
  chatbotElements.backButton.addEventListener('click', () => {
    switchScreen(chatbotElements.screenMessages);
  });

  // Adiciona eventos de clique para os itens de mensagem (para abrir chats existentes)
  chatbotElements.messageItems.forEach(item => {
    item.addEventListener('click', () => {
      const chatId = item.getAttribute('data-chat-id');
      openChat(chatId);
    });
  });

  // Adiciona eventos para enviar mensagens
  chatbotElements.sendButton.addEventListener('click', sendMessage);
  chatbotElements.chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
};

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  // Injeta os estilos CSS do chatbot
  injectChatbotStyles();
  // Cria o HTML do chatbot
  createChatbotHTML();
  // Inicializa a funcionalidade
  initChatbot();
});

// Adiciona evento para redimensionamento de tela
window.addEventListener('resize', () => {
  const chatbotContainer = document.querySelector('.chatbot-container');
  const isMobile = window.innerWidth <= 768;

  if (chatbotContainer) {
    if (isMobile) {
      chatbotContainer.style.maxWidth = config.dimensions.mobileMaxWidth;
      chatbotContainer.style.height = config.dimensions.mobileHeight;
      chatbotContainer.style.bottom = config.position.mobileBottom;
      chatbotContainer.style.right = config.position.mobileRight;
      chatbotContainer.style.borderRadius = '0';
    } else {
      chatbotContainer.style.maxWidth = config.dimensions.maxWidth;
      chatbotContainer.style.height = config.dimensions.height;
      chatbotContainer.style.bottom = config.position.bottom;
      chatbotContainer.style.right = config.position.right;
      chatbotContainer.style.borderRadius = '12px';
    }
  }
});