import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UsersList from './components/users-list/UsersList';
import LoginPage from './components/login-page/LoginPage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route path='/users-list' component={UsersList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
