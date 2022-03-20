import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GameContext from "../../context/GameContext";
import ButtonContainer from "./styles";

export default function Button() {
  const { setGameOn } = useContext(GameContext);
  const location = useLocation();
  let navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    if(e.target.textContent === "Jogar") {
      setGameOn(true);
      navigate("/game-on");
    } else {
      setGameOn(false);
      navigate("/");
    }
  }

  return (
    <ButtonContainer>
      <div onClick={e => handleClick(e)}>
        { location.pathname === "/"
          ? <p>Jogar</p>
          : ( location.pathname === "/game-on"
            ? <p>Voltar</p>
            : <></>
          )
        }
      </div>
    </ButtonContainer>
  );
}
