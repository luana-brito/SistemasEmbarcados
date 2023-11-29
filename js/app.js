// Arquivo: app.js
document.addEventListener('DOMContentLoaded', function() {
  // Referência aos elementos
  const loadingPage = document.getElementById('loading-page');
  const content = document.getElementById('content');
  const startButton = document.getElementById('start-button');

  // Simula um atraso de 5 segundos para carregar os dados (alterado para 5 segundos para o exemplo)
  const delay = 5000;

  // Após o tempo de atraso, esconde o logo e exibe o conteúdo principal
  setTimeout(function() {
    loadingPage.style.display = 'none';
    content.style.display = 'block';
  }, delay);

  // Adiciona um evento de clique ao botão "Começar"
  startButton.addEventListener('click', function() {
    // Exemplo de redirecionamento para outra página
    window.location.href = '/html/inicio.html';
  });
});
