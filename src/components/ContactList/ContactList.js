import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts } from '../../redux/contactsAll/contactsOperations';
import {
  getIsLoadingSelector,
  getFilteredContacts,
} from '../../redux/contactsAll/contactsSelectors';
import  ContactListItem  from '../ContactListItem';

const ContactList=()=> {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  const isLoading = useSelector(getIsLoadingSelector);

  useEffect(() => {
    dispatch(getAllContacts(prev => !prev));
  }, [dispatch]);
 
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {contacts.map((contact, id) => {
            return <ContactListItem key={contact.id} contact={contact} />;
          })}
        </ul>
      )}
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};
export default ContactList;