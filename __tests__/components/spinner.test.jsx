import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import Spinner from '../../components/spinner';

describe('Spinner Component', () => {
    it('Caso a prop loadingError seja falsa, deve exibir apenas o Spinner na cor coorespondente.', () => {
        render(<Spinner loadingError={false} />);

        const spinner = screen.getByTestId('spinner-1');
        expect(spinner).toBeInTheDocument();
        expect(spinner).toBeVisible();
        expect(spinner).toHaveStyleRule('background-color: #4B83A6');

        expect(
            screen.queryByText('Houston, we have a problem...')
        ).not.toBeInTheDocument();
        expect(
            screen.queryByText('Recarregue a página e tente novamente.')
        ).not.toBeInTheDocument();
    });

    it('Caso a prop loadingError seja verdadeira, deve exibir o Spinner e seus textos na cor coorespondente.', async () => {
        render(<Spinner loadingError={true} />);

        // Ativando animação.
        const spinnerPhase2 = screen.getByTestId('spinner-2');
        fireEvent.animationEnd(spinnerPhase2);

        const spinnerPhase3 = screen.getByTestId('spinner-3');
        expect(spinnerPhase3).toHaveStyleRule('background-color: #4B83A6');

        await waitFor(() => {
            expect(
                screen.getByText('Houston, we have a problem...')
            ).toBeVisible();
            expect(
                screen.getByText('Recarregue a página e tente novamente.')
            ).toBeVisible();
        }),
            { timeout: 2000 };
    });
});
