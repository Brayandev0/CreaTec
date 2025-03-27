// Novo arquivo para lidar com a aplicação de estilos de reset específicos
export const applyChatbotResetStyles = () => {
  // Lista de todas as classes do chatbot que precisam de reset de estilos
  const resetClasses = [
    '.chatbot-container', '.chatbot-screen', '.chatbot-header', '.chatbot-welcome',
    '.chatbot-welcome-title', '.chatbot-welcome-subtitle', '.chatbot-options',
    '.chatbot-option-item', '.chatbot-option-content', '.chatbot-option-title',
    '.chatbot-option-description', '.chatbot-send-message-btn', '.chatbot-option-icon',
    '.chatbot-navigation', '.chatbot-nav-button', '.chatbot-messages-header',
    '.chatbot-messages-title', '.chatbot-messages-list', '.chatbot-message-item',
    '.chatbot-message-avatar', '.chatbot-message-content', '.chatbot-message-text',
    '.chatbot-message-info', '.chatbot-messages-compose', '.chatbot-compose-button',
    '.chatbot-chat-header', '.chatbot-back-button', '.chatbot-chat-info',
    '.chatbot-chat-title', '.chatbot-chat-status', '.chatbot-chat-messages',
    '.chatbot-message', '.chatbot-message-received', '.chatbot-message-sent',
    '.chatbot-message-time', '.chatbot-chat-input', '.chatbot-message-input',
    '.chatbot-send-button', '.chatbot-toggle-button', '.chatbot-chat-delete-button',
    '.chatbot-message-delete-icon', '.chatbot-delete-confirmation', 
    '.chatbot-delete-confirmation-buttons', '.chatbot-delete-cancel', '.chatbot-delete-confirm'
  ];
  
  // Cria uma string CSS para aplicar reset a todas as classes
  const resetStyles = resetClasses.map(className => 
    `${className} { margin: 0; padding: 0; box-sizing: border-box; }`
  ).join('\n');
  
  // Cria e injeta o elemento de estilo
  const styleElement = document.createElement('style');
  styleElement.textContent = resetStyles;
  document.head.appendChild(styleElement);
};