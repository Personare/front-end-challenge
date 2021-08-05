import React from "react";
import { createGlobalStyle } from 'styled-components'
import MainPage from './pages/MainPage/MainPage'


function App() {

  const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: #202020;
  }`

  return (
    <div>
      <GlobalStyle />
      TESTE
      <MainPage/>
    </div>
  );
}

export default App;