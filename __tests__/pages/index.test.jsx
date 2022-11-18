import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
    render,
    screen,
    fireEvent,
    waitForElementToBeRemoved,
    waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import 'whatwg-fetch';

import HomePage from '../../pages/index';
import tarotData from '../tarotMock.json';

// Mock do shuffle aleatório do Card Manager para que a ordem seja sempre o inverso do original.
jest.mock('../../components/utils', () => {
    return {
        __esModule: true,
        shuffleArrayElements: (array) => {
            const cards = [...array];
            return cards.reverse();
        },
    };
});

const server = setupServer();

beforeAll(() => {
    server.listen();
});

afterEach(() => {
    server.resetHandlers();
});

afterAll(() => {
    server.close();
    jest.clearAllMocks();
});

describe('HomePage', () => {
    it('Snapshot do componente enquanto aguarda a resposta da API.', async () => {
        server.use(
            rest.get(process.env.NEXT_PUBLIC_API, (req, res, ctx) => {
                return res(ctx.status(200), ctx.json(tarotData));
            })
        );

        const { asFragment } = render(<HomePage />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('Snapshot do componente caso a API retorne algum erro', async () => {
        server.use(
            rest.get(process.env.NEXT_PUBLIC_API, (req, res, ctx) => {
                return res(ctx.status(500), ctx.json({ msg: 'Mock' }));
            })
        );

        const { asFragment } = render(<HomePage />);

        // Ativando animação.
        await waitFor(
            () => {
                const spinnerPhase2 = screen.getByTestId('spinner-2');
                fireEvent.animationEnd(spinnerPhase2);
            },
            { timeout: 3000 }
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it('Snapshot do componente após o carregamento da API e antes de iniciar o jogo.', async () => {
        server.use(
            rest.get(process.env.NEXT_PUBLIC_API, (req, res, ctx) => {
                return res(ctx.status(200), ctx.json(tarotData));
            })
        );

        const { asFragment } = render(<HomePage />);
        await waitForElementToBeRemoved(() => screen.getByTestId('spinner-1'), {
            timeout: 3000,
        });

        expect(asFragment()).toMatchSnapshot();
    });

    it('Snapshot do componente depois de iniciar o jogo.', async () => {
        server.use(
            rest.get(process.env.NEXT_PUBLIC_API, (req, res, ctx) => {
                return res(ctx.status(200), ctx.json(tarotData));
            })
        );

        const { asFragment } = render(<HomePage />);
        await waitForElementToBeRemoved(() => screen.getByTestId('spinner-1'), {
            timeout: 3000,
        });

        const btnStartGame = screen.getByRole('button', {
            name: 'Iniciar o Jogo',
        });
        fireEvent.click(btnStartGame);

        // Ativando os eventos
        const card1Phase2 = screen.getByTestId('2-0');
        const card2Phase2 = screen.getByTestId('2-1');
        const card3Phase2 = screen.getByTestId('2-2');
        fireEvent.animationEnd(card1Phase2);
        fireEvent.animationEnd(card2Phase2);
        fireEvent.animationEnd(card3Phase2);

        const card1Phase3 = screen.getByTestId('3-0');
        const card2Phase3 = screen.getByTestId('3-1');
        const card3Phase3 = screen.getByTestId('3-2');
        fireEvent.animationEnd(card1Phase3);
        fireEvent.animationEnd(card2Phase3);
        fireEvent.animationEnd(card3Phase3);

        expect(asFragment()).toMatchSnapshot();
    });

    it('Snapshot do componente depois de iniciar o jogo e selecionar uma carta.', async () => {
        server.use(
            rest.get(process.env.NEXT_PUBLIC_API, (req, res, ctx) => {
                return res(ctx.status(200), ctx.json(tarotData));
            })
        );

        const { asFragment } = render(<HomePage />);
        await waitForElementToBeRemoved(() => screen.getByTestId('spinner-1'), {
            timeout: 3000,
        });

        const btnStartGame = screen.getByRole('button', {
            name: 'Iniciar o Jogo',
        });
        fireEvent.click(btnStartGame);

        // Ativando os eventos
        const card1Phase2 = screen.getByTestId('2-0');
        const card2Phase2 = screen.getByTestId('2-1');
        const card3Phase2 = screen.getByTestId('2-2');
        fireEvent.animationEnd(card1Phase2);
        fireEvent.animationEnd(card2Phase2);
        fireEvent.animationEnd(card3Phase2);

        const card1Phase3 = screen.getByTestId('3-0');
        const card2Phase3 = screen.getByTestId('3-1');
        const card3Phase3 = screen.getByTestId('3-2');
        fireEvent.animationEnd(card1Phase3);
        fireEvent.animationEnd(card2Phase3);
        fireEvent.animationEnd(card3Phase3);

        const card1Phase4 = screen.getByTestId('4-0');
        fireEvent.click(card1Phase4);

        expect(asFragment()).toMatchSnapshot();
    });
});
