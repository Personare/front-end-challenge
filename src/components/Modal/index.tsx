import { IModal } from "../../config/interfaces";
import Card from "../Card";
import * as S from "./styles";

const Modal: React.FC<IModal> = ({ card, onClose }) => {
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <S.Overlay onClick={onClose} data-cy="modal-overlay">
      <S.Content onClick={handleContentClick}>
        <Card card={card} />
        <S.TextContainer>
          <S.Name>{card.name}</S.Name>
          <S.Text>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero.
          </S.Text>
        </S.TextContainer>

        <S.CloseButton onClick={onClose}>&times;</S.CloseButton>
      </S.Content>
    </S.Overlay>
  );
};
export default Modal;
