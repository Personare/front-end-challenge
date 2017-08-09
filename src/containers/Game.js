import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadData } from 'actions/game';
import { Stage } from 'components/Stage';
import data from 'services/tarot.json';

class Game extends React.Component {
    componentDidMount() {
        this.props.loadData(data);
    }

    render() {
        return (
            <Stage
                order={this.props.order}
                cards={this.props.cards}
                play={this.props.play}
            />
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
});

export default connect(mapStateToProps, { loadData })(Game);
