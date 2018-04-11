import React from 'react';
import PropTypes from 'prop-types';

import './index.css';
import CardFlip from './flip';
import CardImage from './image';
import { Consumer, GAME_STATUS } from '../../game-context';

const Card = ({ name, image, imageBackCard }) => {
  const frontImage = {
    image,
  };
  const backImage = {
    image: imageBackCard,
  };
  return (
    <Consumer>
      {
        ({ status, selectCard }) => (
          <div
            className="card"
            onClick={() => selectCard({ name, image })}
            name={name}
          >
            {
              backImage && frontImage &&
              <CardFlip
                backImage={backImage}
                frontImage={frontImage}
                flipped={status === GAME_STATUS.started}
              />
            }
            {
              !backImage &&
              <CardImage image={this.props.image} name={name} />
            }
          </div>
        )
      }
    </Consumer>
  );
};

Card.propTypes = {
  imageBackCard: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
