import React from 'react'
import { render } from 'react-dom'
import { injectGlobal } from 'styled-components'
import { Home } from './containers'

render(
  <Home />, document.getElementById('root')
)


injectGlobal`

`
