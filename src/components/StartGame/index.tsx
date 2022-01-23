import * as S from "./styles";

import BackgroundImage from "../../assets/images/background-image.jpg";

import { IStartGame } from "../../config/interfaces";

const StartGame: React.FC<IStartGame> = ({ onClick }) => {
  return (
    <S.Container data-cy="start">
      <S.ImageContainer src={BackgroundImage} />

      <S.ButtonContainer>
        <S.Title>Portal Tarot</S.Title>
        <S.Subtitle>
          Clique no botão abaixo para ver a previsão do dia
        </S.Subtitle>

        <S.PlayButton type="button" onClick={onClick} data-cy="action-button">
          Iniciar
        </S.PlayButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default StartGame;
