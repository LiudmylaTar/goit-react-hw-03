import { useState, useEffect, useMemo } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import { useDebounce } from 'use-debounce';

import './App.css';

const initialContact = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [phoneNumbers, setPhoneNumbers] = useState(() => {
    const savedContacts = localStorage.getItem('phoneNumbers');
    return savedContacts ? JSON.parse(savedContacts) : initialContact;
  });

  const [filter, setFilter] = useState('');
  const [debouncedInputValue] = useDebounce(filter, 300);

  useEffect(() => {
    localStorage.setItem('phoneNumbers', JSON.stringify(phoneNumbers));
  }, [phoneNumbers]);

  const addContact = (newContact) => {
    setPhoneNumbers((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setPhoneNumbers((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };
  const searchContact = useMemo(() => {
    return phoneNumbers.filter((contact) =>
      contact.name.toLowerCase().includes(debouncedInputValue.toLowerCase()),
    );
  }, [debouncedInputValue, phoneNumbers]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={searchContact} onDelete={deleteContact} />
    </div>
  );
}

export default App;
