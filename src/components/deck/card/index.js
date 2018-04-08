import React from 'react';
import PropTypes from 'prop-types';

import './index.css';
import CardFlip from './flip';
import CardImage from './image';
import { Consumer, GAME_STATUS } from '../../game-context';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flip: props.flip
    };
  }

  render() {
    const { name } = this.props;
    const frontImage = {
      image: this.props.image
    };
    const backImage = {
      image: this.props.imageBackCard
    };
    return (
      <Consumer>
        {
          ({ status, selectCard }) => (
            <div className="card" onClick={() => selectCard(this.props)} name={name}>
              {
                backImage && frontImage &&
                <CardFlip backImage={backImage} frontImage={frontImage} flipped={status === GAME_STATUS.started} />
              }
              {
                !backImage &&
                <CardImage image={this.props.image} />
              }
            </div>
          )
        }
      </Consumer>
    );
  }
}

Card.propTypes = {
  imageBackCard: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Card;
