import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts } from '../../redux/contactsAll/contactsOperations';
import {
  getIsLoadingSelector,
  getFilteredContacts,
} from '../../redux/contactsAll/contactsSelectors';
import { ContactListItem } from 'components/ContactListItem/contactListItem';
export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  const isLoading = useSelector(getIsLoadingSelector);

  useEffect(() => {
    dispatch(getAllContacts());
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

// import { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllContacts } from '../../redux/contactsAll/contactsOperations';
// import {
//   itemsSelector,
//   getIsLoadingSelector,
//   filterSelector,
// } from '../../redux/contactsAll/contactsSelectors';
// import { ContactListItem } from 'components/ContactListItem/contactListItem';
// export default function ContactList() {
//   const dispatch = useDispatch();
//   const contactsList = useSelector(itemsSelector);
//   const filterAllContacts = useSelector(filterSelector);

//   // const contacts = useSelector(getFilteredContacts);
//   const isLoading = useSelector(getIsLoadingSelector);

//   useEffect(() => {
//     dispatch(getAllContacts());
//   }, [dispatch]);

//   const getVisibleContacts = () => {
//     // const normilizedFilter = filterAllContacts.filter.toLowerCase();
//     return contactsList.filter(contact =>
//       contact.name
//         .toLowerCase()
//         .includes(filterAllContacts.filter.toLowerCase())
//     );
//   };
//   const visibleContacts = getVisibleContacts();
//   console.log(visibleContacts);
//   return (
//     <>
//       {isLoading ? (
//         <div>Loading...</div>
//       ) : (
//         <ul>
//           {visibleContacts.map(contact => {
//             return <ContactListItem key={contact.id} contact={contact} />;
//           })}
//         </ul>
//       )}
//     </>
//   );
// }

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.number.isRequired,
//     })
//   ),
// };
