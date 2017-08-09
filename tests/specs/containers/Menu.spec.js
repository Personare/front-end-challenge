import React from 'react';
import Menu from 'containers/Menu';
import { mountConnected, mockStore } from '../../utils/helper';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import * as actions from 'actions/game';

chai.use(sinonChai);

describe('Menu - <Menu />', () => {
    let wrapper;
    let store;

    beforeEach(() => {
        store = mockStore({});
        wrapper = mountConnected(<Menu />, store);
    });

    it('Deve existir o item para dar start', () => {
        expect(wrapper.find('.start')).to.have.length(1);
    });

    it('Ao clicar no start deve mudar o start para stop', () => {
        wrapper.find('.start').simulate('click');
        expect(wrapper.find('.start')).to.have.length(0);
        expect(wrapper.find('.stop')).to.have.length(1);
    });

    it('Ao clicar no stop deve voltar para start ', () => {
        wrapper.find('.start').simulate('click');
        expect(wrapper.find('.start')).to.have.length(0);
        expect(wrapper.find('.stop')).to.have.length(1);
        wrapper.find('.stop').simulate('click');
        expect(wrapper.find('.start')).to.have.length(1);
        expect(wrapper.find('.stop')).to.have.length(0);
    });
});
