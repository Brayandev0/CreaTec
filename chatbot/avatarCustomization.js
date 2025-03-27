// Arquivo para customização de avatares de perfil para o chatbot
export const setupAvatarCustomization = () => {
  // Define imagens de fundo para os avatares
  const avatarBackgrounds = [
    { backgroundColor: 'none', backgroundImage: './arts/eduardoR.jpg' }, // Azul
    { backgroundColor: '#nonr', backgroundImage: 'none' }, // Vermelho
    { backgroundColor: '#none', backgroundImage: 'none' }  // Verde
  ];
  
  // Aplica as imagens de fundo aos perfis
  const applyAvatarBackgrounds = () => {
    const profilePics = document.querySelectorAll('.chatbot-header-profile-pic');
    profilePics.forEach((pic, index) => {
      if (index < avatarBackgrounds.length) {
        Object.assign(pic.style, avatarBackgrounds[index]);
      }
    });
  };
  
  // Função para atualizar um avatar específico
  const updateAvatar = (index, newBackground) => {
    if (index >= 0 && index < avatarBackgrounds.length) {
      avatarBackgrounds[index] = newBackground;
      applyAvatarBackgrounds();
    }
  };
  
  // Inicialização
  applyAvatarBackgrounds();
  
  // Retorna métodos públicos
  return {
    updateAvatar
  };
};