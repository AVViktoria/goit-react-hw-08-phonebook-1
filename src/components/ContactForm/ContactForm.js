import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { postAllContacts } from '../../redux/contactsAll/contactsOperations';
import { itemsSelector } from '../../redux/contactsAll/contactsSelectors';
// import {
//   Grid,
//   Paper,
//   // Avatar,

//   Button,
//   Typography,
//   // Link,
//   TextField,
//   Box,
// } from '@mui/material';
const ContactForm = () => {
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
        <h1 className="title">Phonebook</h1>
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
};
ContactForm.prototype = {
  addContact: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
export default ContactForm;


// {/* <Grid  container component="main" sx={{ height: '100vh' }}>
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
           
//             <Typography component="h2" variant="h4">
//               Phonebook
//             </Typography>
//             <Box
//               component="form"
//               noValidate
              
//               sx={{ mt: 1 }}
//               autoComplete="off"
//             >
//               <TextField
//                 autoComplete="given-name"
//                 margin="normal"
//                 name="Name"
//                 required
//                 fullWidth
//                 id="name"
//                 label="Name"
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 value={name}
//                 onChange={handleChange}
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 name="number"
//                 required
//                 fullWidth
//                 id="number"
//                 label="Number"
//                 type="text"
                
//                 value={number}
//                 onChange={handleChange}
//                 autoFocus
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//                 onSubmit={addContact}
//               >
//                 Add contact
//               </Button>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid> */}



