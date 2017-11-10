import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeGridCols, flipCardThenOpenModal } from '../actions/game';
import { getBreakpoint } from '../helpers/utils';
import Card from '../components/Card';

class CardList extends Component {
    constructor(props) {
        super(props);
        this.setGridColumn = this.setGridColumn.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.setGridColumn);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.setGridColumn);
    }

    componentWillMount() {
        this.setGridColumn();
    }

    setGridColumn() {
        var currentBreakpoint = getBreakpoint();
        let totalCols = 6; // desktop default

        if (currentBreakpoint === 'tablet') {
            totalCols = 6;
        } else if (currentBreakpoint === 'phone') {
            totalCols = 3;
        } else if (currentBreakpoint === 'smallPhone') {
            totalCols = 2;
        }

        if (totalCols === this.props.gridCollumn) {
            return false;
        }

        this.props.setGridCols(totalCols);
    }


    render() {
        if(this.props.isLoading) {
            return (<span>loading...</span>);
        }

        const { imageBackCard, imagesUrl, cards } = this.props.data;

        const { animationMode, gridCollumn } = this.props;
        const totalCards = cards.length;

        const cardsItems = cards.map((card, index) => {
            const subValue = card.position % gridCollumn === 0 ? 0 : 1;

            const cardX = (card.position % gridCollumn);
            const cardY = (Math.ceil(card.position / gridCollumn) - subValue);

            let isShuffling = animationMode === 'joining';

            return (
                <Card
                    key={index}
                    name={card.name}
                    imageBackCard={imageBackCard}
                    imagesUrl={imagesUrl + card.image}
                    cardIndex={index}
                    cardX={cardX}
                    cardY={cardY}
                    flipped={card.flipped}
                    shuffling={isShuffling}
                    totalCards={totalCards}
                    gridCollumn={gridCollumn}
                    onClick={this.props.flipCardThenOpenModal}
                />
            );
        });

        return (
            <div className='CardList'>
                {cardsItems}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data,
        isLoading: state.gameState.isLoading,
        animationMode: state.gameState.animationMode,
        gridCollumn: state.gameState.gridCollumn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        flipCardThenOpenModal: (cardID) => {
            dispatch(flipCardThenOpenModal(cardID));
        },
        setGridCols: (totalCols) => {
            dispatch(changeGridCols(totalCols))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
