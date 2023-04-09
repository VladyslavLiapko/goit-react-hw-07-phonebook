import styles from "./ContactForm";
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  useAddContactMutation,
  useGetContactsQuery
} from "components/redux/contactsSlice";

const ContactForm = () => {
  const [addContact] = useAddContactMutation();
  const { data } = useGetContactsQuery();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const contactData = { name, number };
    form.reset();
    if (data.find(contact => contact.name === name)) {
      Notify.warning(`${name} is already in contacts`);
      return false;
    }
    try {
      await addContact(contactData);
      Notify.success('Contact was added to your phonebook');
    } catch (error) {
      Notify.failure('Something wrong. Please, try again');
    }
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
            type="tel"
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