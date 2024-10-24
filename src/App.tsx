import React from 'react';
import './App.css';
import UserList from './components/UserList';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Consumindo uma API com React e TypeScript</h1>
      <UserList />

    </div>
  );
}

export default App;
