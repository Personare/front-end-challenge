import React, {useState, useEffect} from "react";
import { Cards } from "./components/HomePage/cards";
import './App.css';


export function App() {
         
  return (
    <div className="App">
      <header className="App-header">
        <h1>Personare Tarot</h1>
       
        
      </header>
      <Cards />

    </div>
  )
};

export default App;
