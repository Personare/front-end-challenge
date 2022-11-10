import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import Spinner from '../../components/spinner';

describe('Spinner Component', () => {
    it('Caso a prop loadingProblem seja falsa, deve exibir apenas o Spinner na cor coorespondente.', () => {
        render(<Spinner loadingProblem={false} />);

        const spinner = screen.getByTestId('home-spinner');
        expect(spinner).toBeInTheDocument();
        expect(spinner).toHaveStyle('background-color: #36d7b7');

        expect(
            screen.getByText('Houston, we have a problem...')
        ).not.toBeVisible();
        expect(
            screen.getByText('Recarregue a página e tente novamente.')
        ).not.toBeVisible();
    });

    it('Caso a prop loadingProblem seja verdadeira, deve exibir o Spinner e seus textos na cor coorespondente.', async () => {
        render(<Spinner loadingProblem={true} />);

        const spinner = screen.getByTestId('home-spinner');
        expect(spinner).toBeVisible();

        await waitFor(
            () => {
                expect(spinner).toHaveStyle('background-color: #F52132');
                expect(
                    screen.getByText('Houston, we have a problem...')
                ).toBeVisible();
                expect(
                    screen.getByText('Recarregue a página e tente novamente.')
                ).toBeVisible();
            },
            { timeout: 500 }
        );
    });
});
