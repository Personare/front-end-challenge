import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import GlobalStyle from '../components/globalStyle';
import Spinner from '../components/spinner';
import CardManager from '../components/cards/cardManager';

const SpinnerContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

function HomePage() {
    const [isLoading, setLoading] = useState(true);
    const [loadingError, setLoadingError] = useState(false);
    const [cardsData, setCardsData] = useState(null);

    useEffect(() => {
        async function getCardsData() {
            const res = await fetch(process.env.NEXT_PUBLIC_API);
            // Espera de 2 segundos extras para exibir o spinner.
            await new Promise((resolve) => setTimeout(resolve, 2000));

            if (res.status !== 200) {
                setLoadingError(true);
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
                    <Spinner loadingError={loadingError} />
                </SpinnerContainer>
            ) : (
                <CardManager cardsData={cardsData}></CardManager>
            )}
        </GlobalStyle>
    );
}

export default HomePage;
