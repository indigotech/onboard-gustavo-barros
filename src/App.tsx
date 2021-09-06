import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <form className='App-form'>
          <h1>Bem vindo à Taqtile!</h1>
          <div className='App-form'>
            <p>Email</p>
            <input type='text' name='email' className='Input' />
          </div>
          <div className='App-form'>
            <p>Senha</p>
            <input type='text' name='senha' className='Input' />
          </div>
          <input type='submit' value='Entrar' className='Submit-button' />
        </form>
      </header>
    </div>
  );
}

export default App;
