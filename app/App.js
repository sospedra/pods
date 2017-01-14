import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Match } from 'react-router'

import reducers from './master/store/reducers'
import state from './master/store/state'
import Counter from './counter'
import Navigator from './navigator'

const store = createStore(reducers, state)

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <Navigator>
        <Match pattern='/' component={Counter} />
      </Navigator>
    </BrowserRouter>
  </Provider>
)
