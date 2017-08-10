import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadData, setCard, start, stop, shuffle } from 'actions/game';
import { Stage } from 'components/Stage';
import { Menu } from 'components/Menu';
import ItemSelected from 'containers/ItemSelected';
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
                    play={this.props.play}
                />
                <Stage
                    order={this.props.order}
                    cards={this.props.cards}
                    play={this.props.play}
                    setCard={this.setCard}
                    selected={this.props.selected}
                />
                <ItemSelected />
            </article>
        );
    }
}

Game.propTypes = {
    order: PropTypes.array,
    cards: PropTypes.object,
    play: PropTypes.bool,
    loadData: PropTypes.func,
    shuffle: PropTypes.func,
    start: PropTypes.func,
    stop: PropTypes.func,
    setCard: PropTypes.func,
    selected: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
    ]),
};

const mapStateToProps = ({ game }) => ({
    order: game.order,
    cards: game.cards,
    play: game.play,
    selected: game.selected,
});

export default connect(mapStateToProps, { loadData, setCard, start, stop, shuffle })(Game);
