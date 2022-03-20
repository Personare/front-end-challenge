import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonContainer from "./styles";

export default function Button() {
  const location = useLocation();
  let navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    if(e.target.textContent === "Jogar") {
      navigate("/game-on")
    } else {
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
