import { useState } from "react";
import PropTypes from "prop-types";
import {Form, LableForm, ButtonForm} from './ContactForm.styled'


export default function ContactForm({onSubmit}) {

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  
  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name":
        setName(value)
        break;
      
      case "number":
        setNumber(value)
        break;
    
      default:
        return;
    }
  }


  const handleSubmit = event => {
  event.preventDefault();
    onSubmit(name, number);
    reset();
  }

  const reset = () => {
    setName('');
    setNumber('');
  }


  return (
      <Form onSubmit={handleSubmit}>
      <LableForm>Name</LableForm>
      <input
      type="text"
      name="name"
      value={name}
      onChange={handleChange}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required />
      
      <LableForm>Number</LableForm>
      <input
      type="tel"
      name="number"
      value={number}
      onChange={handleChange}
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      />
      <ButtonForm type='submit'>Add Contact</ButtonForm>
    </Form> 
  )
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}




