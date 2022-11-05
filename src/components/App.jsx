import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { Container } from './App.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? []
  });
  const [filter, setFilter] = useState('')

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

 
  const deletedContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId))
  };


  const formSubmitHandler = (name, number) => {
    const normalazedFind = name.toLowerCase();
    const findName = contacts.find(contact => contact.name.toLowerCase() === normalazedFind);

    if (findName) {
      return alert(`${name} is alredy in contacts.`)
    };

    setContacts([{name, number, id: nanoid()}, ...contacts]);
  };


  const changeFilter = event => {
    setFilter(event.currentTarget.value)
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
  };


  return (
    <Container>
    <h1> Phonebook</h1>
    <ContactForm onSubmit={formSubmitHandler} />
    
    <h2>Contacts</h2>
        <Filter filter={filter} onChange={changeFilter}/>
    <ContactList contacts={getVisibleContacts()} onDeleteContact={deletedContact} />  
    </Container>
  )
}


