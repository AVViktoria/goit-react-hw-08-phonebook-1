import { useDispatch } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  delAllContacts,
  editContacts,
} from '../../redux/contactsAll/contactsOperations';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'number':
        setNumber(value);
        return;
      default:
        return;
    }
  };

  const deleteContactItem = contactId => {
    dispatch(delAllContacts(contactId));
  };

  const handleEdit = () => {
    setIsEdit(prev => !prev);
    if (isEdit && (name !== contact.name || number !== contact.number)) {
      return dispatch(editContacts({ ...contact, name, number }));
    }
  };

  return (
    <li className="listContacts">
      {isEdit ? (
        <>
          {' '}
          <label>
            Name
            <input
              onChange={handleChange}
              name="name"
              type="text"
              value={name}
            />
          </label>
          {'  '}
          <label>
            Number
            <input
              onChange={handleChange}
              name="number"
              type="text"
              value={number}
            />
          </label>
        </>
      ) : (
        <div className="titleContact">
          <span className="contact">Name: {contact.name}</span>
          {'  '}
          <span className="contact">Number: {contact.number}</span>
        </div>
      )}
      <button className="listButton" type="button" onClick={handleEdit}>
        {isEdit ? 'Save' : 'Edit'}
      </button>
      <button
        className="listButton"
        type="button"
        onClick={() => deleteContactItem(contact.id)}
      >
        x
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      contact: PropTypes.string.isRequired,
    })
  ),
};

// import { useDispatch } from 'react-redux';
// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import {
//   delAllContacts,
//   editContacts,
// } from '../../redux/contactsAll/contactsOperations';

// export const ContactListItem = ({ contact }) => {
//   const dispatch = useDispatch();
//   const [isEdit, setIsEdit] = useState(false);
//   const [name, setName] = useState(contact.name);
//   const [number, setNumber] = useState(contact.number);

//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case 'name':
//         setName(value);
//         return;
//       case 'number':
//         setNumber(value);
//         return;
//       default:
//         return;
//     }
//   };

//   const deleteContactItem = contactId => {
//     dispatch(delAllContacts(contactId));
//   };

//   const handleEdit = () => {
//     setIsEdit(prev => !prev);
//     if (isEdit && (name !== contact.name || number !== contact.number)) {
//       return dispatch(editContacts({ ...contact, name, number }));
//     }
//   };

//   return (
//     <li className="listContacts">
//       {isEdit ? (
//         <>
//           {' '}
//           <label>
//             Name
//             <input
//               onChange={handleChange}
//               name="name"
//               type="text"
//               value={name}
//             />
//           </label>
//           {'  '}
//           <label>
//             Number
//             <input
//               onChange={handleChange}
//               name="number"
//               type="text"
//               value={number}
//             />
//           </label>
//         </>
//       ) : (
//         <div className="titleContact">
//           <span className="contact">Name: {contact.name}</span>
//           {'  '}
//           <span className="contact">Number: {contact.number}</span>
//         </div>
//       )}
//       <button className="listButton" type="button" onClick={handleEdit}>
//         {isEdit ? 'Save' : 'Edit'}
//       </button>
//       <button
//         className="listButton"
//         type="button"
//         onClick={() => deleteContactItem(contact.id)}
//       >
//         x
//       </button>
//     </li>
//   );
// };

// ContactListItem.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       contact: PropTypes.string.isRequired,
//     })
//   ),
// };
