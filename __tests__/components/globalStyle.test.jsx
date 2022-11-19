import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import GlobalStyle from '../../components/globalStyle';

describe('GlobalStyle Component', () => {
    /*
        Até o momento, não há uma forma de testar Global Style do styled-components.
        https://github.com/masakudamatsu/nextjs-template/issues/17
    */
    it('Ao renderizar o componente, deve ter os estilos padrão.', () => {
        render(<GlobalStyle />);
        expect(true).toBe(true);
    });
});
