import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Stage } from 'components/Stage';
import { Menu } from 'components/Menu';
import { Card } from 'components/Card';

describe('Stage - <Stage />', () => {
    let wrapper;
    let cards;

    beforeEach(() => {
        cards = {
            1: { name: 'Lorem', image: 'http://lorem.com/1.jpg', imageBackCard: 'http://back.com/0.jpg' },
            2: { name: 'Lorem', image: 'http://lorem.com/2.jpg', imageBackCard: 'http://back.com/0.jpg' },
        };

        wrapper = shallow(
            <Stage
                order={Object.keys(cards)}
                cards={cards}
            />
        );
    });

    it('Deve renderizar o componente', () => {
        expect(wrapper.find('.stage')).to.have.length(1);
    });

    it('Deve a lista de cards', () => {
        expect(wrapper.find('.cards-list')).to.have.length(1);
    });

    context('Integração com Card:', () => {
        it('Deve a existir a quantidade de cards existentes na lista da props order', () => {
            expect(wrapper.find(Card)).to.have.length(2);
        });

        it('Deve a passar os items da props cards para o component Card', () => {
            for (let i = 0; i < wrapper.find(Card).length; i++) {
                expect(wrapper.find(Card).at(i).props().name).to.equal(cards[i + 1].name);
                expect(wrapper.find(Card).at(i).props().frontImg).to.equal(cards[i + 1].image);
                expect(wrapper.find(Card).at(i).props().backImg).to.equal(cards[i + 1].imageBackCard);
            }
        });
    });


    it('Deve existir o componente Menu', () => {
        expect(wrapper.find(Menu)).to.have.length(1);
    });
});
