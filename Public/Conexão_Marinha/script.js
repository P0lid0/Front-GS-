//LOGIN
document.getElementById('loginButton').addEventListener('click', function() {
    const username = prompt('Usuário:');
    const password = prompt('Senha:');

    if (username === 'admin' && password === '1234') {
        alert('Login bem-sucedido!');
    } else {
        alert('Nome de usuário ou senha incorretos.');
    }
});


