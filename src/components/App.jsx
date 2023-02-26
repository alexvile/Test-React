import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('contacts changed');
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const pushDataToArr = data => {
    setContacts(prevState => [data, ...prevState]);
  };

  const formSubmitHandler = data => {
    // console.log(data);
    const normalizedName = data.name.toLowerCase();

    const isTheSame = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (isTheSame) {
      alert(`${isTheSame.name} is already in contacts`);
      return;
    }

    data.id = nanoid();
    pushDataToArr(data);
  };

  const deleteContact = toDeleteId => {
    // contacts.filter(el => el.id !== id);
    console.log(toDeleteId);
    setContacts(prevState => prevState.filter(el => el.id !== toDeleteId));
  };
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <div>
      <h1 className="text-3xl">Contact form</h1>
      <Form onSubmit={formSubmitHandler} />
      <Filter changeFilter={changeFilter} filter={filter} />
      <ContactList data={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
};
