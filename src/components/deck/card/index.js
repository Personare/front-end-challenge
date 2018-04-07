import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageSrc: props.imageBackCard
    };

    this.handleClick = this.handleClick.bind(this);
    this.getNewImageSrc = this.getNewImageSrc.bind(this);
  }

  getNewImageSrc({ imageSrc }) {
    const { imageBackCard, image } = this.props;
    return imageSrc === imageBackCard ? image : imageBackCard;
  }

  handleClick() {
    this.setState(prevState => (
      { imageSrc: this.getNewImageSrc(prevState) }));
  }

  render() {
    const { name } = this.props;
    return (
      <a className="card" name={name} onClick={this.handleClick} style={{ backgroundImage: `url(${this.state.imageSrc})` }} />
    );
  }
}

Card.propTypes = {
  imageBackCard: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Card;
