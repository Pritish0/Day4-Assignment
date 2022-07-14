import './App.css';
import React,{useState} from 'react';
import { AppContext } from "./libs/Contextlibs";
import Parent from './Components/Parent';

function App() {

  const [counter, setCounter] = useState(0);
  
  return (
    <div className="App">
      <AppContext.Provider
        value={{
          counter,
          setCounter
        }}
      >
        <Parent />
      </AppContext.Provider>
    </div>
  );
}

export default App;
