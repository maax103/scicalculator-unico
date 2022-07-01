import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { ClientCard } from './components/ClientCard';
import { UserContext } from './context/context.js'
import { useState } from 'react';


function App() {

  const [clients, setClients] = useState({
    "1": false,
    "2": false,
    "3": false
  });
  const [sistemas, setsistemas] = useState({
    "practice": false,
    "suprema": false,
    "sucessor": false,
    "controller": false,
    "web": false,
  });

  return (
    <>
      <Header />
      <UserContext.Provider value={{clients, setClients, sistemas, setsistemas}}>
        <ClientCard/>
      </UserContext.Provider>
    </>
  );
}

export default App;
