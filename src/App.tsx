import { useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (evento: { target: { name: string; value: string; }; }) => {
    setData({
      ...data,
      [evento.target.name] : evento.target.value
    })
  }

  const validateEmail = () => {
    const re = /\S+@\S+\.\S+/;

    if (data.email.length == 0) {
      alert('Email is a required field');
      return false;
    }

    if (!re.test(data.email)) {
      alert('Inform a valid email');
      return false;
    }
  }

  const validatePassword = () => {
    const reDigit = /[0-9.,]/;
    const reLetter = /[A-z.,]|[a-z.,]/;
    
    if (data.password.length == 0) {
      alert('Passsword is a required field');
      return false;
    }

    if (data.password.length < 7) {
      alert('Password must have at least 7 characters');
      return false;
    }
    
    if (!reDigit.test(data.password) || !reLetter.test(data.password)) {
      alert('Password must have at least one digit and one letter');
      return false;
    }
  }

  const validateForm = () => {
    validateEmail();
    validatePassword();
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <form className='App-form'>
          <h1>Bem vindo à Taqtile!</h1>
          <label>Email</label>
          <input 
            type='text' 
            name='email' 
            className='Input' 
            onChange={handleInputChange} />
          <label>Senha</label>
          <input 
            type='text' 
            name='password' 
            className='Input'
            onChange={handleInputChange} />
          <input type='submit' value='Entrar' className='Submit-button' onClick={validateForm} />
        </form>
      </header>
    </div>
  );
}

export default App;
