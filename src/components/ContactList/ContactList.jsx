import { useGetContactsQuery } from "components/redux/contactsSlice";
import PropTypes from "prop-types";
import styles from "./ContactList";
import { useSelector } from 'react-redux';
import { getFilter } from "components/redux/selector";
import { Contact } from 'components/Contact/Contact'; 

const ContactList = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  const { filter } = useSelector(getFilter);

  if (!data) {
    return null;
  }
  const visibleContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );       
  return (
  <div>
      {!error && isLoading && <div>Loading</div>}
         <ul className={styles.TaskList}>
      {visibleContacts.map(contact => (
        <li className={styles.TaskList_item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
      </ul>
      </div>
    )
};

ContactList.propTypes = {
  contacts: PropTypes.object,
  input: PropTypes.string,
};
export default ContactList;