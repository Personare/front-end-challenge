import React, { Component } from 'react';
import TweenMax from 'gsap';

class Card extends Component {
  constructor(props) {
    super(props);
    this.cardContentRef = React.createRef();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== this.props.selected) {
      TweenMax.to(this.refs.cardContent.current, 1, { rotationY: !nextProps.selected ? -180 : 0 });
    }
  }

  render() {
    return (
      <article className="CardContainer" onClick={this.props.click}>
        <div className="CardContent" ref={this.cardContentRef}>
          <div className="front">
            <img src={this.props.frontImg} alt={this.props.name} />
          </div>
          <div className="back">
            <img src={this.props.backImg} alt={this.props.name} />
          </div>
        </div>
      </article>
    );
  }
}

export default Card;
