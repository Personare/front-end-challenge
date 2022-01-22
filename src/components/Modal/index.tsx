import { IModal } from "../../config/interfaces";
import Card from "../Card";
import { Content, Text, Overlay, Name, CloseButton } from "./styles";

const Modal: React.FC<IModal> = ({ card, onClose }) => {
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <Overlay onClick={onClose} data-cy="modal-overlay">
      <Content onClick={handleContentClick}>
        <Name>{card.name}</Name>
        <Card card={card} />
        <Text>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero.
        </Text>

        <CloseButton onClick={onClose}>&times;</CloseButton>
      </Content>
    </Overlay>
  );
};
export default Modal;
