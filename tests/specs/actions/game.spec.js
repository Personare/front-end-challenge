import game from 'reducers/game';
import * as actions from 'actions/game';
import { expect } from 'chai';

describe('Actions :: game', () => {
    it('Deve criar uma action para load dos dados', () => {
        const data = { item: 1 };
        const expectedAction = {
            type: actions.LOAD,
            payload: data,
        }
        expect(actions.loadData(data)).to.eql(expectedAction);
    });

    it('Deve criar uma action para start', () => {
        const expectedAction = { type: actions.START };
        expect(actions.start()).to.eql(expectedAction);
    });

    it('Deve criar uma action para stop', () => {
        const expectedAction = { type: actions.STOP };
        expect(actions.stop()).to.eql(expectedAction);
    });

    it('Deve criar uma action para shuffle', () => {
        const expectedAction = { type: actions.SHUFFLE };
        expect(actions.shuffle()).to.eql(expectedAction);
    });

    it('Deve criar a action para selecionar a carta', () => {
        const expectedAction = {
            type: actions.SELECT,
            payload: { id: 1 },
        };
        expect(actions.setCard(1)).to.eql(expectedAction);
    })
});
