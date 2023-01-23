import React from 'react';
import { nanoid } from 'nanoid';

import Form from './Form';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const normalizedName = data.name.toLowerCase();
    const isTheSame = this.state.contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );
    if (isTheSame) {
      return alert(`contact ${data.name} exist`);
    }
    data.id = nanoid();
    this.setState(prevState => ({
      contacts: [data, ...prevState.contacts],
    }));
  };
  filterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const { filter, contacts } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(el =>
      el.name.toLowerCase().includes(lowercasedFilter)
    );
    return (
      <div>
        <h1 className="underline">Contact form</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <Filter onChange={this.filterChange} value={filter} />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}
export { App };
