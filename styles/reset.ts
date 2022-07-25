import {createGlobalStyle} from "styled-components"

const Reset = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body{
    height: 100%;
  }

  body{
    display: grid;
    place-items: center;
    background-image: url('background.jpg');
    background-size: cover;
    background-attachment: fixed;
    overflow-y: auto;
    overflow-x: hidden;
    font-size: 16px;
    font-family: Helvetica, sans-serif;
  }
`
export default Reset
