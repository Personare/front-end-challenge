import React, { useState } from "react";
import PropTypes from "prop-types";
import { ImageCard } from "../styles/CardStyle";

const Card = ({ name, image, imageBackCard }) => {
  const [estado, setEstado] = useState(false);

  const handleClick = () => {
    setEstado(true);
  };

  return (
  
      <ImageCard
        onClick={handleClick}
        src={estado ? image : imageBackCard}
        alt={estado ? name : "Card back"}
      />
   
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageBackCard: PropTypes.string.isRequired,
};

export default Card;