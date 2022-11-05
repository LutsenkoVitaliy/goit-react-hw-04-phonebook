import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { Container } from './App.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export default function App() {
  const [contacts, setcontacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? []
  });
  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts')
  //   const parsedContacts = JSON.parse(contacts)
   
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts })
  //   }
  // }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])
  // componentDidUpdate(prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  //   }
  // }

  deletedContact = contactId => {
    this.setState(prevState => ({
     contacts: prevState.contacts.filter(contact => contact.id !== contactId)
   }))
  }

  formSubmitHandler = ({ name, number }) => {
    const normalazedFind = name.toLowerCase();
    const findName = this.state.contacts.find(contact => contact.name.toLowerCase() === normalazedFind);

    if (findName) {
      return alert(`${name} is alredy in contacts.`)
    };

    this.setState(({ contacts }) => ({
      contacts: [{ name, number, id: nanoid() }, ...contacts]
    }));
  };

  changeFilter = event => {
    const { value } = event.currentTarget
    this.setState({ filter: value })
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter))
  };


  return (
    <Container>
    <h1> Phonebook</h1>
    <ContactForm onSubmit={this.formSubmitHandler} />
    
    <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.changeFilter}/>
    <ContactList contacts={visibleContacts} onDeleteContact={this.deletedContact} />  
    </Container>
  )
}


