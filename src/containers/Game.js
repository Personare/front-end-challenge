import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadData, setCard, start, stop, shuffle } from 'actions/game';
import { Stage } from 'components/Stage';
import { Menu } from 'components/Menu';
import data from 'services/tarot.json';
import TweenLite from 'gsap';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.setCard = this.setCard.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
    }

    componentDidMount() {
        this.props.loadData(data);
    }

    setCard(id) {
        this.props.setCard(id);
    }

    start() {
        this.props.start();
        TweenLite.staggerTo('.card-faces', 1, { rotationY: -180 }, 0.01, () => {
            this.props.shuffle();
        });
    }

    stop() {
        this.props.stop();
        TweenLite.staggerTo('.card-faces', 1, { rotationY: 0 }, 0.01);
    }


    render() {
        return (
            <article className="game">
                <Menu
                    onStart={this.start}
                    onStop={this.stop}
                />
                <Stage
                    order={this.props.order}
                    cards={this.props.cards}
                    play={this.props.play}
                    setCard={this.setCard}
                    selected={this.props.selected}
                />
                <ItemSelectedC />
            </article>
        );
    }
}

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
                            <img src={this.props.item.image} alt={this.props.item.name}/>
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
        )
    }
}

const ItemSelectedC = connect(({ game }) => ({
    item: game.cards[game.selected],
 }), { setCard })(ItemSelected);

Game.propTypes = {
    order: PropTypes.array,
    cards: PropTypes.object,
    play: PropTypes.bool,
    loadData: PropTypes.func,
};

const mapStateToProps = ({ game }) => ({
    order: game.order,
    cards: game.cards,
    play: game.play,
    selected: game.selected,
});

export default connect(mapStateToProps, { loadData, setCard, start, stop, shuffle })(Game);
