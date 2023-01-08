import Card from "./components/Card";
import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    padding: 0;
    margin: 0;
    background-color: #030303;
    justify-items: center;
    
  }
  
  `;

const App = () => {
    return (
        <div>
            <Header />
            <Card />
            <GlobalStyle />
        </div>
    );
};

export default App;
