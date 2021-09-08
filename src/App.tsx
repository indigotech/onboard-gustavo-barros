import { useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (event: { target: { name: string; value: string; }; }) => {
    setData({
      ...data,
      [event.target.name] : event.target.value
    })
  }

  const validateEmail = (email: string ) => {
    const validEmailRegex = /\S+@\S+\.\S+/;

    if (email.length == 0) {
      alert('Email is a required field');
      return false;
    }

    if (!validEmailRegex.test(email)) {
      alert('Inform a valid email');
      return false;
    }
  }

  const validatePassword = (password: string) => {
    const findDigitRegex = /[0-9.,]/;
    const findLetterRegex = /[A-z.,]|[a-z.,]/;
    
    if (password.length == 0) {
      alert('Passsword is a required field');
      return false;
    }

    if (password.length < 7) {
      alert('Password must have at least 7 characters');
      return false;
    }
    
    if (!findDigitRegex.test(password) || !findLetterRegex.test(password)) {
      alert('Password must have at least one digit and one letter');
      return false;
    }
  }

  const validateForm = () => {
    validateEmail(data.email);
    validatePassword(data.password);
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
