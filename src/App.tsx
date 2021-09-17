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
    font-family: Arial, Helvetica, sans-serif;
    padding: 20px;
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
