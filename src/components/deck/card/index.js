import React from 'react';
import PropTypes from 'prop-types';

import './index.css';
import CardFlip from './flip';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flip: props.flip
    };

    this.flip = () => {
      this.setState((prevState) => ({
        flip: !prevState.flip
      }))
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
      <div className="card" onClick={this.flip} name={name}>
        <CardFlip backImage={backImage} frontImage={frontImage} />
      </div>
    );
  }
}

Card.propTypes = {
  imageBackCard: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Card;
