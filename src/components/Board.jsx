import React from "react";

const Board = ({ ...props }) => {
  return <div id="board">{props.children}</div>;
};

export default Board;
