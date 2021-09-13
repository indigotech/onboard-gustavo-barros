import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BlankPage from './components/blank-page/Blank';
import LoginPage from './components/login-page/LoginPage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route path='/blank' component={BlankPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
