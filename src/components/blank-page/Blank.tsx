import { Link } from 'react-router-dom';
import { loginPagePath } from '../login-page/LoginPage';
import './Blank.css';

export const blankPagePath = 'blank'; 

function BlankPage(): JSX.Element {
  return (
    <>
      <h1 className='Header'>Teste</h1>
      <Link to={loginPagePath}>LoginPage</Link>
    </>
  );
}

export default BlankPage;
