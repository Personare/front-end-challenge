import React from "react";

const Deck = ({ className, children, ...rest }) => {
  return <div className={className}>{children}</div>;
};

export default Deck;
