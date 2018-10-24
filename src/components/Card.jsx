import React from "react";
import tarot from "../services/tarot.json";

const Card = ({
  name = "Cartjênha",
  image = "",
  isFliped,
  isSelected,
  ...rest
}) => {
  const imageUrl = tarot.imagesUrl + image;
  return (
    <div
      className={`card ${isFliped ? "is-fliped" : ""} ${
        isSelected ? "is-selected" : ""
      }`}
      {...rest}
    >
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
      <div className="info">
        <p>
          <b>{name}</b> <br /> <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
          quasi ducimus, rerum mollitia esse dolores quidem officia, rem fugiat,
          suscipit ipsam omnis excepturi vero eum culpa fugit sapiente sequi
          exercitationem.
        </p>
      </div>
    </div>
  );
};

export default Card;
