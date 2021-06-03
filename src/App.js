import './App.css';
import UserList from './components/UserCardList';
import Theme from './components/Theme';
import AdminInfo from './components/AdminInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AdminInfo />
        <Theme />
        <UserList/>
      </header>
    </div>
  );
}

export default App;
