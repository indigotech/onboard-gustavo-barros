import { useState } from 'react';
import { gql, useMutation, ApolloClient, InMemoryCache } from '@apollo/client';
import './App.css';

export const client = new ApolloClient({
  uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

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
    return true;
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
    return true;
  }

  async function validForm() {
    return (validateEmail(data.email) && validatePassword(data.password));
  }

  async function validateForm  (event: any){
    event.preventDefault();
    validateEmail(data.email);
    validatePassword(data.password);
    await loginMutation(data.email, data.password);
  }

  const LOGIN_MUTATION = gql`
    mutation login(
      $email: String!,
      $password: String!
    ) {
      login(
        data: {
          email: $email
          password: $password
        }
      ) {
        token
      }
    } 
  `;

  const [login, { loading }] = useMutation(LOGIN_MUTATION);

  if (loading) {
    console.log('Loading...');
  }

  const loginMutation = async (email: string, password: string) => {

    if (await validForm()) {
      try {
        const response = await login({
          variables: {
            email: email,
            password: password
          }
        })
        localStorage.setItem(data.email, response.data.login.token);
      } catch (error) {
      alert(error);
      } 
    } 
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
