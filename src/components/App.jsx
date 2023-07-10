import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Container } from 'components/Container/Container';
import ContactForm from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useLocalStorage } from 'utils/LocolStorage/localStorage';
import style from 'components/Apx.module.css';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const handleFormSubmit = contact => {
    const isInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    const newContact = { id: nanoid(), ...contact };
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleContactDelete = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <div className={style.container}>
        <ContactForm onSubmit={handleFormSubmit} />
        <h2>Contacts</h2>
        {contacts.length > 0 ? (
          <Filter value={filter} onChangeFilter={handleFilterChange} />
        ) : (
          alert('Your phonebook is empty. Add first contact!')
        )}
        {contacts.length > 0 && (
          <ContactList
            contacts={filteredContacts}
            removeContact={handleContactDelete}
          />
        )}
      </div>
    </Container>
  );
};

export default App;
