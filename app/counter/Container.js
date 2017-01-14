import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  count: state.counter.count
})

const mapDispatchToProps = (dispatch) => ({
  onPlusClick: () => dispatch({ type: 'INCREMENT' }),
  onMinusClick: () => dispatch({ type: 'DECREMENT' })
})

const CounterContainer = (props) => (
  <div>
    <h2>Redux Counter:</h2>
    <p>
      <button onClick={props.onMinusClick}>-</button>
      {props.count}
      <button onClick={props.onPlusClick}>+</button>
    </p>
  </div>
)

CounterContainer.propTypes = {
  count: PropTypes.number.isRequired,
  onPlusClick: PropTypes.func.isRequired,
  onMinusClick: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer)
