import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { validateEmail, validateNameAndRole, validatePhone } from '../../validations/validations';
import { usersListPath } from '../users-list/UsersList';

function AddUserPage(): JSX.Element {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleNameChange = (event: { target: { value: string } }) => {
    setName(event.target.value);
  };
  const handlePhoneChange = (event: { target: { value: string } }) => {
    setPhone(event.target.value);
  };
  const handleBirthDateChange = (event: { target: { value: any } }) => {
    setBirthDate(event.target.value);
  };
  const handleEmailChange = (event: { target: { value: string } }) => {
    setEmail(event.target.value);
  };
  const handleRoleChange = (event: { target: { value: string } }) => {
    setRole(event.target.value);
  };

  function submitForm() {
    validateNameAndRole(name, role);
    validatePhone(phone);
    validateEmail(email);
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
        <form className='App-form' onSubmit={submitForm}>
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
          <label>Ocupação</label>
          <input type='text' name='role' required className='Input' onChange={handleRoleChange} />
          <input type='submit' value='Adicionar usuário' className='Submit-button' />
        </form>
      </header>
    </div>
  );
}

export default AddUserPage;
