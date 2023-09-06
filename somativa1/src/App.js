import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  
  
  const usuarios = [
    { email: 'lucas@exemplo.com', senha: '1234' },
    { email: 'exemplo@exemplo.com', senha: 'senha' },
    { email: 'maisum@exemplo.com', senha: '4321' },
  ];

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  const handleLogin = () => {
    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.email === email && usuario.senha === senha
    );

    if (usuarioEncontrado) {
      setMensagem('Acessado com sucesso!');
    } else {
      setMensagem('Usuário ou senha incorretos!');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" value={senha} onChange={handleSenhaChange} />
      </div>
      <button onClick={handleLogin}>Acessar</button>
      <p>{mensagem}</p>
    </div>
  );
}

export default App;
