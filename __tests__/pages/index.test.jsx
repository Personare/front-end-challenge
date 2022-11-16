import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import 'whatwg-fetch';

import HomePage from '../../pages/index';
import tarotData from '../tarotMock.json';

const server = setupServer();
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('HomePage', () => {
    it('Deve mostrar o Spinner enquanto aguarda a resposta da API, exibir o botão para iniciar o jogo e as cartas que retornaram.', async () => {
        server.use(
            rest.get(process.env.NEXT_PUBLIC_API, (req, res, ctx) => {
                return res(ctx.status(200), ctx.json(tarotData));
            })
        );

        render(<HomePage />);

        const spinner = screen.getByTestId('home-spinner');
        expect(spinner).toBeInTheDocument();

        await waitFor(
            () => {
                expect(spinner).not.toBeInTheDocument();

                const btn = screen.getByRole('button', {
                    name: 'Iniciar o Jogo',
                });
                expect(btn).toBeInTheDocument();

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
            },
            { timeout: 3000 }
        );
    });

    it('Deve manter o Spinner e mostrar os textos correspondentes caso a API retorne algum erro.', async () => {
        server.use(
            rest.get(process.env.NEXT_PUBLIC_API, (req, res, ctx) => {
                return res(ctx.status(500), ctx.json({ msg: 'Mock' }));
            })
        );

        render(<HomePage />);

        const spinner = screen.getByTestId('home-spinner');
        expect(spinner).toBeInTheDocument();

        await waitFor(
            () => {
                expect(spinner).toBeVisible();
                expect(
                    screen.getByText('Houston, we have a problem...')
                ).toBeVisible();
                expect(
                    screen.getByText('Recarregue a página e tente novamente.')
                ).toBeVisible();
            },
            { timeout: 3000 }
        );
    });
});
