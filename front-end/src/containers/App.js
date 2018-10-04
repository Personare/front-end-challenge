import React, { Component } from "react";

import { Game, Menu } from "../components";
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

    render() {
        const { status, limit, attempts } = this.state;

        return (
            <Game>
                {status === gameStatus.BEGIN && (
                    <Menu
                        onStart={() => {}}
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
