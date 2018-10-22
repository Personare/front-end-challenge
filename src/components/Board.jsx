import React from "react";
import styled from "styled-components";
import context from "../context";

const { Consumer } = context;

const Board = ({ children }) => {
  return (
    <Consumer>{({ doSomething }) => <div id="board">{children}</div>}</Consumer>
  );
};

export default Board;
