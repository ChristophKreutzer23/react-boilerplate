import React, { Component } from 'react'
import webpackLogo from '../images/webpack.png'

class App extends Component {
	render() {
		return (
			<div>
				<h1>My React App</h1>
				<img src={webpackLogo} alt="webpack" />
			</div>
		)
	}
}

export default App
