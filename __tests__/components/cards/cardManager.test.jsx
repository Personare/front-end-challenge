import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import CardManager from '../../../components/cards/cardManager';
import tarotData from '../../tarotMock.json';

describe('CardManager Component', () => {
    /*
        Ao utilizar o método toHaveStyle para verificar se elemento possui certo estilo do background, o mesmo está
        apresentando problemas, retornando uma string vazia seja para color, image ou como shorthand.
        A Issue de ajuste está em desenvolvimento, mas sem solução até o momento:
        https://github.com/testing-library/jest-dom/issues/170#issuecomment-719463305.

        Como solução, o método toHaveStyleRule da lib jest-styled-components faz a comparação corretamente.
    */

    it('Deve exibir as cartas de frente e o botão para iniciar o jogo.', async () => {
        render(<CardManager cardsData={tarotData} />);

        await waitFor(() => {
            const firstCard = screen.getByTestId('1-0');
            expect(firstCard).toBeInTheDocument();
            expect(firstCard).toHaveStyleRule(
                'background-image',
                `url(${tarotData.imagesUrl + tarotData.cards[0].image})`
            );

            const secondCard = screen.getByTestId('1-1');
            expect(secondCard).toBeInTheDocument();
            expect(secondCard).toHaveStyleRule(
                'background-image',
                `url(${tarotData.imagesUrl + tarotData.cards[1].image})`
            );

            const thirdCard = screen.getByTestId('1-2');
            expect(thirdCard).toBeInTheDocument();
            expect(thirdCard).toHaveStyleRule(
                'background-image',
                `url(${tarotData.imagesUrl + tarotData.cards[2].image})`
            );

            expect(
                screen.getByText(`Katreque's Tarot Game`)
            ).toBeInTheDocument();
            expect(
                screen.getByRole('button', { name: 'Iniciar o Jogo' })
            ).toBeInTheDocument();
        });
    });

    it('Ao iniciar o jogo, após as animações, deve exibir o texto correto e exibir as cartas de costas.', async () => {
        render(<CardManager cardsData={tarotData} />);

        // Ativando os eventos manualmente de cada fase.
        const btnStartGame = screen.getByRole('button', {
            name: 'Iniciar o Jogo',
        });
        fireEvent.click(btnStartGame);

        const phase2Card0 = screen.getByTestId('2-0');
        const phase2Card1 = screen.getByTestId('2-1');
        const phase2Card2 = screen.getByTestId('2-2');
        fireEvent.animationEnd(phase2Card0);
        fireEvent.animationEnd(phase2Card1);
        fireEvent.animationEnd(phase2Card2);

        const phase3Card0 = screen.getByTestId('3-0');
        const phase3Card1 = screen.getByTestId('3-1');
        const phase3Card2 = screen.getByTestId('3-2');
        fireEvent.animationEnd(phase3Card0);
        fireEvent.animationEnd(phase3Card1);
        fireEvent.animationEnd(phase3Card2);

        await waitFor(() => {
            const firstCard = screen.getByTestId('4-0');
            fireEvent.animationEnd(firstCard);
            expect(firstCard).toBeInTheDocument();
            expect(firstCard).toHaveStyleRule(
                'background-image',
                `url(${tarotData.imageBackCard})`
            );

            const secondCard = screen.getByTestId('4-1');
            fireEvent.animationEnd(secondCard);
            expect(secondCard).toBeInTheDocument();
            expect(secondCard).toHaveStyleRule(
                'background-image',
                `url(${tarotData.imageBackCard})`
            );

            const thirdCard = screen.getByTestId('4-2');
            fireEvent.animationEnd(thirdCard);
            expect(thirdCard).toBeInTheDocument();
            expect(thirdCard).toHaveStyleRule(
                'background-image',
                `url(${tarotData.imageBackCard})`
            );

            expect(screen.getByText('Selecione uma carta')).toBeInTheDocument();
        });
    });
});
