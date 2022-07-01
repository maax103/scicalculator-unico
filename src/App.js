import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Card } from './components/Card';
import {UserContext} from './context/context.js'
import { useState } from 'react';


function App() {

  const [client, setClient] = useState({});

  return (
    <>
      <Header />
      <UserContext.Provider value="Hello World">
        <Card tittle='Cliente' />
      </UserContext.Provider>
    </>
  );
}

export default App;
