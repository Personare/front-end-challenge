import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flip: false
    };

    this.flip = () => {
      this.setState((prevState) => ({
        flip: !prevState.flip
      }))
    };
  }

  render() {
    const { name } = this.props;
    return (
      <div className="card" onClick={this.flip} name={name}>
        <div className={`card-flip ${this.state.flip}`}>
          <figure className="card-image mod-front">
            <img src={this.props.image} />
          </figure>
          <figure className="card-image mod-back">
            <img  src={this.props.imageBackCard} />
          </figure>
        </div>
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
