import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Card } from 'components/Card';
import TweenLite from 'gsap';

chai.use(sinonChai);

describe('Card - <Card />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Card />);
    });

    it('Deve renderizar o componente', () => {
        expect(wrapper.find('.card')).to.have.length(1);
    });

    it('Deve existir item front', () => {
        expect(wrapper.find('.card .front')).to.have.length(1);
    });

    it('Deve existir item back', () => {
        expect(wrapper.find('.card .back')).to.have.length(1);
    });

    it('Exibe a imagem back da carta vindo da props backImg', () => {
        const backImg = 'http://lorem.com.br/ipsum.jpg';
        wrapper.setProps({ backImg });
        expect(wrapper.find('.back img').props().src).to.equal(backImg);
    });

    it('Exibe a imagem front da carta vindo da props frontImg', () => {
        const frontImg = 'http://lorem.com.br/ipsum.jpg';
        wrapper.setProps({ frontImg });
        expect(wrapper.find('.front img').props().src).to.equal(frontImg);
    });

    it('Deve fazer a animação quando a props selected for alterada', () => {
        const tween = sinon.stub(TweenLite, 'to');
        wrapper.setProps({ selected: true });
        wrapper.setProps({ selected: false });
        tween.restore();
        expect(tween).to.be.calledTwice;
    });
});
