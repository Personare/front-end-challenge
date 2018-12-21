import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'

import store from './store'
import App from './containers/App'
import * as serviceWorker from './serviceWorker'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
