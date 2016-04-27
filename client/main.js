import 'babel-polyfill' // for es6 promise required for fetch
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

render(
  <Root />,
  document.getElementById('root')
)