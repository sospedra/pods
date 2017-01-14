import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const load = () => {
  ReactDOM.render(<App />, document.querySelector('#app'))
}

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load)
} else {
  load()
}
