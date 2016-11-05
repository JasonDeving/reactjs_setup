import React from 'react';
import ReactDOM from 'react-dom';
import ContactsList from './ContactsList.js';

let contacts = [
	{
		id: 1,
		name: 'Jason',
		phone: '555-555-5555'
	},
	{
		id: 2,
		name: 'Yoyo',
		phone: '666-555-5555'
	},
	{
		id: 3,
		name: 'Tweety',
		phone: '777-555-5555'
	},
	{
		id: 4,
		name: 'Tweety',
		phone: '888-555-5555'
	},
]

class App extends React.Component {
	render() {
		return (
				<div>
					<h1>Contact List</h1>
					<ContactsList contacts={this.props.contacts}/>
				</div>
			)
	}
}

 
ReactDOM.render(<App contacts={contacts} />, document.getElementById('plop'));