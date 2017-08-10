import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadData, setCard } from 'actions/game';
import { Stage } from 'components/Stage';
import Menu from 'containers/Menu';
import data from 'services/tarot.json';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.setCard = this.setCard.bind(this);
    }

    componentDidMount() {
        this.props.loadData(data);
    }

    setCard(id) {
        this.props.setCard(id);
    }

    start() {}

    stop() {}


    render() {
        return (
            <article className="game">
                <Menu />
                <Stage
                    order={this.props.order}
                    cards={this.props.cards}
                    play={this.props.play}
                    setCard={this.setCard}
                    selected={this.props.selected}
                />
                {/* <ItemSelected /> */}
            </article>
        );
    }
}

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

export default connect(mapStateToProps, { loadData, setCard })(Game);
