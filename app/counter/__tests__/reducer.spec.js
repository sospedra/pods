/* global describe, it, expect */
import defaultState from '../state'
import reducer, {
  INCREMENT,
  DECREMENT
} from '../reducer'

describe('counter reducer suite', () => {
  let state = defaultState

  it('should return default state at first', () => {
    expect(reducer()).toEqual(defaultState)
  })

  it(`should ${INCREMENT} the count`, () => {
    const action = { type: INCREMENT }
    state = reducer(state, action)
    state = reducer(state, action)

    expect(state).toEqual({
      count: 2
    })
  })

  it(`should ${DECREMENT} the count`, () => {
    const action = { type: DECREMENT }
    expect(reducer(state, action)).toEqual({
      count: 1
    })
  })
})
