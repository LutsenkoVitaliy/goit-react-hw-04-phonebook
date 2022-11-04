import React, { Component } from "react";
import {Form, LableForm, ButtonForm} from './ContactForm.styled'


class ContactForm extends Component {
  state = { 
  name: '',
  number: ''
  }
  
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()
  
    this.props.onSubmit(this.state)
    this.reset()
  }

  reset = () => {
    this.setState({ name: '', number: '' })
  }

  render() {
    const {name, number} = this.state
    
    return (
    <Form onSubmit={this.handleSubmit}>
      <LableForm>Name</LableForm>
      <input
      type="text"
      name="name"
      value={name}
      onChange={this.handleChange}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required />
      
      <LableForm>Number</LableForm>
      <input
      type="tel"
      name="number"
      value={number}
      onChange={this.handleChange}
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      />
      <ButtonForm type='submit'>Add Contact</ButtonForm>
    </Form>
    );
  }
}

export default ContactForm;