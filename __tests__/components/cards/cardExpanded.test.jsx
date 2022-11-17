import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import GlobalStyle from '../../../components/globalStyle';
import CardExpanded from '../../../components/cards/cardExpanded';

const cardName = 'O MAGO';
const cardImage =
    'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/arcano1.jpg';

describe('CardExpanded Component', () => {
    it('O componente deve iniciar visível, junto do modal e seu overlay.', () => {
        render(<CardExpanded cardName={cardName} cardImage={cardImage} />);

        const cardExpanded = screen.getByTestId('card-expanded');
        expect(cardExpanded).toBeInTheDocument();
        expect(cardExpanded).toBeVisible();
        expect(cardExpanded.firstChild).toBeVisible();
        expect(cardExpanded.lastChild).toBeVisible();

        const heading = screen.getByRole('heading', { name: cardName });
        expect(heading).toBeInTheDocument();
        expect(heading).toBeVisible();

        const text = screen.getByText('Mussum Ipsum', { exact: false });
        expect(text).toBeInTheDocument();
        expect(text).toBeVisible();

        const btn = screen.getByRole('button', { name: 'Mais uma?' });
        expect(btn).toBeInTheDocument();
        expect(btn).toBeVisible();
    });

    it('Ao clicar no botão, deve esconder o modal e seu overlay.', () => {
        // Context adicionado para evitar que toggleIsModalOpenGlobalState seja undefined.
        render(
            <GlobalStyle>
                <CardExpanded cardName={cardName} cardImage={cardImage} />
            </GlobalStyle>
        );

        const btn = screen.getByRole('button', { name: 'Mais uma?' });
        fireEvent.click(btn);

        const cardExpanded = screen.getByTestId('card-expanded');
        expect(cardExpanded).toBeInTheDocument();

        expect(cardExpanded.firstChild).toHaveClass('close-modal');
        expect(cardExpanded.firstChild).not.toBeVisible();
        expect(cardExpanded.lastChild).toHaveClass('close-modal');
        expect(cardExpanded.lastChild).not.toBeVisible();
    });
});
