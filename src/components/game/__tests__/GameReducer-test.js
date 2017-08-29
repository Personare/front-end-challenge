import reducer from '../GameReducer'
import * as actions from '../GameActions'

const tarot = [{
  name: 'O MAGO',
  imageUrl: 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/arcano1.jpg'
}]

describe('Game Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  it('assign cards on succeded request', () => {
    const expectedState = { tarot }
    expect(reducer({}, {
      type: actions.TAROT.SUCCESS,
      tarot
    })).toEqual(expectedState)
  })
})
