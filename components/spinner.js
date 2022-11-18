import { useState, useCallback, useEffect } from 'react';
import { RotateLoader } from 'react-spinners';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
`;

const translate = keyframes`
    100% {
        opacity: 0;
        transform: translateY(-50px);
    }
`;

const pickAnimation = (animation) => {
    switch (animation) {
        case 'fadeIn':
            return fadeIn;

        case 'fadeOut':
            return fadeOut;

        case 'translate':
            return translate;
    }
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    animation-name: ${(props) => pickAnimation(props.animation)};
    animation-duration: 500ms;
    animation-fill-mode: forwards;
`;

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    margin-top: 50px;
    font-size: 1.25em;

    animation-name: ${fadeIn};
    animation-duration: 1s;
    animation-delay: 500ms;
    animation-fill-mode: both;
`;

const ErrorHeader = styled.span`
    margin-bottom: 10px;
    font-weight: bold;
`;

const animationStates = {
    PHASE_ONE: 'FADEIN',
    PHASE_TWO: 'FADEOUT',
    PHASE_THREE: 'FADEIN_FINAL',
};

/*
    Para lidar com as animações que o componente possui, ele foi dividido em 3 fases.
    Com base em cada fase, renderiza o componente com as props necessárias.
*/
export default function Spinner(props) {
    const [animationPhase, setAnimationPhase] = useState(
        animationStates.PHASE_ONE
    );

    useEffect(() => {
        if (props.loadingError) {
            setAnimationPhase(animationStates.PHASE_TWO);
        }
    }, [props.loadingError]);

    const renderElementBasedOnAnimationPhase = useCallback(() => {
        switch (animationPhase) {
            /*
                A fase 1 é animação fade in, no qual mostra o spinner de carregamento.
                É executada por default.
            */
            case animationStates.PHASE_ONE: {
                return (
                    <Wrapper animation="fadeIn" data-testid="spinner-1">
                        <RotateLoader
                            size={20}
                            color="#4B83A6"
                            speedMultiplier={0.5}
                        />
                    </Wrapper>
                );
            }

            /*
                A fase 2 é ativada quando a prop loadingError se torna verdadeira.
                Assim o componente ativa sua animação de translate em alguns pixels para cima.
            */
            case animationStates.PHASE_TWO: {
                return (
                    <Wrapper
                        animation="translate"
                        onAnimationEnd={() =>
                            setAnimationPhase(animationStates.PHASE_THREE)
                        }
                        data-testid="spinner-2"
                    >
                        <RotateLoader
                            size={20}
                            color="#4B83A6"
                            speedMultiplier={0.5}
                        />
                    </Wrapper>
                );
            }

            /*
                A fase 3 é ativada quando a fase anterior termina.
                Aqui é exibido o spinner de erro, informando que ocorreu algum erro.
            */
            case animationStates.PHASE_THREE: {
                return (
                    <>
                        <Wrapper animation="fadeIn" data-testid="spinner-3">
                            <RotateLoader
                                size={20}
                                color="#F52132"
                                speedMultiplier={0.2}
                            />
                        </Wrapper>
                        <ErrorContainer>
                            <ErrorHeader>
                                Houston, we have a problem...
                            </ErrorHeader>
                            <small>
                                Recarregue a página e tente novamente.
                            </small>
                        </ErrorContainer>
                    </>
                );
            }
        }
    });

    return renderElementBasedOnAnimationPhase();
}
