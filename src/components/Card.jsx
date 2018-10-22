import React from "react";
import tarot from "../services/tarot.json";

const Card = ({ name = "Cartjênha", image = "", ...rest }) => {
  const imageUrl = tarot.imagesUrl + image;
  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
    </div>
  );
};

export default Card;
