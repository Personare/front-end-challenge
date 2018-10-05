import React, { Component } from 'react';
import TweenMax from 'gsap';

import './Card.sass';

export class Card extends Component {
  constructor(props) {
    super(props);
    this.cardContentRef = React.createRef();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== this.props.selected) {
      TweenMax.to(this.cardContentRef.current, 1, { rotationY: !nextProps.selected ? -180 : 0 });
    }
  }

  render() {
    return (
      <article className="CardContainer" onClick={this.props.click}>
        <div className="CardContent" ref={this.cardContentRef}>
          <div className="CardImage">
            <img src={this.props.card} alt={this.props.name} />
          </div>
          <div className="BackImage">
            <img src={this.props.imageBack} alt={this.props.name} />
          </div>
        </div>
      </article>
    );
  }
}

export default Card;
