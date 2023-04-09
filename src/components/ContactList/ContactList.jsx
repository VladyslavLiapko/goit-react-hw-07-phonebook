import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList";
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from "components/redux/selector";
import { Contact } from "components/Contact/Contact"; 

const ContactList = () => {
    const contacts = useSelector(getContacts);
    const { input } = useSelector(getFilter);

  if (!contacts) {
    return null;
  }
  const visibleContacts = contacts.value.filter(contact =>
    contact.name.toLowerCase().includes(input.toLowerCase())
  );
             
    return (
         <ul className={styles.TaskList}>
      {visibleContacts.map(contact => (
        <li className={styles.TaskList_item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
    )
};

ContactList.propTypes = {
  contacts: PropTypes.object,
  input: PropTypes.string,
};
export default ContactList;