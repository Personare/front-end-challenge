import React from "react";
import tarot from "../services/tarot.json";

const Card = ({ name = "Cartjênha", image = "", isFliped, ...rest }) => {
  const imageUrl = tarot.imagesUrl + image;
  return (
    <div className={`card ${isFliped ? "is-fliped" : ""}`} {...rest}>
      <div
        className="front"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div
        className="back"
        style={{ backgroundImage: `url(${tarot.imageBackCard})` }}
      />
    </div>
  );
};

export default Card;
