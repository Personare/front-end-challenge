import React from "react";

const Card = ({ name = "Cartjênha", image = "", ...rest }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
    </div>
  );
};

export default Card;
