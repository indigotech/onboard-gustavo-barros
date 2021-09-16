import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UsersList from './components/users-list/UsersList';
import LoginPage from './components/login-page/LoginPage';
import { ApolloProvider } from '@apollo/client';
import { clientUsersRequest } from './GraphQL/queries/queries';
import AddUserPage from './components/add-user-page/AddUserPage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route path='/add-user' component={AddUserPage} />
        <Route path='/users-list'>
          <ApolloProvider client={clientUsersRequest}>
            <UsersList />
          </ApolloProvider>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
