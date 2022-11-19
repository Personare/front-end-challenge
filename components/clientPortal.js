import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

/*
    HOC responsável por transportar o elemento do Modal para se tornar filho direto do elemento Main.
    Dessa forma, continua recebendo os estilos vindo direto do Next.js como font-family,
    e não quebra a ordenação do flex no qual as cartas são exibidas.

    Caso não haja main na árvore do documento, não renderiza nada.
*/
export default function ClientPortal(props) {
    const [mounted, setMounted] = useState(false);
    const ref = useRef();

    useEffect(() => {
        ref.current = document.getElementsByTagName('main')[0];
        if (ref.current) {
            setMounted(true);
        }
    }, []);

    return mounted
        ? createPortal(<div {...props}>{props.children}</div>, ref.current)
        : null;
}
