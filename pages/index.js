import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Spinner from '../components/spinner';
import CardManager from '../components/cardManager';

const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');
    font-family: 'Roboto', sans-serif;
`;

const SpinnerContainer = styled(Container)`
    height: 95vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.spinner-enter {
        opacity: 0;
    }

    &.spinner-exit {
        opacity: 1;
    }

    &.spinner-enter-active {
        opacity: 1;
    }

    &.spinner-exit-active {
        opacity: 0;
    }

    &.spinner-enter-active,
    .spinner-exit-active {
        transition: opacity 1000ms;
    }
`;

function HomePage() {
    const [isLoading, setLoading] = useState(true);
    const [loadingProblem, setLoadingProblem] = useState(false);
    const [cardsData, setCardsData] = useState(null);

    useEffect(() => {
        async function getCardsData() {
            const res = await fetch(process.env.NEXT_PUBLIC_API);
            // Espera de 2 segundos extras para exibir o spinner.
            await new Promise((resolve) => setTimeout(resolve, 2000));

            if (res.status !== 200) {
                setLoadingProblem(true);
                return;
            }

            const data = await res.json();
            setCardsData(data);
            setLoading(false);
        }

        getCardsData();
    }, []);

    if (isLoading) {
        return (
            <SpinnerContainer>
                <Spinner loadingProblem={loadingProblem} />
            </SpinnerContainer>
        );
    }

    return (
        <Container>
            <CardManager cardsData={cardsData}></CardManager>
        </Container>
    );
}

export default HomePage;
