import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../pages/index';

describe('Home', () => {
    it('Main div deve ser renderizada.', () => {
        render(<HomePage />);

        const div = screen.getByText(/welcome to next\.js!/i);
        expect(div).toBeInTheDocument();
    });

    it('Botão principal deve ser renderizada.', () => {
        render(<HomePage />);

        const btn = screen.getByRole('button');
        expect(btn).toBeInTheDocument();
    });
});
