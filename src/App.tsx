import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <form className='App-form'>
          <h1>Bem vindo à Taqtile!</h1>
          
            <label>Email</label>
            <input type='text' name='email' className='Input' />
          
          
            <label>Senha</label>
            <input type='text' name='senha' className='Input' />
          
          <input type='submit' value='Entrar' className='Submit-button' />
        </form>
      </header>
    </div>
  );
}

export default App;
