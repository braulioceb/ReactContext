import './App.css'
import UserList from './components/UserCardList';
import Theme from './components/Theme'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Theme />
        <UserList/>
      </header>
    </div>
  );
}

export default App;
