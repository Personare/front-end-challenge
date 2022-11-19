import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import ClientPortal from '../../components/clientPortal';

describe('ClientPortal', () => {
    it('Quando o ClientPortal é montado, transporta seus filhos dentro de uma div como filho direto do elemento main.', () => {
        const { asFragment } = render(
            <main>
                <div>
                    <ClientPortal>
                        <span>Tudo bom?</span>
                    </ClientPortal>
                    <span>Salve!</span>
                </div>
            </main>
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it('Quando o ClientPortal transporta seus filhos, a div pai deve receber suas props.', () => {
        const { asFragment } = render(
            <main>
                <div>
                    <ClientPortal test-id="teste">
                        <span>Tudo bom?</span>
                    </ClientPortal>
                    <span>Salve!</span>
                </div>
            </main>
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it('Quando o ClientPortal é montado, mas não encontra o elemento main, não renderiza nada.', () => {
        const { asFragment } = render(
            <div>
                <ClientPortal test-id="teste">
                    <span>Salve!</span>
                </ClientPortal>
            </div>
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
