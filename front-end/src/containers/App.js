import React, { Component } from "react";

import { Game, Menu } from "../components";
import TarotService from "../services/TarotService";
import ListBuilder from "../builders/ListBuilder";
import gameStatus from "../constants/gameStatus";

class App extends Component {
    state = {
        status: gameStatus.BEGIN,
        isLoading: true,
        hasError: false,
        imagesUrl: "",
        imageBackCard: "",
        cards: [],
        won: 0,
        over: 0,
        limit: 5,
        attempts: 10,
        game: {
            attempts: 0,
            cards: []
        }
    };

    componentDidMount() {
        new TarotService()
            .getCards()
            .then(res => {
                const { imagesUrl, imageBackCard, cards } = res.data;
                this.setState({
                    isLoading: false,
                    imagesUrl,
                    imageBackCard,
                    cards
                });
            })
            .catch(() => {
                this.setState({
                    isLoading: false,
                    hasError: true
                });
            });
    }

    handleGameStart = () => {
        this.setState(prevState => ({
            status: gameStatus.PLAYING,
            game: {
                attempts: prevState.attempts,
                cards: new ListBuilder(prevState.cards)
                    .shuffle()
                    .limit(prevState.limit)
                    .generateItemId()
                    .duplicate()
                    .generateItemKey("card")
                    .shuffle()
                    .build()
            }
        }));
    };

    render() {
        const { status, limit, attempts } = this.state;

        return (
            <Game>
                {status === gameStatus.BEGIN && (
                    <Menu
                        onStart={this.handleGameStart}
                        onChange={() => {}}
                        limit={limit}
                        attempts={attempts}
                    />
                )}
            </Game>
        );
    }
}

export default App;
