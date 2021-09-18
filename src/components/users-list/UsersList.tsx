import { useQuery } from '@apollo/client';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { GET_USERS } from '../../GraphQL/queries/queries';
import { loginPagePath } from '../login-page/LoginPage';
import './UsersList.css';

export const usersListPath = '/users-list';

function UsersList(): JSX.Element {
  const { loading, error, data } = useQuery(GET_USERS);

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

  const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map((user: any) => {
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
  });

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
        {!error ? displayUsers : alert(error.message)}
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
    </div>
  );
}

export default UsersList;
