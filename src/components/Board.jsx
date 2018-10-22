import React from "react";
import styled from "styled-components";
import context from "../context";

const { Consumer } = context;

const Board = ({ className, children }) => {
  return (
    <Consumer>
      {({ doSomething }) => (
        <div id="board" className={className}>
          {children}
        </div>
      )}
    </Consumer>
  );
};

const StyledBoard = styled(Board)`
  height: 100vh;
  width: 100vw;
  background: black;
  position: relative;
`;

export default StyledBoard;
