import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import '../../App.css';
import { CREATE_USER } from '../../GraphQL/mutations/mutations';
import { validateEmail, validateName, validatePassword, validatePhone } from '../../validations/validations';
import { usersListPath } from '../users-list/UsersList';

function AddUserPage(): JSX.Element {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [canRedirect, setCanRedirect] = useState(false);
  const [createUser, { loading }] = useMutation(CREATE_USER);

  if (loading) {
    return <ClipLoader color={'#000'} size={25} />;
  }

  const handleNameChange = (event: { target: { value: string } }) => {
    setName(event.target.value);
  };
  const handlePhoneChange = (event: { target: { value: string } }) => {
    setPhone(event.target.value);
  };
  const handleBirthDateChange = (event: { target: { value: string } }) => {
    setBirthDate(event.target.value);
  };
  const handleEmailChange = (event: { target: { value: string } }) => {
    setEmail(event.target.value);
  };
  const handleRoleChange = (event: { target: { value: string } }) => {
    setRole(event.target.value);
  };
  const handlePasswordChange = (event: { target: { value: string } }) => {
    setPassword(event.target.value);
  };

  function isFormValid() {
    return validateName(name) && validatePhone(phone) && validateEmail(email) && validatePassword(password);
  }

  async function submitForm() {
    await newUser(name, email, phone, birthDate, role, password);
  }

  async function newUser(
    name: string,
    email: string,
    phone: string,
    birthDate: string,
    role: string,
    password: string,
  ) {
    if (isFormValid()) {
      try {
        await createUser({
          variables: {
            data: { name: name, email: email, phone: phone, birthDate: birthDate, password: password, role: role },
          },
        });
        setCanRedirect(true);
      } catch (error) {
        alert(error);
      }
    }
  }
  const today = new Date();
  const intDay = today.getDate();
  const intMonth = today.getMonth() + 1;
  const year = today.getFullYear();

  const stringMonth: string = intMonth < 10 ? '0' + intMonth.toString() : intMonth.toString();
  const stringDay: string = intDay < 10 ? '0' + intDay.toString() : intDay.toString();

  const todayString: string = year.toString() + '-' + stringMonth + '-' + stringDay;

  return (
    <div className='App'>
      <header className='App-header'>
        <Link to='/'>Login</Link>
        <Link to={usersListPath}>Lista de Usuários</Link>
        <div className='App-form'>
          <h1 className='form-title'>Novo usuário</h1>
          <label>Nome</label>
          <input type='text' name='name' required className='Input' onChange={handleNameChange} />
          <label>Telefone</label>
          <input type='text' name='phone' required className='Input' onChange={handlePhoneChange} />
          <label>Data de nascimento</label>
          <input
            type='date'
            min='1900-01-01'
            max={todayString}
            name='birthDate'
            required
            className='Input'
            onChange={handleBirthDateChange}
          />
          <label>E-mail</label>
          <input type='text' name='email' required className='Input' onChange={handleEmailChange} />
          <label>Senha</label>
          <input type='text' name='password' required className='Input' onChange={handlePasswordChange} />
          <label>Ocupação</label>
          <select name='role' required onChange={handleRoleChange}>
            <option value=''></option>
            <option value='user'>Usuário</option>
            <option value='admin'>Admin</option>
          </select>
          <input type='submit' value='Adicionar usuário' className='Submit-button' onClick={submitForm} />
        </div>
      </header>
      {canRedirect && <Redirect to={usersListPath} />}
    </div>
  );
}

export default AddUserPage;
