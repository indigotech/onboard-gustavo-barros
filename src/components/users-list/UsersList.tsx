import { Link } from 'react-router-dom';
import { loginPagePath } from '../login-page/LoginPage';
import './UsersList.css';

export const usersListPath = '/users-list';

const users = [
  {
    email: 'gustavo@gmail.com',
    name: 'gustavo',
  },
  {
    email: 'gabrilea@gmail.com',
    name: 'gabriela',
  },
];

function UsersList(): JSX.Element {
  return (
    <>
      <h1>Lista de Usuários</h1>
      <div className='List-container'>
        <div className='Users'>
          <h3>Nome</h3>
          {users.map((user) => {
            return <p>{user.name}</p>;
          })}
        </div>
        <div>
          <h3>Email</h3>
          {users.map((user) => {
            return <p>{user.email}</p>;
          })}
        </div>
      </div>
      <Link to={loginPagePath}>Login Page</Link>
    </>
  );
}

export default UsersList;
