import { createGlobalStyle } from "styled-components";
import GlobalState from "./global/GlobalState";
import Screen from "./Screen";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;    
    padding: 0;
    
  }
  
  body {
    background-color: #c6c6c6;
    font-family: Verdana, Helvetica, sans-serif;
  }
`;

const App: React.FC = () => {
  return (
    <GlobalState>
      <GlobalStyle />
      <Screen />
    </GlobalState>
  );
};
export default App;
