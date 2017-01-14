import defaultState from './state'

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        count: ++state.count
      })
    case 'DECREMENT':
      return Object.assign({}, state, {
        count: --state.count
      })
    default:
      return state
  }
}
