
// import {
//   Grid,
//   Paper,
//   // Avatar,

//   // Button,
//   Typography,
//   // Link,
//   TextField,
//   Box,
// } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filterChanges } from 'redux/filter/filterSlice';
import { filterSelector } from '../../redux/contactsAll/contactsSelectors';

const Filter=() =>{
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);

  const onValueChanges = e => {
    const filterValue = e.currentTarget.value;
    dispatch(filterChanges(filterValue));
  };

  return (
    <form>
      <div className="inputBox">
      <h1 className="title">Contacts</h1>
        <label className="inputLabel">
          Find contacts by name
          <input
            className="inputContent"
            type="text"
            value={filter}
            onChange={onValueChanges}
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Filter"
            required
          />
        </label>
      </div>
    </form>
  );
}
export default Filter;
Filter.prototype = {
  value: PropTypes.string.isRequired,
  onValueChanges: PropTypes.func.isRequired,
};

/* <Grid  container component="main" sx={{ height: '100vh' }}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
      <Typography component="h2" variant="h4">
              Phonebook
            </Typography>
            <Box
              component="form"
              noValidate
              
              sx={{ mt: 1 }}
              autoComplete="off"
            >
              <Typography component="h4" variant="h5">
              Find contacts by name
            </Typography>
              <TextField
                margin="normal"
                name="Filter"
                required
                fullWidth
                id="Filter"
                label="Filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                value={filter}
            onChange={onValueChanges}
                autoFocus
              />
        </Box>
        </Box>
        </Grid>
      </Grid> */