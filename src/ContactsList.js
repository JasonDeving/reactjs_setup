import React from 'react';
import Contact from './Contact.js';


class ContactsList extends React.Component {
	render() {
		return (
				<ul>
					{this.props.contacts.map((contact)=> {
						return <Contact contact={contact} key={contact.id}/>
					})
					}
				</ul>
			)
	}
}
module.exports = ContactsList;