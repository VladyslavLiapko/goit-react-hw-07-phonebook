import { useDispatch, useSelector } from "react-redux";
import styles from "./ContactForm";
import PropTypes from 'prop-types';
import { getContacts } from "components/redux/selector";
import { addContact } from "components/redux/contactsSlice";


const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

   const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    form.reset();
    if (contacts.value.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return false;
    }
    dispatch(addContact(name, number));
    return true;
  };
    return (
      <>
      <form className={styles.TaskEditor} onSubmit={handleSubmit} autoComplete="off">
          <label  className={styles.TaskEditor_label} >Name</label>
          <br/>
          <input
            id="name"
            className={styles.TaskEditor_input}
            type="text"
            name="name"
            />
          <br/>
        
          <label  className={styles.TaskEditor_label} >Number</label>
          <br/>
          <input
            id="number"
            className={styles.TaskEditor_input}
            type="text"
            name="number"
           
           />
          <br/>
        <button className={styles.TaskEditor_button} type="submit">
          Add contact
        </button>
        </form>
        </>
    );
}
  

export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.object,
};