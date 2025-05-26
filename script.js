function sendMessage() {
  const input = document.getElementById('user-input');
  const chatWindow = document.getElementById('chat-window');
  const userText = input.value.trim();
  
  if (userText === '') return;

  // Adiciona a mensagem do usuário
  chatWindow.innerHTML += `<div class="chat-message user">${userText}</div>`;

  // Respostas simuladas
  let botResponse = getBotResponse(userText);

  // Adiciona a resposta do bot com pequeno delay
  setTimeout(() => {
    chatWindow.innerHTML += `<div class="chat-message bot">${botResponse}</div>`;
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, 500);

  input.value = '';
}

function getBotResponse(message) {
  const msg = message.toLowerCase();

  if (msg.includes('tema')) return "Escolher um tema depende da sua área de interesse. Quer sugestões?";
  if (msg.includes('objetivo')) return "Um bom objetivo deve ser claro, mensurável e relacionado ao problema de pesquisa.";
  if (msg.includes('problema')) return "O problema do TCC deve representar uma dúvida ou necessidade real.";
  if (msg.includes('metodologia')) return "Você pretende fazer uma pesquisa qualitativa, quantitativa ou mista?";
  if (msg.includes('referência')) return "Use normas ABNT, APA ou conforme exigido pela sua instituição.";

  return "Desculpe, não entendi. Pode reformular a pergunta sobre seu TCC?";
}
