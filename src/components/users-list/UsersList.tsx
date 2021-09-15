import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { GET_USERS } from '../../GraphQL/queries/queries';
import { loginPagePath } from '../login-page/LoginPage';
import './UsersList.css';

export const usersListPath = '/users-list';

function UsersList(): JSX.Element {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) {
    return <ClipLoader color={'#000'} size={25} />;
  }

  if (error) {
    alert(error);
  }

  const users = data.users.nodes;

  return (
    <div className='Header'>
      <Link to={loginPagePath}>Página de Login</Link>
      <h1>Lista de Usuários</h1>
      <div className='List-container'>
        <div className='Users'>
          <h3>Nome</h3>
        </div>
        <div className='Users'>
          <h3>Email</h3>
        </div>
      </div>
      <div>
        {!error &&
          users.map((user: any) => {
            return (
              <div className='users-list'>
                <div className='container_list-item'>
                  <p className='list-item'>{user.name}</p>
                </div>
                <div className='container_list-item'>
                  <p className='list-item'>{user.email}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default UsersList;
