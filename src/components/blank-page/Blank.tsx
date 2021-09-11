import { Link } from 'react-router-dom';
import { formPath } from '../form/Form';
import './Blank.css';

export const blankPagePath = 'blank'; 

function BlankPage(): JSX.Element {
  return (
    <>
      <h1 className='Header'>Teste</h1>
      <Link to={formPath}>Form</Link>
    </>
  );
}

export default BlankPage;
