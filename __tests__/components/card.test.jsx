import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import Card from '../../components/card';

const linkOrderedFrontImage =
    'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/arcano1.jpg';
const linkRandomCardImage =
    'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/arcano5.jpg';
const linkBackImage =
    'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png';

describe('Card Component', () => {
    /*
        Ao utilizar o método toHaveStyle para verificar se elemento possui certo estilo do background, o mesmo está
        apresentando problemas, retornando uma string vazia seja para color, image ou como shorthand.
        A Issue de ajuste está em desenvolvimento, mas sem solução até o momento:
        https://github.com/testing-library/jest-dom/issues/170#issuecomment-719463305.

        Como solução, o método toHaveStyleRule da lib jest-styled-components faz a comparação corretamente.
    */

    it('Card na fase 1 deve ter as caracteristicas referentes.', () => {
        render(
            <Card
                randomName="O PAPA"
                randomFrontImage={linkRandomCardImage}
                orderedFrontImage={linkOrderedFrontImage}
                backImage={linkBackImage}
                jogoIniciado={false}
                index="0"
            />
        );

        const cardPhase1 = screen.getByTestId('1-0');
        expect(cardPhase1).toBeInTheDocument();

        // Background
        expect(cardPhase1).toHaveStyleRule(
            'background-image',
            `url(${linkOrderedFrontImage})`
        );
        expect(cardPhase1).toHaveStyleRule('background-position', 'center');
        expect(cardPhase1).toHaveStyleRule('background-size', 'contain');
        expect(cardPhase1).toHaveStyleRule('background-repeat', 'no-repeat');

        // Animation
        expect(cardPhase1).toHaveStyleRule('animation', 'fCDSQb');
        expect(cardPhase1).toHaveStyleRule('animation-delay', '0ms');
        expect(cardPhase1).toHaveStyleRule('animation-duration', '1s');
        expect(cardPhase1).toHaveStyleRule('animation-fill-mode', 'both');
    });

    it('Card na fase 2 deve ter as caracteristicas referentes.', async () => {
        render(
            <Card
                randomName="O PAPA"
                randomFrontImage={linkRandomCardImage}
                orderedFrontImage={linkOrderedFrontImage}
                backImage={linkBackImage}
                jogoIniciado={true}
                index="1"
            />
        );

        const cardPhase2 = screen.getByTestId('2-1');
        expect(cardPhase2).toBeInTheDocument();

        // Background
        expect(cardPhase2.firstChild).toHaveStyleRule(
            'background-image',
            `url(${linkOrderedFrontImage})`
        );
        expect(cardPhase2.lastChild).toHaveStyleRule(
            'background-image',
            `url(${linkBackImage})`
        );

        // Animation
        expect(cardPhase2.firstChild).toHaveStyleRule('animation', 'ddxGlr');
        expect(cardPhase2.firstChild).toHaveStyleRule(
            'animation-fill-mode',
            'both'
        );
        expect(cardPhase2.firstChild).toHaveStyleRule(
            'animation-delay',
            '20ms'
        );

        expect(cardPhase2.lastChild).toHaveStyleRule('animation', 'ddxGlr');
        expect(cardPhase2.lastChild).toHaveStyleRule(
            'animation-fill-mode',
            'both'
        );
        expect(cardPhase2.lastChild).toHaveStyleRule('animation-delay', '20ms');
        expect(cardPhase2.lastChild).toHaveStyleRule(
            'animation-direction',
            'reverse'
        );
    });

    it('Card na fase 3 deve ter as caracteristicas referentes.', () => {
        render(
            <Card
                randomName="O PAPA"
                randomFrontImage={linkRandomCardImage}
                orderedFrontImage={linkOrderedFrontImage}
                backImage={linkBackImage}
                jogoIniciado={true}
                index="2"
            />
        );

        const cardPhase2 = screen.getByTestId('2-2');
        fireEvent.animationEnd(cardPhase2);

        const cardPhase3 = screen.getByTestId('3-2');
        expect(cardPhase3).toBeInTheDocument();

        // Background
        expect(cardPhase3).toHaveStyleRule(
            'background-image',
            `url(${linkBackImage})`
        );
        expect(cardPhase3).toHaveStyleRule('background-position', 'center');
        expect(cardPhase3).toHaveStyleRule('background-size', 'contain');
        expect(cardPhase3).toHaveStyleRule('background-repeat', 'no-repeat');

        // Animation
        expect(cardPhase3).toHaveStyleRule('animation', 'guAjMY');
        expect(cardPhase3).toHaveStyleRule('animation-delay', '40ms');
        expect(cardPhase3).toHaveStyleRule('animation-duration', '1s');
        expect(cardPhase3).toHaveStyleRule('animation-fill-mode', 'forwards');
    });

    it('Card na fase 4 deve ter as caracteristicas referentes.', () => {
        render(
            <Card
                randomName="O PAPA"
                randomFrontImage={linkRandomCardImage}
                orderedFrontImage={linkOrderedFrontImage}
                backImage={linkBackImage}
                jogoIniciado={true}
                index="3"
            />
        );

        const cardPhase2 = screen.getByTestId('2-3');
        fireEvent.animationEnd(cardPhase2);

        const cardPhase3 = screen.getByTestId('3-3');
        fireEvent.animationEnd(cardPhase3);

        const cardPhase4 = screen.getByTestId('4-3');
        expect(cardPhase4).toBeInTheDocument();

        // Background
        expect(cardPhase4).toHaveStyleRule(
            'background-image',
            `url(${linkBackImage})`
        );
        expect(cardPhase4).toHaveStyleRule('background-position', 'center');
        expect(cardPhase4).toHaveStyleRule('background-size', 'contain');
        expect(cardPhase4).toHaveStyleRule('background-repeat', 'no-repeat');

        // Animation
        expect(cardPhase4).toHaveStyleRule('animation', 'fCDSQb');
        expect(cardPhase4).toHaveStyleRule('animation-delay', '60ms');
        expect(cardPhase4).toHaveStyleRule('animation-duration', '1s');
        expect(cardPhase4).toHaveStyleRule('animation-fill-mode', 'both');
    });

    it('Card na fase 5 deve ter as caracteristicas referentes.', async () => {
        render(
            <Card
                randomName="O PAPA"
                randomFrontImage={linkRandomCardImage}
                orderedFrontImage={linkOrderedFrontImage}
                backImage={linkBackImage}
                jogoIniciado={true}
                index="4"
            />
        );

        const cardPhase2 = screen.getByTestId('2-4');
        fireEvent.animationEnd(cardPhase2);

        const cardPhase3 = screen.getByTestId('3-4');
        fireEvent.animationEnd(cardPhase3);

        const cardPhase4 = screen.getByTestId('4-4');
        fireEvent.click(cardPhase4);

        const cardPhase5 = screen.getByTestId('5-4');
        expect(cardPhase5).toBeInTheDocument();

        // Background
        expect(cardPhase5.firstChild).toHaveStyleRule(
            'background-image',
            `url(${linkBackImage})`
        );
        expect(cardPhase5.lastChild).toHaveStyleRule(
            'background-image',
            `url(${linkRandomCardImage})`
        );

        // Animation
        expect(cardPhase5.firstChild).toHaveStyleRule('animation', 'ddxGlr');
        expect(cardPhase5.firstChild).toHaveStyleRule(
            'animation-fill-mode',
            'both'
        );
        expect(cardPhase5.firstChild).toHaveStyleRule('animation-delay', '0ms');

        expect(cardPhase5.lastChild).toHaveStyleRule('animation', 'ddxGlr');
        expect(cardPhase5.lastChild).toHaveStyleRule(
            'animation-fill-mode',
            'both'
        );
        expect(cardPhase5.lastChild).toHaveStyleRule('animation-delay', '0ms');
        expect(cardPhase5.lastChild).toHaveStyleRule(
            'animation-direction',
            'reverse'
        );
    });
});
