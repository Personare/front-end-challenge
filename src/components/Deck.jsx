import React from "react";

const Deck = ({ children, ...rest }) => {
  return <div className="deck">{children}</div>;
};

export default Deck;
