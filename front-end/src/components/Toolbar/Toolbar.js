import React from "react";

import "./toolbar.scss";

const Toolbar = ({ attempts, isWinner }) => (
    <div className="toolbar">
        <div className="toolbar__box">Tentativas: {attempts}</div>
        {isWinner && <div className="toolbar__winner">Parabéns!</div>}
    </div>
);

export default Toolbar;
