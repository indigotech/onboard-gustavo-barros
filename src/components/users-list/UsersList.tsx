import { useQuery } from '@apollo/client';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link, Redirect } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { GET_USERS } from '../../GraphQL/queries/queries';
import { loginPagePath } from '../login-page/LoginPage';
import './UsersList.css';

export const usersListPath = '/users-list';

export interface User {
  id: number;
  name: string;
  email: string;
}

export let userId: number;

function UsersList(): JSX.Element {
  const { loading, error, data } = useQuery(GET_USERS);
  const [canRedirect, setCanRedirect] = useState(false);

  const [pageNumber, setPageNumber] = useState(0);
  const handleChangePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  if (loading) {
    return <ClipLoader color={'#000'} size={25} />;
  }

  if (error) {
    alert(error.message);
  }

  const users = data.users.nodes;
  const usersPerPage = 5;
  const pagesVisited = usersPerPage * pageNumber;
  const pageCount = Math.ceil(users.length / usersPerPage);

  return (
    <div className='Header'>
      <Link to='/add-user'>
        <button className='add-user'>Adicionar usuário</button>
      </Link>
      <h1>Lista de Usuários</h1>
      <div className='List-container'>
        <table className='table-container'>
          <tr>
            <th>Nome</th>
            <th>Email</th>
          </tr>
          {users.slice(pagesVisited, pagesVisited + usersPerPage).map((user: User) => {
            return (
              <tr
                onClick={() => {
                  userId = user.id;
                  setCanRedirect(true);
                }}
              >
                <td className='table-row_users'>{user.name}</td>
                <td className='table-row_users'>{user.email}</td>
              </tr>
            );
          })}
        </table>
        {canRedirect && <Redirect to='/user-details' />}
      </div>
      <div>
        <ReactPaginate
          previousLabel='Previous'
          nextLabel='Next'
          pageCount={pageCount}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          onPageChange={handleChangePage}
          containerClassName={'paginationBttns'}
        />
      </div>
      <Link to={loginPagePath}>Página de Login</Link>
    </div>
  );
}

export default UsersList;
