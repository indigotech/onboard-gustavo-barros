import { Link } from 'react-router-dom';
import { loginPagePath } from '../login-page/LoginPage';
import './UsersList.css';
import { GET_USERS } from '../../GraphQL/queries/queries';
import { useQuery } from '@apollo/client';
import ClipLoader from 'react-spinners/ClipLoader';

export const usersListPath = '/users-list';

function UsersList(): JSX.Element {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) {
    return <ClipLoader color={'#000'} size={25} />;
  }

  if (error) {
    console.log(error);
  }

  const users = data.users.nodes;

  return (
    <>
      <div className='Header'>
        <Link to={loginPagePath}>Login Page</Link>
        <h1>Lista de Usuários</h1>
        <div className='List-container'>
          <div className='Users'>
            <h3>Nome</h3>
            {users.map((user: any) => {
              return <p>{user.name}</p>;
            })}
          </div>
          <div>
            <h3>Email</h3>
            {users.map((user: any) => {
              return <p>{user.email}</p>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default UsersList;
