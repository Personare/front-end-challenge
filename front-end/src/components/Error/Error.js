import React from "react";

import "./error.scss";

const GameOver = ({ title, message, onRestart }) => (
    <div className="error">
        <div className="error__content">
            <h1 className="error__title">{title}</h1>
            {message && <p className="error__message">{message}</p>}
            <div>
                <button className="error__button" onClick={onRestart}>
                    Recomeçar
                </button>
            </div>
        </div>
    </div>
);

export default GameOver;
