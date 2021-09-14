import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { validatePassword, validateEmail } from '../../validations/validations';
import { LOGIN_MUTATION } from '../../GraphQL/mutations/mutations';
import '../../App.css';
import { Link } from 'react-router-dom';
import { usersListPath } from '../users-list/UsersList';
import ClipLoader from 'react-spinners/ClipLoader';

export const loginPagePath = '/';

function LoginPage(): JSX.Element {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event: { target: { name: string; value: string } }) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  function isFormValid() {
    return validateEmail(data.email) && validatePassword(data.password);
  }

  async function submitForm(event: any) {
    event.preventDefault();
    await loginMutation(data.email, data.password);
  }

  const [login, { loading }] = useMutation(LOGIN_MUTATION);

  if (loading) {
    console.log('Loading...');
  }

  const loginMutation = async (email: string, password: string) => {
    if (isFormValid()) {
      try {
        const response = await login({
          variables: {
            email: email,
            password: password,
          },
        });
        localStorage.setItem('authtoken', response.data.login.token);
      } catch (error) {
        alert(error);
      }
    }
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <form className='App-form'>
          <h1>Bem vindo à Taqtile!</h1>
          <label>Email</label>
          <input type='text' name='email' className='Input' onChange={handleInputChange} />
          <label>Senha</label>
          <input type='text' name='password' className='Input' onChange={handleInputChange} />
          {(!loading && (
            <button type='submit' className='Submit-button' onClick={submitForm}>
              Entrar
            </button>
          )) ||
            (loading && (
              <div className='Loading-indicator'>
                <ClipLoader color={'#000'} loading={loading} size={25} />
              </div>
            ))}
        </form>
        <Link to={usersListPath}>Users List</Link>
      </header>
    </div>
  );
}

export default LoginPage;
