import React from 'react';
import Button from '../../atoms/Button';
import './MainHeader.scss';

const MainHeader = ({ isClosed, closeCards, sortCards }) => {
    const start = () => {
        if (!isClosed) {
            closeCards();
        }

        sortCards();
    };

    return (
        <header className="MainHeader">
            <h1>Deixe que o tarot traga a solução que você precisa</h1>
            <p>Confie, concentre-se, faça uma pergunta, escolha uma carta e veja o que ela tem para te revelar...</p>
            <Button onClick={start}>Iniciar</Button>
        </header>
    );
};

export default MainHeader;
