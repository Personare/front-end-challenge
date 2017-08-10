import React from 'react';
import { Menu } from 'components/Menu';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';

chai.use(sinonChai);

describe('Menu - <Menu />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Menu />);
    });

    it('Deve existir o item para dar start quando play=false', () => {
        wrapper.setProps({ play: false });
        expect(wrapper.find('.start')).to.have.length(1);
    });

    it('Deve existir o item para mostrar cartas quando play=true', () => {
        wrapper.setProps({ play: true });
        expect(wrapper.find('.stop')).to.have.length(1);
    });

    it('Deve chamar onStart quando clicar no button start', () => {
        const onStart = sinon.spy();
        wrapper.setProps({ onStart });
        wrapper.find('.start').simulate('click');
        expect(onStart).to.be.calledOnce;
    });

    it('Deve chamar onStop quando clicar no button stop', () => {
        const onStop = sinon.spy();
        wrapper.setProps({ onStop, play: true });
        wrapper.find('.stop').simulate('click');
        expect(onStop).to.be.calledOnce;
    });
});
