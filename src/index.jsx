import React from 'react'
import ReactDom from 'react-dom'
import Header from './header.jsx'
import Cartas from './cartas.jsx'
import Jogo from './jogo.jsx'

ReactDom.render(
	<div className="container">
		<Header />,
    	<Cartas />,
    	<Jogo />
    </div>,
	document.getElementById('taro')
)