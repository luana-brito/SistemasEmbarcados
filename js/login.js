function validarFormulario() {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
  
    if (usuario === '' || senha === '') {
      alert('Por favor, preencha todos os campos.');
    } else if (usuario === '12053858435' && senha === '1234') {
      // Substitua 'seuUsuario' e 'suaSenha' pelos valores reais de usuário e senha que você espera
      redirecionar(); // Chama a função de redirecionamento
    } else {
      alert('Credenciais inválidas. Por favor, verifique seu usuário e senha.');
    }
  }
  
  function redirecionar() {
    // Substitua 'pagina-de-destino.html' pela URL da página para a qual você deseja redirecionar
    window.location.href = '/html/home.html';
  }
  