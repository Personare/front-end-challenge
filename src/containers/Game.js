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
            />
        );
    }
}

Game.propTypes = {
    order: PropTypes.array,
    cards: PropTypes.object,
};

const mapStateToProps = ({ game }) => ({
    order: game.order,
    cards: game.cards,
});

export default connect(mapStateToProps, { loadData })(Game);
