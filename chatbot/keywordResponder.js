// Sistema de resposta automática baseado em palavras-chave ou números
export const keywordResponder = {
  // Mapeia palavras-chave para respostas específicas
  keywordMap: {
    "preço": "Temos diversos planos de preços adaptados às suas necessidades. Posso te enviar mais informações sobre valores?",
    "valor": "Nossos valores variam de acordo com o plano escolhido. Você está interessado em um plano específico?",
    "plano": "Oferecemos planos Básico, Premium e Enterprise. Qual deles te interessa mais?",
    "ajuda": "Estou aqui para ajudar! Diga-me qual sua dúvida específica para que eu possa te auxiliar melhor.",
    "suporte": "Nossa equipe de suporte está disponível 24/7. Qual o problema que você está enfrentando?",
    "contato": "Você pode entrar em contato conosco pelo telefone (11) 9999-9999 ou pelo email contato@botconversa.com",
    "horário": "Nosso horário de atendimento é de segunda a sexta, das 8h às 18h.",
    "1": "Você selecionou conhecer nossos serviços. Oferecemos chatbots inteligentes, integração com WhatsApp, Facebook e Instagram, além de automação de marketing.",
    "2": "Você selecionou suporte técnico. Por favor, descreva o problema que está enfrentando para que possamos ajudar.",
    "3": "Você optou por falar com um atendente. Em instantes um de nossos colaboradores entrará em contato."
  },
  
  // Analisa a mensagem em busca de palavras-chave
  analyzeMessage(message) {
    // Converte a mensagem para minúsculas para facilitar a comparação
    const lowerMessage = message.toLowerCase();
    
    // Verifica cada palavra-chave no mapa
    for (const keyword in this.keywordMap) {
      // Se a mensagem contém a palavra-chave ou é exatamente igual a ela (para números)
      if (lowerMessage.includes(keyword) || lowerMessage === keyword) {
        return this.keywordMap[keyword];
      }
    }
    
    // Verifica se a mensagem contém apenas números
    if (/^[1-3]$/.test(message.trim())) {
      return this.keywordMap[message.trim()];
    }
    
    // Se nenhuma palavra-chave for encontrada, retorna uma resposta padrão
    return null;
  },
  
  // Gera uma resposta com base na análise da mensagem
  generateResponse(message) {
    const response = this.analyzeMessage(message);
    
    if (response) {
      return response;
    }
    
    // Resposta padrão caso nenhuma palavra-chave seja encontrada
    return "Obrigado pela sua mensagem! Em breve um atendente entrará em contato.";
  }
};