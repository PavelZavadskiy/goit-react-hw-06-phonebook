import { useState, useEffect } from 'react';
import { WrapperRoot } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

// const defContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export function App() {
  const [contacts, setContacts] = useState(() => {
    let lsContacts = localStorage.getItem('contacts');
    return lsContacts ? JSON.parse(lsContacts) : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = contact => {
    setContacts(contacts => [...contacts, contact]);
  };

  const handleChangeFilter = e => {
    setFilter(e.target.value);
  };

  const handleDeleteContact = id => {
    setContacts(contacts => contacts.filter(item => item.id !== id));
  };

  return (
    <WrapperRoot>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter changeFilter={handleChangeFilter} />
      <ContactList
        contacts={
          filter.length > 0 ? contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())) : contacts
        }
        onDelete={handleDeleteContact}
      />
    </WrapperRoot>
  );
}
