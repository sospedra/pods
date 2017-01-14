import React from 'react'
import { connect } from 'react-redux'

import { INCREMENT, DECREMENT } from './reducer'
import Counter from './components/Counter'

const mapStateToProps = (state) => ({
  count: state.counter.count
})

const mapDispatchToProps = (dispatch) => ({
  onPlusClick: () => dispatch({ type: INCREMENT }),
  onMinusClick: () => dispatch({ type: DECREMENT })
})

const CounterContainer = (props) => (<Counter {...props} />)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer)
