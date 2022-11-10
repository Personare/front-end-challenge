import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import RotateLoader from 'react-spinners/RotateLoader';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const Error = styled.div`
    font-size: 1.25em;
    opacity: 0;
    margin-top: 50px;

    &.loading-error-enter {
        opacity: 0;
    }

    &.loading-error-enter-active {
        opacity: 1;
        transition: opacity 500ms;
    }

    &.loading-error-enter-done {
        opacity: 1;
    }
`;

export default function Spinner(props) {
    const [spinnerColor, setSpinnerColor] = useState(null);
    const [spinnerSpeed, setSpinnerSpeed] = useState(null);
    const [loadingError, setLoadingError] = useState(null);
    const errorSpinningRef = useRef(null);

    /*
        O componente CSSTransition só ativa sua transição quando há uma mudança de estado
        em que estiver observando. Ao receber a prop loadingProblem inicialmente como true,
        a transição não ocorre, pois o componente aguarda que o estado mude pelo menos 1x.

        Para resolver, o estado loadingError foi criado e inicializado como null e recebe
        as atualizações da prop loadingProblem. Dessa forma, o CSSTransition é ativado
        mesmo não tendo alteração do estado inicial.
    */

    useEffect(() => {
        setLoadingError(props.loadingProblem);
        setSpinnerColor(props.loadingProblem ? '#F52132' : '#36d7b7');
        setSpinnerSpeed(props.loadingProblem ? 0.25 : 0.5);
    }, [props.loadingProblem]);

    return (
        <Wrapper>
            <RotateLoader
                data-testid="home-spinner"
                color={spinnerColor}
                speedMultiplier={spinnerSpeed}
                loading
            />
            <CSSTransition
                nodeRef={errorSpinningRef}
                in={loadingError}
                timeout={500}
                classNames="loading-error"
            >
                <Error data-testid="spinner-error-text" ref={errorSpinningRef}>
                    <p>Houston, we have a problem...</p>
                    <small>Recarregue a página e tente novamente.</small>
                </Error>
            </CSSTransition>
        </Wrapper>
    );
}
