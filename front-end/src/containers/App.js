import React, { Component } from "react";

import {
    Game,
    Menu,
    Toolbar,
    Board,
    Card,
    Error,
    Loading
} from "../components";
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
        this.handleReload();
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

    handleSettingsChange = (key, value) => {
        this.setState({
            [key]: value
        });
    };

    handleCardMatch = index => {
        this.setState(prevState => {
            const cards = prevState.game.cards.slice();
            const waitingIndex = cards.findIndex(c => c.waitingMatch);
            let attempts = prevState.game.attempts;
            let status = prevState.status;

            if (waitingIndex > -1) {
                if (cards[index].id !== cards[waitingIndex].id) {
                    cards[index].isActive = false;
                    cards[waitingIndex].isActive = false;
                    attempts--;
                }

                cards[index].waitingMatch = false;
                cards[waitingIndex].waitingMatch = false;
            } else {
                cards[index].waitingMatch = true;
            }

            const cardLeft = cards.find(c => !c.isActive);
            if (!cardLeft) {
                status = gameStatus.WINNER;
            }

            if (attempts === 0) {
                status = gameStatus.GAME_OVER;
            }

            return { status, game: { ...prevState.game, attempts, cards } };
        });
    };

    handleCardClick = card => {
        this.setState(prevState => {
            const cards = prevState.game.cards.slice();
            const index = cards.findIndex(c => c.key === card.key);

            if (!cards[index].isActive) {
                cards[index].isActive = true;

                setTimeout(() => {
                    this.handleCardMatch(index);
                }, 1000);
            }

            return { game: { ...prevState.game, cards } };
        });
    };

    handleReload = () => {
        this.setState({
            hasError: false,
            isLoading: true
        });

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
    };

    handleRestart = () => {
        this.setState({ status: gameStatus.BEGIN });
    };

    render() {
        const {
            isLoading,
            hasError,
            status,
            limit,
            attempts,
            game,
            imagesUrl,
            imageBackCard
        } = this.state;

        return (
            <Game>
                {isLoading && <Loading />}
                {hasError && (
                    <Error
                        title="Erro ao carregar cartas."
                        message="Você iniciou a API?"
                        onRestart={this.handleReload}
                    />
                )}
                {status === gameStatus.BEGIN && (
                    <Menu
                        onStart={this.handleGameStart}
                        onChange={this.handleSettingsChange}
                        limit={limit}
                        attempts={attempts}
                    />
                )}
                {(status === gameStatus.PLAYING ||
                    status === gameStatus.WINNER) && (
                    <>
                        <Toolbar
                            attempts={game.attempts}
                            isWinner={status === gameStatus.WINNER}
                        />
                        <Board>
                            {game.cards.map(card => (
                                <Card
                                    key={card.id}
                                    imagesUrl={imagesUrl}
                                    imageBackCard={imageBackCard}
                                    card={card}
                                    onClick={this.handleCardClick}
                                />
                            ))}
                        </Board>
                    </>
                )}
                {status === gameStatus.GAME_OVER && (
                    <Error title="Fim do jogo" onRestart={this.handleRestart} />
                )}
            </Game>
        );
    }
}

export default App;
