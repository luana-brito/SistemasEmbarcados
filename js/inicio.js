// Arquivo: login.js
document.addEventListener('DOMContentLoaded', function() {
    const requestAccountButton = document.querySelector('.request-account-button');
    const loginButton = document.querySelector('.login-button');
  
    // Adiciona um evento de clique ao botão "Solicitar Conta"
    requestAccountButton.addEventListener('click', function() {
      window.location.href = '/html/cadastro.html'; // Substitua pelo caminho da sua página de solicitação de conta
    });
  
    // Adiciona um evento de clique ao botão "Entrar"
    loginButton.addEventListener('click', function() {
      window.location.href = '/html/login.html'; // Substitua pelo caminho da sua página de login
    });
  });
  