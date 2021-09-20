import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { USER_DETAILS } from '../../GraphQL/queries/queries';
import { userId } from '../users-list/UsersList';
import './UserDetails.css';

function UserDetails(): JSX.Element {
  const { data, loading, error } = useQuery(USER_DETAILS, { variables: { id: userId } });

  if (loading) {
    return <ClipLoader color={'#000'} size={25} />;
  }

  if (error) {
    alert(error.message);
  }


  return (
    <div className='container'>
      <h2>Detalhes do Usuário</h2>
      <table className='table-container' >
        <tr>
          <th className='table-row'>Nome:</th>
          <td>{data.user.name}</td>
        </tr>
        <tr>
          <th className='table-row'>Email:</th>
          <td>{data.user.email}</td>
        </tr>
        <tr>
          <th className='table-row'>Nascimento:</th>
          <td>{data.user.birthDate}</td>
        </tr>
        <tr>
          <th className='table-row'>Telefone:</th>
          <td>{data.user.phone}</td>
        </tr>
        <tr>
          <th className='table-row'>Ocupação:</th>
          <td>{data.user.role}</td>
        </tr>
      </table>
      <Link to='/users-list'>Users List</Link>
    </div>
  );
}

export default UserDetails;
