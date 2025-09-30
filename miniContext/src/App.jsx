 
import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import { useState } from 'react';
import UserContext from './context/UserContext';

function App() {
  
 const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <h1>react</h1>
      <Login />
      <Profile />
    </UserContext.Provider>
  );
}

export default App
