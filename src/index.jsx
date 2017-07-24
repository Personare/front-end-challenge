import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, IndexRoute, Link, hashHistory, HashRouter } from 'react-router'
import Cartas from './app.jsx'


ReactDom.render(
    <Cartas />,
	document.getElementById('taro')
)