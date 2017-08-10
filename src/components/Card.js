import React, { PropTypes } from 'react';
import TweenLite from 'gsap';

export class Card extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.selected !== this.props.selected) {
            TweenLite.to(this.refs.cardFaces, 1, { rotationY: !nextProps.selected ? -180 : 0 });
        }
    }

    render() {
        return (
            <article className="card" onClick={this.props.onClick}>
                <div className="card-faces" ref="cardFaces">
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

Card.propTypes = {
    name: PropTypes.string,
    frontImg: PropTypes.string,
    backImg: PropTypes.string,
    selected: PropTypes.bool,
    onClick: PropTypes.func,
};
