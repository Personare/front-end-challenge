import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'whatwg-fetch';

import HomePage from '../../pages/index';

const server = setupServer();
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Home', () => {
    it('Deve mostrar o Spinner enquanto aguarda a resposta da API e removê-lo após o retorno.', async () => {
        server.use(
            rest.get(process.env.NEXT_PUBLIC_API, (req, res, ctx) => {
                return res(ctx.status(200), ctx.json({ msg: 'Mock' }));
            })
        );

        render(<HomePage />);

        const spinner = screen.getByTestId('home-spinner');
        expect(spinner).toBeInTheDocument();

        await waitFor(
            () => {
                expect(spinner).not.toBeInTheDocument();
                expect(screen.getByText('Welcome to Next.js!')).toBeVisible();
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
