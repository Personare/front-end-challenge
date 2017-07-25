import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, IndexRoute, Link, hashHistory, HashRouter } from 'react-router'
import Header from './header.jsx'
import Cartas from './app.jsx'


ReactDom.render(
	<div className="container">
		<Header />,
    	<Cartas />
    </div>,
	document.getElementById('taro')
)