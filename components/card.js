import { useCallback, useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const flip = keyframes`
    0% {
        transform: rotateY(0deg);
    }

    100% {
        transform: rotateY(180deg);
    }
`;

const translate = (finalPosition) => keyframes`
    100% {
        transform: translate(${finalPosition.x}px, ${finalPosition.y}px);
        opacity: 0;
    }
`;

const BaseCard = styled.div`
    width: 150px;
    height: 300px;

    &:hover {
        transform: scale(1.05);
        transition: scale 200ms;
    }
`;

const BaseFlipCard = styled(BaseCard)`
    position: relative;
`;

const CardContainer = styled(BaseCard)`
    background-image: url(${(props) => props.image});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    animation: ${(props) => props.animation};
    animation-delay: ${(props) => props.delay * 20 + 'ms'};
    animation-duration: 1s;
    animation-fill-mode: ${(props) => props.mode};
`;

const FlipCardContainer = styled(CardContainer)`
    position: absolute;
    width: 100%;
    height: 100%;

    animation-duration: 0.75s;
    animation-direction: ${(props) => props.direction};

    transform-style: preserve-3d;
    perspective: 1000px;
    backface-visibility: hidden;
`;

const CardSelection = styled(CardContainer)`
    cursor: pointer;
    z-index: 2;
`;

const animationStates = {
    PHASE_ONE: 'FADEIN',
    PHASE_TWO: 'CARD_FLIP',
    PHASE_THREE: 'SHUFFLE',
    PHASE_FOUR: 'CARD_DEAL',
    PHASE_FIVE: 'CARD_UNFLIP',
};

/*
    Para lidar com as diversas animações que o componente possui, ele foi dividido em 5 fases.
    Com base em cada fase, renderiza o componente com as props necessárias.
*/
export default function Card(props) {
    const [animationPhase, setAnimationPhase] = useState(
        animationStates.PHASE_ONE
    );
    const cardElement = useRef(null);

    useEffect(() => {
        if (props.jogoIniciado) {
            setAnimationPhase(animationStates.PHASE_TWO);
        }
    }, [props.jogoIniciado]);

    // Calcula quantos pixeis o componente precisa transladar em cada eixo para chegar no centro da tela.
    const calcTranslateAxisToMiddleScreen = () => {
        const { innerWidth, innerHeight } = window;
        const { top, left, width, height } =
            cardElement.current.getBoundingClientRect();

        return {
            x: innerWidth / 2 - left - width / 2,
            y: innerHeight / 2 - top - height / 2,
        };
    };

    const renderElementBasedOnAnimationPhase = useCallback(() => {
        switch (animationPhase) {
            /*
                A fase 1 é animação fade in, no qual mostra a carta de frente com o conteúdo inicial.
                É executada por default.
            */
            case animationStates.PHASE_ONE: {
                return (
                    <CardContainer
                        image={props.orderedFrontImage}
                        animation={fadeIn}
                        mode="both"
                        delay={props.index}
                        data-testid={'1-' + props.index}
                    />
                );
            }

            /*
                A fase 2 é animação flip, no qual a carta fica de costas.
                É executada apenas quando a prop jogoIniciado é true.
                O elemento possui um Ref, pois é necessário armazenar sua posição no DOM neste momento.

                A partir desta fase, as outras fases são executadas ao final da animação, segundo a prop onAnimationEnd;
            */
            case animationStates.PHASE_TWO: {
                return (
                    <BaseFlipCard
                        ref={cardElement}
                        onAnimationEnd={() =>
                            setAnimationPhase(animationStates.PHASE_THREE)
                        }
                        data-testid={'2-' + props.index}
                    >
                        <FlipCardContainer
                            image={props.orderedFrontImage}
                            animation={flip}
                            mode="both"
                            delay={props.index}
                        />
                        <FlipCardContainer
                            image={props.backImage}
                            animation={flip}
                            mode="both"
                            direction="reverse"
                            delay={props.index}
                        />
                    </BaseFlipCard>
                );
            }

            /*
                A fase 3 é animação translate, no qual o componente vai até o centro da tela.
                É executada ao final da fase 2.
            */
            case animationStates.PHASE_THREE: {
                return (
                    <CardContainer
                        image={props.backImage}
                        animation={() =>
                            translate(calcTranslateAxisToMiddleScreen())
                        }
                        mode="forwards"
                        delay={props.index}
                        onAnimationEnd={() =>
                            setAnimationPhase(animationStates.PHASE_FOUR)
                        }
                        data-testid={'3-' + props.index}
                    />
                );
            }

            /*
                A fase 4 é animação fadeIn, no qual o componente retorna a posição original com a carta de costas.
                É executada ao final da fase 3.
            */
            case animationStates.PHASE_FOUR: {
                return (
                    <CardSelection
                        image={props.backImage}
                        animation={fadeIn}
                        mode="both"
                        delay={props.index}
                        onClick={() =>
                            setAnimationPhase(animationStates.PHASE_FIVE)
                        }
                        data-testid={'4-' + props.index}
                    />
                );
            }

            /*
                A fase 5 é fase final, no qual a carta volta ficar de frente, mas dessa vez exibindo a carta aleatória.
                É executada quando o elemento da fase 4 for clicado.
            */
            case animationStates.PHASE_FIVE: {
                return (
                    <BaseFlipCard
                        ref={cardElement}
                        data-testid={'5-' + props.index}
                    >
                        <FlipCardContainer
                            image={props.backImage}
                            animation={flip}
                            mode="both"
                            delay={0}
                        />
                        <FlipCardContainer
                            image={props.randomFrontImage}
                            animation={flip}
                            mode="both"
                            direction="reverse"
                            delay={0}
                        />
                    </BaseFlipCard>
                );
            }
        }
    }, [animationPhase]);

    return renderElementBasedOnAnimationPhase();
}
