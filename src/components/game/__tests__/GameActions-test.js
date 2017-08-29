import * as actions from '../GameActions'

describe('Game Actions Types', () => {
  it('tarot request actions types', () => {
    expect(actions.TAROT.REQUEST).toBe('TAROT_REQUEST')
    expect(actions.TAROT.SUCCESS).toBe('TAROT_SUCCESS')
    expect(actions.TAROT.FAILURE).toBe('TAROT_FAILURE')
  })

  it('tarot build a action', () => {
    expect(actions.tarotRequestAction()).toEqual({
      type: actions.TAROT.REQUEST
    })
  })
})
