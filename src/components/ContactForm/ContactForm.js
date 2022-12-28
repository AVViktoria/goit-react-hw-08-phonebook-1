import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { postAllContacts } from '../../redux/contactsAll/contactsOperations';
import { itemsSelector } from '../../redux/contactsAll/contactsSelectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(itemsSelector);

  //*  берем  данные по сабмиту  кнопки  //

  const addContact = evt => {
    evt.preventDefault();
    const checkByName = contacts?.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );

    if (checkByName) {
      alert(`${name} is already in contacts`);
    } else {
      const contact = {
        name,
        number,
        completed: false,
      };

      dispatch(postAllContacts(contact));
      reset();
    }
  };

  //*  очищаем   сбрасываем   форму  //
  const reset = evt => {
    setName('');
    setNumber('');
    // evt.target.name.value = '';
    // evt.target.number.value = '';
  };

  // *  прописываем  внутри инпута   //
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <form onSubmit={addContact}>
      <div className="inputBox">
        <label className="inputLabel">
          Name
          <input
            className="inputContent"
            type="text"
            value={name}
            onChange={handleChange}
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name"
            required
          />
        </label>
      </div>
      <div className="inputBox">
        <label className="inputLabel">
          Number
          <input
            className="inputContent"
            type="tel"
            value={number}
            onChange={handleChange}
            name="number"
            placeholder="XXX XXX XXXX"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Number"
            required
          />
        </label>
      </div>
      <button className="inputButton" type="submit">
        Add contact
      </button>
    </form>
  );
}
ContactForm.prototype = {
  addContact: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

// const addContact = e => {
//   e.preventDefault();
//   const form = e.currentTarget;
//   dispatch(postAllContacts({ name, number }));
//   form.reset();
// };
