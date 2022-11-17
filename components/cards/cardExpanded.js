import { useContext, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

import { GlobalStyleContext } from '../globalStyle';

const flip = keyframes`
    0% {
        opacity: 0;
        visibility: collapse;
    }

    100% {
        opacity: 1;
    }
`;

const Animation = styled.div`
    animation: ${flip};
    animation-duration: 1s;
    animation-fill-mode: both;

    &.close-modal {
        opacity: 0;
        visibility: collapse;
    }
`;

const ModalOverlay = styled(Animation)`
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: rgba(84, 155, 247, 0.5);

    animation-delay: 0.5s;
`;

const Modal = styled(Animation)`
    z-index: 4;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 600px;
    max-width: 100%;
    max-height: 100%;

    background-color: white;
    border-radius: 20px;

    animation-delay: 0.75s;
`;

const InfoContainer = styled.div`
    display: flex;
    margin: 10px;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 10px;
    padding: 5px;
`;

const Button = styled.button`
    margin: 10px;
`;

// O componente cria um modal e seu overlay, exibindo as informações da carta.
export default function CardExpanded(props) {
    // Contexto do Global Style para alterar o overflow do body.
    const toggleIsModalOpenGlobalState = useContext(GlobalStyleContext);

    // Referência para adicionar as classes de fechamento do modal.
    const refModal = useRef(null);
    const refModalOverlay = useRef(null);

    const closeModal = () => {
        toggleIsModalOpenGlobalState();
        refModal.current.classList.add('close-modal');
        refModalOverlay.current.classList.add('close-modal');
    };

    return (
        <div data-testid={'card-expanded'}>
            <Modal
                ref={refModal}
                onAnimationStart={() => toggleIsModalOpenGlobalState()}
            >
                <InfoContainer>
                    <ImageContainer>
                        <Image
                            src={props.cardImage}
                            alt={props.cardName}
                            width={150}
                            height={300}
                        />
                    </ImageContainer>
                    <ContentContainer>
                        <h2>{props.cardName}</h2>
                        <p>
                            Mussum Ipsum, cacilds vidis litro abertis. Viva
                            Forevis aptent taciti sociosqu ad litora torquent.
                            Admodum accumsan disputationi eu sit. Vide electram
                            sadipscing et per.
                        </p>
                        <Button onClick={closeModal}>Mais uma?</Button>
                    </ContentContainer>
                </InfoContainer>
            </Modal>
            <ModalOverlay ref={refModalOverlay} />
        </div>
    );
}
