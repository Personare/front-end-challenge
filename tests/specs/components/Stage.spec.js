import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Stage } from 'components/Stage';
import { Menu } from 'components/Menu';

describe('Stage - <Stage />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Stage />);
    });

    it('Deve renderizar o componente', () => {
        expect(wrapper.find('.stage')).to.have.length(1);
    });

    it('Deve a lista de cards', () => {
        expect(wrapper.find('.cards-list')).to.have.length(1);
    });

    it('Deve existir o componente Menu', () => {
        expect(wrapper.find(Menu)).to.have.length(1);
    });
});
