import { randomicArray } from './utils'

describe('Utils', () => {
  it('should randomize a array', () => {
    const arr = [1, 2, 3, 5, 6, 7, 8, 9, 0]
    expect(randomicArray(arr)).toEqual(expect.arrayContaining(arr))
  })
})
