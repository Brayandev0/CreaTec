// Arquivo contendo o CSS do chatbot
// Este arquivo é carregado pelo script.js principal

// Função que retorna o CSS do chatbot
const getChatbotStyles = () => {
    return `/* Reset de margens, paddings e box-sizing para todos os elementos */
  
  /* Estilo para o corpo da página */
  
  /* Container principal do chatbot */
  .chatbot-container {
      width: 100%;
      max-width: 400px;
      height: 600px;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      position: fixed;
      bottom: 135px;
      right: 30px;
      transition: transform 0.3s ease, opacity 0.3s ease;
      z-index: 999;
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
  }
  
  /* Media query para dispositivos móveis */
  @media (max-width: 768px) {
      .chatbot-container {
          max-width: 100%;
          height: 100%;
          border-radius: 0;
          bottom: 0;
          right: 0;
          left: 0;
          top: 0;
      }
      
      .chatbot-toggle-button {
          bottom: 10px !important;
          right: 10px !important;
      }
      
      .chatbot-options {
          flex-grow: 1;
      }
      
      .chatbot-welcome {
          padding: 20px 15px 10px;
      }
      
      .chatbot-welcome-title {
          font-size: 24px;
      }
      
      .chatbot-welcome-subtitle {
          font-size: 16px;
      }
      
      .chatbot-option-item {
          padding: 12px;
      }
      
      .chatbot-chat-messages {
          padding: 10px;
      }
      
      .chatbot-message {
          max-width: 85%;
      }
  }
  
  /* Classe para esconder o chatbot */
  .chatbot-container.hidden {
      transform: translateY(20px);
      opacity: 0;
      pointer-events: none;
  }
  
  /* Estilo das telas do chatbot */
  .chatbot-screen {
      display: none;
      flex-direction: column;
      height: 100%;
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
  }
  
  /* Classe para a tela ativa */
  .chatbot-screen.active {
      display: flex;
  }
  
  /* Cabeçalho do chatbot */
  .chatbot-header {
      background-color: #1e1e1e;
      background-image: url(/a/0427a186-f83a-4165-8a95-3c9e4d5971cc);
      background-size: cover;
      background-position: center;
      padding: 25px 20px;
      display: flex;
      justify-content: space-between;
      color: white;
      position: relative;
  }
  
  /* Sobreposição escura no cabeçalho */
  .chatbot-header::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
  }
  
  /* Ajuste do z-index para avatar e perfil */
  .chatbot-header-avatar,
  .chatbot-header-profile {
      position: relative;
      z-index: 2;
  }
  
  /* Estilo do avatar no cabeçalho */
  .chatbot-header-avatar {
      padding: 10px;
      background-color: rgba(68, 68, 68, 0.7);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s ease;
  }
  
  /* Efeito hover no avatar */
  .chatbot-header-avatar:hover {
      transform: scale(1.1);
  }
  
  /* Container para os perfis de usuário */
  .chatbot-header-profiles {
      display: flex;
  }
  
  /* Estilo das fotos de perfil */
  .chatbot-header-profile-pic {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: #888;
      border: 2px solid #1e1e1e;
      margin-left: -8px;
      background-size: cover;
      background-position: center;
      transition: transform 0.2s ease;
  }
  
  /* Efeito hover nas fotos de perfil */
  .chatbot-header-profile-pic:hover {
      transform: translateY(-5px);
      z-index: 5;
  }
  
  /* Imagens dos perfis */
  .chatbot-header-profile-pic:first-child {
      background-image: url(/a/32273cb1-5506-4ae1-987a-84d629f046af);
      margin-left: 0;
  }
  
  .chatbot-header-profile-pic:nth-child(2) {
      background-image: url(/a/a1db8e1c-915f-4d98-a976-88ceaa4c214c);
  }
  
  /* Seção de boas-vindas */
  .chatbot-welcome {
      padding: 25px 20px 15px;
      text-align: left;
      background: linear-gradient(rgb(0, 0, 0), rgba(170, 1, 57, 0.9));
      color: white;
  }
  
  /* Título da seção de boas-vindas */
  .chatbot-welcome-title {
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
  }
  
  /* Emoji animado ao lado do título */
  .chatbot-welcome-title::after {
      content: '👋';
      margin-left: 10px;
      animation: wave 1.5s infinite;
  }
  
  /* Animação para o emoji de mão acenando */
  @keyframes wave {
      0% { transform: rotate(0deg); }
      25% { transform: rotate(20deg); }
      50% { transform: rotate(0deg); }
      75% { transform: rotate(-20deg); }
      100% { transform: rotate(0deg); }
  }
  
  /* Subtítulo da seção de boas-vindas */
  .chatbot-welcome-subtitle {
      font-size: 18px;
      color: #ccc;
  }
  
  /* Seção de opções */
  .chatbot-options {
      display: flex;
      flex-direction: column;
      padding: 15px 20px;
      background-color: #f7f7f7;
      overflow-y: auto;
  }
  
  /* Item de opção */
  .chatbot-option-item {
      background-color: white;
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      transition: all 0.3s ease;
      border: 1px solid transparent;
  }
  
  /* Efeito hover nos itens de opção */
  .chatbot-option-item:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      border-color: #ddd;
      cursor: pointer;
  }
  
  /* Conteúdo do item de opção */
  .chatbot-option-content {
      flex-grow: 1;
  }
  
  /* Título do item de opção */
  .chatbot-option-title {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 4px;
      transition: color 0.2s ease;
  }
  
  /* Mudança de cor no título ao passar o mouse */
  .chatbot-option-item:hover .chatbot-option-title {
      color:rgb(107, 9, 38);
  }
  
  /* Descrição do item de opção */
  .chatbot-option-description {
      font-size: 14px;
      color: #777;
  }
  
  /* Botão de enviar mensagem */
  .chatbot-send-message-btn {
      background-color:rgb(43, 43, 43);
      color: white;
      border: none;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
  }
  
  /* Efeito hover no botão de enviar */
  .chatbot-send-message-btn:hover {
      background-color:rgb(117, 8, 44);
      transform: scale(1.1);
  }
  
  /* Ícone de opção */
  .chatbot-option-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #444;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      transition: all 0.3s ease;
  }
  
  /* Efeito hover no ícone de opção */
  .chatbot-option-item:hover .chatbot-option-icon {
      background-color: #f0f0f0;
      transform: rotate(15deg);
  }
  
  /* Navegação inferior */
  .chatbot-navigation {
      display: flex;
      border-top: 1px solid #eee;
      margin-top: auto;
      background-color: white;
  }
  
  /* Botão de navegação */
  .chatbot-nav-button {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 12px;
      background-color: transparent;
      border: none;
      color: #555;
      cursor: pointer;
      transition: all 0.3s ease;
  }
  
  /* Efeito hover no botão de navegação */
  .chatbot-nav-button:hover {
      background-color: #f5f5f5;
  }
  
  /* Botão de navegação ativo */
  .chatbot-nav-button.active {
      color: #000;
      font-weight: bold;
  }
  
  /* Ícones SVG nos botões de navegação */
  .chatbot-nav-button svg {
      margin-bottom: 4px;
      transition: transform 0.3s ease;
  }
  
  /* Efeito hover nos ícones de navegação */
  .chatbot-nav-button:hover svg {
      transform: translateY(-3px);
  }
  
  /* Estilos do cabeçalho da tela de mensagens */
  .chatbot-messages-header {
      padding: 20px;
      border-bottom: 1px solid #eee;
      text-align: center;
  }
  
  /* Título da tela de mensagens */
  .chatbot-messages-title {
      font-size: 18px;
      font-weight: 500;
  }
  
  /* Lista de mensagens */
  .chatbot-messages-list {
      flex-grow: 1;
      overflow-y: auto;
      padding: 20px;
  }
  
  /* Item de mensagem na lista */
  .chatbot-message-item {
      display: flex;
      margin-bottom: 16px;
      cursor: pointer;
      transition: background-color 0.2s;
  }
  
  /* Efeito hover no item de mensagem */
  .chatbot-message-item:hover {
      background-color: #f5f5f5;
      border-radius: 8px;
  }
  
  /* Avatar do item de mensagem */
  .chatbot-message-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #ddd;
      margin-right: 12px;
      flex-shrink: 0;
  }
  
  /* Conteúdo do item de mensagem */
  .chatbot-message-content {
      flex-grow: 1;
  }
  
  /* Texto do item de mensagem */
  .chatbot-message-text {
      font-size: 14px;
      margin-bottom: 4px;
  }
  
  /* Informações adicionais do item de mensagem */
  .chatbot-message-info {
      font-size: 12px;
      color: #888;
  }
  
  /* Área de composição de mensagens */
  .chatbot-messages-compose {
      padding: 20px;
      border-top: 1px solid #eee;
  }
  
  /* Botão de composição */
  .chatbot-compose-button {
      width: 100%;
      background-color:rgb(121, 11, 44);
      color: white;
      border: none;
      border-radius: 20px;
      padding: 12px 16px;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
  }
  
  /* Estilos da tela de chat */
  .chatbot-screen-chat {
      display: none;
      flex-direction: column;
      height: 100%;
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      background-color: #f9f9f9;
  }
  
  /* Cabeçalho da tela de chat */
  .chatbot-chat-header {
      background-color:rgb(107, 9, 34);
      padding: 15px;
      display: flex;
      align-items: center;
      color: white;
  }
  
  /* Botão de voltar */
  .chatbot-back-button {
      background: none;
      border: none;
      color: white;
      margin-right: 15px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  
  /* Informações do chat */
  .chatbot-chat-info {
      flex-grow: 1;
  }
  
  /* Título do chat */
  .chatbot-chat-title {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 2px;
  }
  
  /* Status do chat */
  .chatbot-chat-status {
      font-size: 12px;
      color: #aaa;
  }
  
  /* Container das mensagens do chat */
  .chatbot-chat-messages {
      flex-grow: 1;
      overflow-y: auto;
      padding: 15px;
      display: flex;
      flex-direction: column;
  }
  
  /* Estilo base para mensagens */
  .chatbot-message {
      max-width: 80%;
      padding: 10px 15px;
      border-radius: 18px;
      margin-bottom: 10px;
      font-size: 14px;
      line-height: 1.4;
  }
  
  /* Mensagem recebida */
  .chatbot-message-received {
      align-self: flex-start;
      background-color: #e6e6e6;
      color: #333;
      border-bottom-left-radius: 5px;
  }
  
  /* Preserva quebras de linha nas mensagens recebidas */
  .chatbot-message-received div {
      white-space: pre-wrap;
  }
  
  /* Mensagem enviada */
  .chatbot-message-sent {
      align-self: flex-end;
      background-color:rgb(99, 7, 30);
      color: white;
      border-bottom-right-radius: 5px;
  }
  
  /* Horário da mensagem */
  .chatbot-message-time {
      font-size: 11px;
      color: #888;
      margin-top: 5px;
      text-align: right;
  }
  
  /* Área de entrada de mensagem */
  .chatbot-chat-input {
      padding: 15px;
      display: flex;
      border-top: 1px solid #eee;
      background-color: white;
  }
  
  /* Campo de entrada da mensagem */
  .chatbot-message-input {
      flex-grow: 1;
      border: none;
      padding: 10px 15px;
      border-radius: 20px;
      background-color: #f1f1f1;
      margin-right: 10px;
      outline: none;
  }
  
  /* Botão de enviar mensagem */
  .chatbot-send-button {
      background-color:rgb(107, 10, 34);
      border: none;
      border-radius: 50%;   
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      cursor: pointer;
  }
  
  /* Botão de mostrar/ocultar o chatbot */
  .chatbot-toggle-button {
      position: fixed;
      bottom: 70px;
      right: 30px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color:rgb(105, 7, 40);
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 1000;
      transition: transform 0.3s ease, background-color 0.3s ease;
  }
  
  /* Efeito hover no botão de mostrar/ocultar */
  .chatbot-toggle-button:hover {
      transform: scale(1.1);
      background-color:rgb(88, 7, 27);
  }
  
  /* Ícone do botão de mostrar/ocultar */
  .chatbot-toggle-button svg {
      width: 30px;
      height: 30px;
      fill: white;
  }
  
  /* Ícone de fechar (inicialmente escondido) */
  .chatbot-icon-close {
      display: none;
  }
  
  /* Lógica para alternar ícones quando o chatbot está visível */
  .chatbot-container:not(.hidden) ~ .chatbot-toggle-button .chatbot-icon-chat {
      display: none;
  }
  
  .chatbot-container:not(.hidden) ~ .chatbot-toggle-button .chatbot-icon-close {
      display: block;
  }




     @media (max-width: 1100px) and (min-width: 1000px) {
     

    .chatbot-container {
      width: 100%;
      max-width: 400px;
      height: 500px;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      position: fixed;
      bottom: 135px;
      right: 30px;
      transition: transform 0.3s ease, opacity 0.3s ease;
      z-index: 999;
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
    }

     .chatbot-toggle-button {
      position: fixed;
      bottom: 70px;
      right: 30px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color:rgb(105, 7, 40);
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 1000;
      transition: transform 0.3s ease, background-color 0.3s ease;
    }
     
    .chatbot-toggle-button svg {
      width: 20px;
      height: 20px;
      fill: white;
    }

     
    /* Classe para esconder o chatbot */
    .chatbot-container.hidden {
        transform: translateY(20px);
        opacity: 0;
        pointer-events: none;
    }
    
    /* Estilo das telas do chatbot */
    .chatbot-screen {
        display: none;
        flex-direction: column;
        height: 100%;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
    }
    
    /* Classe para a tela ativa */
    .chatbot-screen.active {
        display: flex;
    }
    
    /* Cabeçalho do chatbot */
    .chatbot-header {
        background-color: #1e1e1e;
        background-image: url(/a/0427a186-f83a-4165-8a95-3c9e4d5971cc);
        background-size: cover;
        background-position: center;
        padding: 10px 10px;
        display: flex;
        justify-content: space-between;
        color: white;
        position: relative;
    }
    
    /* Sobreposição escura no cabeçalho */
    .chatbot-header::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }
    
    /* Ajuste do z-index para avatar e perfil */
    .chatbot-header-avatar,
    .chatbot-header-profile {
        position: relative;
        z-index: 2;
    }
    
    /* Estilo do avatar no cabeçalho */
    .chatbot-header-avatar {
        padding: 10px;
        background-color: rgba(68, 68, 68, 0.7);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease;
    }
    
    /* Efeito hover no avatar */
    .chatbot-header-avatar:hover {
        transform: scale(1.1);
    }
    
    /* Container para os perfis de usuário */
    .chatbot-header-profiles {
        display: flex;
    }
    
    /* Estilo das fotos de perfil */
    .chatbot-header-profile-pic {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 2px solid #1e1e1e;
        margin-left: -8px;
        background-size: cover;
        background-position: center;
        transition: transform 0.2s ease;
    }



    /* Efeito hover nas fotos de perfil */
    .chatbot-header-profile-pic:hover {
        transform: translateY(-5px);
        z-index: 5;
    }
    
    /* Imagens dos perfis */
    .chatbot-header-profile-pic:first-child {
        background-image: url(/a/32273cb1-5506-4ae1-987a-84d629f046af);
        margin-left: 0;
    }
    
    .chatbot-header-profile-pic:nth-child(2) {
        background-image: url(/a/a1db8e1c-915f-4d98-a976-88ceaa4c214c);
    }
    
    /* Seção de boas-vindas */
    .chatbot-welcome {
        padding: 25px 20px 15px;
        text-align: left;
        background: linear-gradient(rgb(0, 0, 0), rgba(170, 1, 57, 0.9));
        color: white;
    }
    
    /* Título da seção de boas-vindas */
    .chatbot-welcome-title {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
    }

    /* Título do item de opção */
    .chatbot-option-title {
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 4px;
        transition: color 0.2s ease;
    }
    
    /* Mudança de cor no título ao passar o mouse */
    .chatbot-option-item:hover .chatbot-option-title {
        color:rgb(107, 9, 38);
    }
    
    /* Descrição do item de opção */
    .chatbot-option-description {
        font-size: 12px;
        color: #777;
    }

     }
  `;
  
  };
  
  // Exporta a função
  export { getChatbotStyles };