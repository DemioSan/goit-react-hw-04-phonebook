import React from 'react';
import { Contact } from '../Contact/Contact';

export class ContactList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.initialValues.length !== 0 ? (
          this.props.initialValues.map(contact => (
            <Contact
              name={contact.name}
              number={contact.number}
              key={contact.id}
              handleDelete={this.props.handleDelete}
            />
          ))
        ) : (
          <p>No contacts saved</p>
        )}
      </ul>
    );
  }

  handleDelete = contactId => {
    this.props.onDelete(contactId);
  };
}
