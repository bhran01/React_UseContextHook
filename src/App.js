import { createContext } from 'react';
import './App.css';
import A from './pages/A';

export const myContext= createContext();

function App() {
  let info = {
    name:"Rajeev",
    surname:"das",
    mobno:"979797987",
  }


  return (
    <>
    <myContext.Provider value={info}>
    <A/>
    </myContext.Provider>
    </>
  );
}

export default App;
