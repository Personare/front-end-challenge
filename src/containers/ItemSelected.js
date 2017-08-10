import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setCard } from 'actions/game';
import TweenLite from 'gsap';


class ItemSelected extends React.Component {
    constructor(props) {
        super(props);
        this.onClose = this.onClose.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (!!nextProps.item) {
            TweenLite.to(this.refs.box, 1, { autoAlpha: 1 });
        }
    }

    onClose() {
        TweenLite.to(this.refs.box, 1, { autoAlpha: 0 });
        this.props.setCard(false);
    }

    render() {
        return (
            <div className="selected-box" ref="box" onClick={this.onClose}>
                {!!this.props.item &&
                    <div className="content">
                        <div className="close" onClick={this.onClose}>&#10005;</div>
                        <div className="image">
                            <img src={this.props.item.image} alt={this.props.item.name} />
                        </div>
                        <div className="description">
                            <h1 className="title">{this.props.item.name}</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Eius et beatae molestias voluptate repudiandae veniam quo suscipit doloremque,
                                recusandae nisi dolorem dolores ullam debitis autem placeat dicta,
                                maiores doloribus commodi!
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Eius et beatae molestias voluptate repudiandae veniam quo suscipit doloremque,
                                recusandae nisi dolorem dolores ullam debitis autem placeat dicta,
                                maiores doloribus commodi! recusandae nisi dolorem dolores
                                recusandae nisi dolorem dolores
                            </p>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

ItemSelected.propTypes = {
    setCard: PropTypes.func,
    item: PropTypes.object,
};

const mapStateToProps = ({ game }) => ({
    item: game.cards[game.selected],
});

export default connect(mapStateToProps, { setCard })(ItemSelected);
