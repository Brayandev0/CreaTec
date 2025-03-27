// Arquivo contendo o CSS do chatbot
// Este arquivo é carregado pelo script.js principal

// Função que retorna o CSS do chatbot
const getChatbotStyles = () => {
  return `
/* Estilos específicos para cada elemento ao invés de reset global */
.chatbot-container {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    max-width: 400px;
    height: 600px;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    position: fixed;
    bottom: 120px;
    right: 20px;
    transition: transform 0.3s ease, opacity 0.3s ease;
    z-index: 999;
    font-family: Arial, sans-serif;
}

.chatbot-screen {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: none;
    flex-direction: column;
    height: 100%;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
}

.chatbot-header {
    margin: 0;
    padding: 25px 20px;
    box-sizing: border-box;
    background-color: #1e1e1e;
    background-image: url(/a/0427a186-f83a-4165-8a95-3c9e4d5971cc);
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: space-between;
    color: white;
    position: relative;
}

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

.chatbot-header-avatar,
.chatbot-header-profile {
    position: relative;
    z-index: 2;
}

.chatbot-header-avatar {
    margin: 0;
    padding: 10px;
    box-sizing: border-box;
    background-color: rgba(68, 68, 68, 0.7);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
}

.chatbot-header-avatar:hover {
    transform: scale(1.1);
}

.chatbot-header-profiles {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
}

.chatbot-header-profile-pic {
    margin: 0 0 0 -8px;
    padding: 0;
    box-sizing: border-box;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid #1e1e1e;
    background-size: cover;
    background-position: center;
    transition: transform 0.2s ease;
    position: relative;
    overflow: hidden;
}

.chatbot-header-profile-pic:hover {
    transform: translateY(-5px);
    z-index: 5;
}

.chatbot-header-profile-pic:first-child {
    margin-left: 0;
    background-color: #3498db;
}

.chatbot-header-profile-pic:nth-child(2) {
    background-color: #e74c3c;
}

.chatbot-header-profile-pic:nth-child(3) {
    background-color: #2ecc71;
}

.chatbot-welcome {
    margin: 0;
    padding: 25px 20px 15px;
    box-sizing: border-box;
    text-align: left;
    background: linear-gradient(rgba(0, 0, 0, 0.98), rgba(121, 13, 45, 0.9));
    color: white;
}

.chatbot-welcome-title {
    margin: 0 0 8px 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 28px;
    font-weight: bold;
    display: flex;
    align-items: center;
}

.chatbot-welcome-title::after {
    content: '👋';
    margin-left: 10px;
    animation: wave 1.5s infinite;
}

@keyframes wave {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(20deg); }
    50% { transform: rotate(0deg); }
    75% { transform: rotate(-20deg); }
    100% { transform: rotate(0deg); }
}

.chatbot-welcome-subtitle {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 18px;
    color: #ccc;
}

.chatbot-options {
    margin: 0;
    padding: 15px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: #f7f7f7;
    overflow-y: auto;
}

.chatbot-option-item {
    margin: 0 0 12px 0;
    padding: 16px;
    box-sizing: border-box;
    background-color: white;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    transition: all 0.3s ease;
    border: 1px solid transparent;
}

.chatbot-option-content {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    flex-grow: 1;
}

.chatbot-option-title {
    margin: 0 0 4px 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 500;
    transition: color 0.2s ease;
}

.chatbot-option-description {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 14px;
    color: #777;
}

.chatbot-option-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    border-color: #ddd;
}

.chatbot-option-item:hover .chatbot-option-title {
    color:rgb(100, 11, 48);
}

.chatbot-send-message-btn {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #2b2b2b;
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

.chatbot-send-message-btn:hover {
    background-color:rgb(109, 14, 45);
    transform: scale(1.1);
}

.chatbot-option-icon {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #444;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.chatbot-option-item:hover .chatbot-option-icon {
    background-color: #f0f0f0;
    transform: rotate(15deg);
}

.chatbot-navigation {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    border-top: 1px solid #eee;
    margin-top: auto;
    background-color: white;
}

.chatbot-nav-button {
    margin: 0;
    padding: 12px;
    box-sizing: border-box;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    color: #555;
    cursor: pointer;
    transition: all 0.3s ease;
}

.chatbot-nav-button:hover {
    background-color: #f5f5f5;
}

.chatbot-nav-button.active {
    color: #000;
    font-weight: bold;
}

.chatbot-nav-button svg {
    margin: 0 0 4px 0;
    padding: 0;
    box-sizing: border-box;
    transition: transform 0.3s ease;
}

.chatbot-nav-button:hover svg {
    transform: translateY(-3px);
}

.chatbot-messages-header {
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    text-align: center;
}

.chatbot-messages-title {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 500;
}

.chatbot-messages-list {
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
    flex-grow: 1;
    overflow-y: auto;
}

.chatbot-message-item {
    margin: 0 0 16px 0;
    padding: 8px;
    box-sizing: border-box;
    display: flex;
    cursor: pointer;
    transition: background-color 0.2s;
    position: relative;
}

.chatbot-chat-delete-button {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: absolute;
    top: 5px;
    right: 5px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 1;
    transition: background-color 0.2s ease;
}

.chatbot-chat-delete-button:hover {
    background-color: rgba(0, 0, 0, 0.2);
}

.chatbot-message-avatar {
    margin: 0 12px 0 0;
    padding: 0;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: url(./arts/ryan.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    flex-shrink: 0;
}

.chatbot-message-content {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    flex-grow: 1;
}

.chatbot-message-text {
    margin: 0 0 4px 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 14px;
}

.chatbot-message-info {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 12px;
    color: #888;
}

.chatbot-messages-compose {
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
    border-top: 1px solid #eee;
}

.chatbot-compose-button {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    background-color: #2b2b2b;
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

.chatbot-screen-chat {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: none;
    flex-direction: column;
    height: 100%;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #f9f9f9;
}

.chatbot-chat-header {
    margin: 0;
    padding: 15px;
    box-sizing: border-box;
    background-color: #1e1e1e;
    display: flex;
    align-items: center;
    color: white;
}

.chatbot-back-button {
    margin: 0 15px 0 0;
    padding: 0;
    box-sizing: border-box;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.chatbot-chat-info {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    flex-grow: 1;
}

.chatbot-chat-title {
    margin: 0 0 2px 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 500;
}

.chatbot-chat-status {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 12px;
    color: #aaa;
}

.chatbot-chat-messages {
    margin: 0;
    padding: 15px;
    box-sizing: border-box;
    flex-grow: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
}

.chatbot-message {
    margin: 0 0 10px 0;
    padding: 10px 15px;
    box-sizing: border-box;
    max-width: 80%;
    border-radius: 18px;
    font-size: 14px;
    line-height: 1.4;
    position: relative;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: pre-wrap;
}

.chatbot-message-received {
    margin: 0;
    padding: 3px, 30px;
    box-sizing: border-box;
    align-self: flex-start;
    background-color: #e6e6e6;
    color: #333;
    border-bottom-left-radius: 5px;
}

.chatbot-message-received div {
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: break-word;
    max-width: 100%;
}

.chatbot-message-sent {
    margin: 0;
    padding: 3px, 30px;
    box-sizing: border-box;
    align-self: flex-end;
    background-color: #2b2b2b;
    color: white;
    border-bottom-right-radius: 5px;
}

.chatbot-message-time {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 11px;
    color: #888;
    margin-top: 5px;
    text-align: right;
}

.chatbot-chat-input {
    margin: 0;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    border-top: 1px solid #eee;
    background-color: white;
}

.chatbot-message-input {
    margin: 0;
    padding: 10px 15px;
    box-sizing: border-box;
    flex-grow: 1;
    border: none;
    border-radius: 20px;
    background-color: #f1f1f1;
    margin-right: 10px;
    outline: none;
}

.chatbot-send-button {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #2b2b2b;
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

.chatbot-toggle-button {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: fixed;
    bottom: 60px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color:rgb(43, 43, 43);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1000;
    transition: transform 0.3s ease, background-color 0.3s ease;
}

.chatbot-toggle-button:hover {
    transform: scale(1.1);
    background-color:rgb(114, 16, 32);
}

.chatbot-toggle-button svg {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    fill: white;
}

.chatbot-icon-close {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: none;
}

.chatbot-container:not(.hidden) ~ .chatbot-toggle-button .chatbot-icon-chat {
    display: none;
}

.chatbot-container:not(.hidden) ~ .chatbot-toggle-button .chatbot-icon-close {
    display: block;
}

.chatbot-message-delete-icon {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 1;
    transition: background-color 0.2s ease;
    display: none;
}

.chatbot-message-delete-icon:hover {
    background-color: rgba(0, 0, 0, 0.2);
}

.chatbot-delete-confirmation {
    margin: 0;
    padding: 10px;
    box-sizing: border-box;
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 8px;
    z-index: 10;
}

.chatbot-delete-confirmation p {
    margin: 0 0 10px 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 14px;
    text-align: center;
}

.chatbot-delete-confirmation-buttons {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
}

.chatbot-delete-confirmation button {
    margin: 0;
    padding: 6px 12px;
    box-sizing: border-box;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
}

.chatbot-delete-cancel {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f1f1f1;
    color: #333;
}

.chatbot-delete-confirm {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #e74c3c;
    color: white;
}

.chatbot-message-sent .chatbot-delete-confirmation {
    left: auto;
    right: 0;
}

.chatbot-message-received .chatbot-delete-confirmation {
    left: 0;
    right: auto;
}

@media (max-width: 768px) {
    .chatbot-container {
        max-width: 100%;
        height: 100%;
        border-radius: 0;
        bottom: 0;
        right: 0;
        left: 0;
        top: 0;
        font-family: Arial, sans-serif;
    }
    
    .chatbot-toggle-button {
        bottom: 60px !important;
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
        padding: 30px;
    }
    
    .chatbot-message {
        max-width: 85%;
    }
}

.chatbot-container.hidden {
    transform: translateY(20px);
    opacity: 0;
    pointer-events: none;
}

.chatbot-screen.active {
    display: flex;
}


`;

};

// Exporta a função
export { getChatbotStyles };