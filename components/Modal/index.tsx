import * as S from './styles'

type ModalProps={
    onBackdropClick: () => void;
    children: React.ReactNode;
}

const Modal = ({onBackdropClick, children}: ModalProps) =>(  
  <S.ModalBackDrop onClick={onBackdropClick}>
      <S.ModalContainer>
        <S.Modal>
          <S.ModalContent>
            {children}
          </S.ModalContent>
        </S.Modal>
    </S.ModalContainer>
  </S.ModalBackDrop>
);


export default Modal
