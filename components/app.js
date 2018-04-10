import React from 'react'
import ReactDOM from 'react-dom'
import ProgressBar from './ProgressBar.js'

class App extends React.Component{
	constructor(){
		super();
		this.state = {numero: 3};
		this.itsFunction = this.itsFunction.bind(this);
	}

	itsFunction(){
		// alert('hola');
		console.log(this);
		this.setState({numero: 30});
	}

	render(){
		return(
			<div>
				<ProgressBar />
				<ProgressBar />
				<h1>{this.state.numero}</h1>
				<button onClick = {this.itsFunction}>Aprietame</button>
			</div>)
	}
}

ReactDOM.render(<App />, document.getElementById('react-container'));