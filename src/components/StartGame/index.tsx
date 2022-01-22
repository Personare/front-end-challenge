import * as S from "./styles";

import BackgroundImage from "../../assets/images/background-image.jpg";
import { useContext } from "react";
import GlobalContext from "../../global/GlobalContext";

const StartGame: React.FC = () => {
  const {
    setters: { setIsStartGame },
  } = useContext(GlobalContext);

  const handlePlayButtonClick = () => {
    setIsStartGame(false);
  };

  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image src={BackgroundImage} />
      </S.ImageContainer>

      <S.ButtonContainer>
        <S.Title>Portal Tarot</S.Title>
        <S.Subtitle>
          Clique no botão abaixo para ver a previsão do dia
        </S.Subtitle>

        <S.PlayButton
          type="button"
          onClick={handlePlayButtonClick}
          data-cy="action-button"
        >
          Iniciar
        </S.PlayButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default StartGame;
