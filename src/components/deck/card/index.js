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
  }

  handleClick() {
    this.setState((prevState, props) => (
      { imageSrc: (prevState.imageSrc === props.imageBackCard && props.image || props.imageBackCard) }
    ));
  }

  render() {
    const {name, image, imageBackCard} = this.props;
    return (
      <a className="card" name={name} onClick={this.handleClick} style={{backgroundImage: `url(${this.state.imageSrc})`}}/>
    )
  }
}

Card.propTypes = {
  imageBackCard: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string
}

export default Card;