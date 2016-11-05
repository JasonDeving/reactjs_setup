import React from 'react';
import Contact from './Contact.js';


class ContactsList extends React.Component {
	constructor() {
		super();
		this.state = {
			search: ''
		}
	}
	updateSearch(e) {
		this.setState({search: e.target.value})
	}
	render() {
		let filteredContacts = this.props.contacts.filter(
				(contact) => {
					return contact.name.toLowerCase().indexOf(this.state.search) !== -1;
				}
			);
		return (
			<div>
				<ul>
					{filteredContacts.map((contact)=> {
						return <Contact contact={contact} key={contact.id}/>
					})
					}
				</ul>
				<input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
			</div>
				
			)
	}
}
module.exports = ContactsList;