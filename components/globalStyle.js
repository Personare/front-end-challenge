import { useState, createContext } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyleContainer = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;
        overflow: ${(props) => (props.isModalOpen ? 'hidden' : 'visible')};
    }
`;

export const GlobalStyleContext = createContext();

/*
    O componente é um Context Provider para quando componentes do tipo Modal forem abertos e fechados,
    possam esconder e mostrar o overflow do body.

    É também possível adicionar estilos para o Body, como o font-family informado.
*/
export default function GlobalStyle({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleIsModalOpenState = () => {
        setIsModalOpen(isModalOpen ? false : true);
    };

    return (
        <GlobalStyleContext.Provider value={toggleIsModalOpenState}>
            <GlobalStyleContainer isModalOpen={isModalOpen} />
            {children}
        </GlobalStyleContext.Provider>
    );
}
