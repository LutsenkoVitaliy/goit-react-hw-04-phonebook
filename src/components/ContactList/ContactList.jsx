import PropTypes from "prop-types";
import {ContactsList, ContactListItem, ContactListText, ContactListButton} from "./ContactList.styled";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
  <ContactsList>{contacts.map(({id, name, number}) => 
  <ContactListItem key={id}>
    <ContactListText>{name}: {number}</ContactListText>
    <ContactListButton onClick={() => onDeleteContact(id)}>DELETED</ContactListButton>
  </ContactListItem>)}
</ContactsList>)

}


export default ContactList

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  }