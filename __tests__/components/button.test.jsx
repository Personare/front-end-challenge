import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import Button from '../../components/button';

describe('Button Component', () => {
    it('O botão default deve ter a estilização apropriada.', () => {
        render(<Button>Botão Brabo</Button>);

        const btn = screen.getByRole('button', { name: 'Botão Brabo' });

        expect(btn).toHaveStyleRule('color: #0d0d0d');
        expect(btn).toHaveStyleRule('background-color: #f2ea7e');
        expect(btn).toHaveStyleRule('border: #f2ea7e');
    });

    it('O botão default deve ter a estilização apropriada quando ocorrer o evento de hover.', () => {
        render(<Button>Botão Brabo</Button>);

        const btn = screen.getByRole('button', { name: 'Botão Brabo' });
        fireEvent.mouseEnter(btn);

        expect(btn).toHaveStyleRule('border: 2px solid #d1c848');
    });

    it('O botão na versão black deve ter a estilização apropriada.', () => {
        render(<Button black>Botão Brabo</Button>);

        const btn = screen.getByRole('button', { name: 'Botão Brabo' });

        expect(btn).toHaveStyleRule('color: white');
        expect(btn).toHaveStyleRule('background-color: #0d0d0d');
        expect(btn).toHaveStyleRule('border: #0d0d0d');
    });

    it('O botão na versão black deve ter a estilização apropriada quando ocorrer o evento de hover.', () => {
        render(<Button black>Botão Brabo</Button>);

        const btn = screen.getByRole('button', { name: 'Botão Brabo' });
        fireEvent.mouseEnter(btn);

        expect(btn).toHaveStyleRule('border: 2px solid #6e6e6e');
    });

    it('Ao receber props como o evento onClick, deve repassar para o elemento HTML.', () => {
        const onClickHandler = jest.fn();
        render(<Button onClick={onClickHandler}>Botão Brabo</Button>);

        const btn = screen.getByRole('button', { name: 'Botão Brabo' });
        fireEvent.click(btn);

        expect(onClickHandler).toHaveBeenCalled();
    });
});
