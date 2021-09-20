import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UsersList from './components/users-list/UsersList';
import LoginPage from './components/login-page/LoginPage';
import { ApolloProvider } from '@apollo/client';
import { clientUsersRequest } from './GraphQL/queries/queries';
import AddUserPage from './components/add-user-page/AddUserPage';
import UserDetails from './components/user-details-page/UserDetails';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <ApolloProvider client={clientUsersRequest}>
          <Route path='/users-list'>
            <UsersList />
          </Route>
          <Route path='/add-user'>
            <AddUserPage />
          </Route>
          <Route path='/user-details'>
            <UserDetails />
          </Route>
        </ApolloProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
