// Gerenciador de exclusão de mensagens de chat
// Responsável por adicionar ícones de lixeira às mensagens e gerenciar confirmações de exclusão

export const initDeleteManager = (chatData) => {
  // Função para criar o ícone de lixeira
  const createDeleteIcon = (messageElement, chatId, messageIndex) => {
    const deleteIcon = document.createElement('div');
    deleteIcon.className = 'chatbot-message-delete-icon';
    deleteIcon.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24">
        <path fill="currentColor" d="M6,19A2,2,0,0,0,8,21H16a2,2,0,0,0,2-2V7H6ZM19,4H15.5l-1-1h-5l-1,1H5V6H19Z"/>
      </svg>
    `;
    
    // Adiciona evento de clique para mostrar confirmação
    deleteIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      showDeleteConfirmation(messageElement, chatId, messageIndex);
    });
    
    // Verificamos se a mensagem é do usuário ('sent') ou do bot ('received')
    const isSentMessage = messageElement.classList.contains('chatbot-message-sent');
    
    // Só adiciona o ícone de exclusão para mensagens do bot
    if (!isSentMessage) {
      messageElement.appendChild(deleteIcon);
    }
  };
  
  // Função para mostrar confirmação de exclusão
  const showDeleteConfirmation = (messageElement, chatId, messageIndex) => {
    // Remove qualquer confirmação existente
    removeExistingConfirmations();
    
    // Cria o elemento de confirmação
    const confirmationElement = document.createElement('div');
    confirmationElement.className = 'chatbot-delete-confirmation';
    confirmationElement.innerHTML = `
      <p>Tem certeza que deseja excluir esta mensagem?</p>
      <div class="chatbot-delete-confirmation-buttons">
        <button class="chatbot-delete-cancel">Cancelar</button>
        <button class="chatbot-delete-confirm">Excluir</button>
      </div>
    `;
    
    // Adiciona eventos para os botões
    confirmationElement.querySelector('.chatbot-delete-cancel').addEventListener('click', (e) => {
      e.stopPropagation();
      confirmationElement.remove();
    });
    
    confirmationElement.querySelector('.chatbot-delete-confirm').addEventListener('click', (e) => {
      e.stopPropagation();
      deleteMessage(chatId, messageIndex);
      confirmationElement.remove();
      
      // Se a mensagem era a última do chat, remove o chat da lista
      if (chatData.chats[chatId].messages.length === 0) {
        deleteChat(chatId);
      }
    });
    
    // Adiciona o elemento de confirmação ao corpo da mensagem
    messageElement.appendChild(confirmationElement);
  };
  
  // Remove qualquer confirmação existente
  const removeExistingConfirmations = () => {
    const existingConfirmations = document.querySelectorAll('.chatbot-delete-confirmation');
    existingConfirmations.forEach(confirmation => confirmation.remove());
  };
  
  // Função para excluir uma mensagem
  const deleteMessage = (chatId, messageIndex) => {
    // Remove a mensagem dos dados
    chatData.chats[chatId].messages.splice(messageIndex, 1);
    
    // Atualiza a interface do usuário
    updateChatMessages(chatId);
    updateChatPreview(chatId);
  };
  
  // Função para excluir um chat inteiro
  const deleteChat = (chatId) => {
    // Remove o chat dos dados
    delete chatData.chats[chatId];
    
    // Remove o item da lista de mensagens
    const chatItem = document.querySelector(`.chatbot-message-item[data-chat-id="${chatId}"]`);
    if (chatItem) {
      chatItem.remove();
    }
    
    // Volta para a tela de mensagens
    const screenMessages = document.querySelector('.chatbot-screen-messages');
    screenMessages.classList.add('active');
    const screenChat = document.querySelector('.chatbot-screen-chat');
    screenChat.classList.remove('active');
  };
  
  // Atualiza a exibição das mensagens de um chat
  const updateChatMessages = (chatId) => {
    if (!chatData.chats[chatId]) return;
    
    const chat = chatData.chats[chatId];
    const messagesContainer = document.querySelector('.chatbot-chat-messages');
    messagesContainer.innerHTML = '';
    
    // Adiciona cada mensagem do chat ao container
    chat.messages.forEach((message, index) => {
      const messageEl = document.createElement('div');
      messageEl.className = `chatbot-message ${message.sender === 'bot' ? 'chatbot-message-received' : 'chatbot-message-sent'}`;
      
      const messageText = document.createElement('div');
      messageText.innerHTML = message.text;
      
      const messageTime = document.createElement('div');
      messageTime.className = 'chatbot-message-time';
      messageTime.textContent = message.time;
      
      messageEl.appendChild(messageText);
      messageEl.appendChild(messageTime);
      
      // Adiciona o ícone de excluir apenas para mensagens recebidas (do bot)
      if (message.sender === 'bot') {
        createDeleteIcon(messageEl, chatId, index);
      }
      
      messagesContainer.appendChild(messageEl);
    });
  };
  
  // Atualiza a prévia do chat na lista de mensagens
  const updateChatPreview = (chatId) => {
    if (!chatData.chats[chatId]) return;
    
    const chat = chatData.chats[chatId];
    const chatItem = document.querySelector(`.chatbot-message-item[data-chat-id="${chatId}"]`);
    
    if (chatItem && chat.messages.length > 0) {
      const lastMessage = chat.messages[chat.messages.length - 1];
      const messageText = lastMessage.text.replace(/<[^>]*>/g, ''); // Remove HTML tags
      chatItem.querySelector('.chatbot-message-text').textContent = 
        messageText.substring(0, 30) + (messageText.length > 30 ? '...' : '');
      chatItem.querySelector('.chatbot-message-info').textContent = 
        `${lastMessage.sender === 'bot' ? 'Atendimento' : 'Você'} • ${lastMessage.time}`;
    }
  };
  
  return {
    updateChatMessages,
    updateChatPreview
  };
};

// Função para criar o botão de exclusão para chats na lista de mensagens
export const initChatDeleteButtons = (chatData) => {
  // Função para adicionar botões de exclusão a todos os chats na lista
  const addDeleteButtonsToChats = () => {
    const chatItems = document.querySelectorAll('.chatbot-message-item');
    
    chatItems.forEach(item => {
      // Verifica se já tem botão de exclusão
      if (item.querySelector('.chatbot-chat-delete-button')) return;
      
      const chatId = item.getAttribute('data-chat-id');
      const deleteButton = document.createElement('div');
      deleteButton.className = 'chatbot-chat-delete-button';
      deleteButton.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
        </svg>
      `;
      
      // Adiciona o evento de clique para mostrar confirmação
      deleteButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Impede que o chat seja aberto
        showChatDeleteConfirmation(item, chatId);
      });
      
      item.appendChild(deleteButton);
    });
  };
  
  // Função para mostrar confirmação de exclusão do chat
  const showChatDeleteConfirmation = (chatItem, chatId) => {
    // Remove qualquer confirmação existente
    removeExistingChatConfirmations();
    
    // Cria elemento de confirmação
    const confirmationElement = document.createElement('div');
    confirmationElement.className = 'chatbot-chat-delete-confirmation active';
    confirmationElement.innerHTML = `
      <p>Excluir esta conversa?</p>
      <div class="chatbot-delete-confirmation-buttons">
        <button class="chatbot-delete-cancel">Não</button>
        <button class="chatbot-delete-confirm">Sim</button>
      </div>
    `;
    
    // Adiciona eventos para botões
    confirmationElement.querySelector('.chatbot-delete-cancel').addEventListener('click', (e) => {
      e.stopPropagation();
      confirmationElement.remove();
    });
    
    confirmationElement.querySelector('.chatbot-delete-confirm').addEventListener('click', (e) => {
      e.stopPropagation();
      deleteChat(chatId);
      confirmationElement.remove();
    });
    
    // Adiciona ao item de chat
    chatItem.appendChild(confirmationElement);
  };
  
  // Remove confirmações existentes
  const removeExistingChatConfirmations = () => {
    const existingConfirmations = document.querySelectorAll('.chatbot-chat-delete-confirmation');
    existingConfirmations.forEach(confirmation => confirmation.remove());
  };
  
  // Função para excluir um chat
  const deleteChat = (chatId) => {
    // Remove o chat dos dados
    delete chatData.chats[chatId];
    
    // Remove o item da lista de mensagens
    const chatItem = document.querySelector(`.chatbot-message-item[data-chat-id="${chatId}"]`);
    if (chatItem) {
      chatItem.remove();
    }
  };
  
  return {
    addDeleteButtonsToChats
  };
};