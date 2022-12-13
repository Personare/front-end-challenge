import { Cards } from "./components/Cartas/cards";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Personare Tarot</h2>
      </header>
      <div id="carta">
          <Cards/>
        </div>
    </div>
  );
}

export default App;
