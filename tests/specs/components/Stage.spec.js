import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Stage } from 'components/Stage';
import { Menu } from 'components/Menu';
import { Card } from 'components/Card';

describe('Stage - <Stage />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Stage
                order={[1, 2]}
            />
        );
    });

    it('Deve renderizar o componente', () => {
        expect(wrapper.find('.stage')).to.have.length(1);
    });

    it('Deve a lista de cards', () => {
        expect(wrapper.find('.cards-list')).to.have.length(1);
    });

    it('Deve a existir a quantidade de cards existentes na lista da props order', () => {
        expect(wrapper.find(Card)).to.have.length(2);
    });

    it('Deve existir o componente Menu', () => {
        expect(wrapper.find(Menu)).to.have.length(1);
    });
});
