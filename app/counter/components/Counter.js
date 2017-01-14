import React, { PropTypes } from 'react'

const Counter = (props) => (
  <div>
    <h2>Redux Counter:</h2>
    <p>
      <button onClick={props.onMinusClick}>-</button>
      {props.count}
      <button onClick={props.onPlusClick}>+</button>
    </p>
  </div>
)

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onPlusClick: PropTypes.func.isRequired,
  onMinusClick: PropTypes.func.isRequired
}

export default Counter
