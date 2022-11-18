import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import GlobalStyle from '../components/globalStyle';
import Spinner from '../components/spinner';
import CardManager from '../components/cards/cardManager';

const Container = styled.div``;

const SpinnerContainer = styled(Container)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

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

    return (
        <GlobalStyle>
            <Head>
                <title>Tarot Game by Katreque</title>
            </Head>

            {isLoading ? (
                <SpinnerContainer>
                    <Spinner loadingProblem={loadingProblem} />
                </SpinnerContainer>
            ) : (
                <Container>
                    <CardManager cardsData={cardsData}></CardManager>
                </Container>
            )}
        </GlobalStyle>
    );
}

export default HomePage;
