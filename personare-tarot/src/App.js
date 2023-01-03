import React, {useState, useEffect} from "react";
import { Cards } from "./components/HomePage/cards";

import { cards } from "./components/HomePage/cartas";
import './App.css'

export function App() {

     //embaralhar cartas???
     function shuffle  () { cards[Math.floor(Math.random() * 78)] 
     shuffle() }
     
     console.log(cards)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Personare Tarot</h1>
        <button onClick={()=>shuffle()}>Iniciar Jogo!</button>
      </header>
      <Cards />

    </div>
  )
};

export default App;
