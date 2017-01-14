import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {
  browserHistory,
  Router,
  Route
} from 'react-router'

import reducers from './master/store/reducers'
import state from './master/store/state'
import Counter from './counter/Container'

const store = createStore(reducers, state)

export default () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Counter} />
    </Router>
  </Provider>
)
