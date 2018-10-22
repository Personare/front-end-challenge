import React from "react";

const Deck = ({
  children,
  isSpreaded = false,
  isSorting = false,
  isOpen = false,
  isOverview = false,
  ...rest
}) => {
  return (
    <div
      className={`deck
      ${isOverview ? "is-overview" : ""}
      ${isSorting ? "is-sorting" : ""}
      ${isSpreaded ? "is-spreaded" : ""}
      ${isOpen ? "is-open" : ""}`}
    >
      {children}
    </div>
  );
};

export default Deck;
