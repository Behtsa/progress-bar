import React from 'react';
import ReactDom from 'react-dom'

export default class ProgressBar extends React.Component {
constructor(){
		super();
		this.state = {progress: 0};
	}
	render(){
		let styleContainer = {
			border : '1px solid black',
			height: '30px'
		}

		let styleBar = {
			backgroundColor: 'green',
			width: (this.state.progress) + '%',
			height: 'inherit',
			content: ' '
		}


		return(
			<div style = {styleContainer}>
				<div style = {styleBar}></div>
			</div>
		)
	}

	componentDidMount(){
		let intervalId = setInterval( () => {
			console.log(this.state.progress);
			if(this.state.progress < 100){
			this.setState({progress: this.state.progress += 1})
		} else {
			clearInterval(intervalId);
		}
		},100)
	}
}