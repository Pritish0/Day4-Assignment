import './App.css';
import React,{useState} from 'react';
import { AppContext } from "./libs/Contextlibs";
import Dashboard from './Components/Dashboard';

function App() {

  const [title] = useState('Techmojo');
  const [username] = useState('Pritishnair');
  const [activeProfileId] = useState('3418');
  
  return (
    <div className="App">
      <AppContext.Provider
        value={{
          title,
          username,
          activeProfileId
        }}
      >
        <Dashboard />
      </AppContext.Provider>
    </div>
  );
}

export default App;
