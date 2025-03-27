// Utilitário para formatação de mensagens
// Este arquivo ajuda a garantir que as mensagens sejam exibidas corretamente no chat

export const formatMessageText = (text) => {
  // Garante que as quebras de linha sejam preservadas e que o texto não exceda os limites
  if (!text) return '';
  
  // Remove espaços excessivos
  let formattedText = text.trim();
  
  // Substitui URLs por links clicáveis (opcional)
  formattedText = formattedText.replace(
    /((https?:\/\/|www\.)[^\s]+)/g, 
    '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
  );
  
  return formattedText;
};

// Função para limitar o texto de prévia (para a lista de conversas)
export const formatPreviewText = (text, maxLength = 30) => {
  if (!text) return '';
  
  // Remove tags HTML
  const plainText = text.replace(/<[^>]*>/g, '');
  
  // Limita o tamanho e adiciona reticências se necessário
  if (plainText.length > maxLength) {
    return plainText.substring(0, maxLength) + '...';
  }
  
  return plainText;
};