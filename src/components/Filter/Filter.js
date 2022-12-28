import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filterChanges } from 'redux/filter/filterSlice';
import { filterSelector } from '../../redux/contactsAll/contactsSelectors';

export default function Filter()  {
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);

  const onValueChanges = e => {
    const filterValue = e.currentTarget.value;
    dispatch(filterChanges(filterValue));
  };

  return (
    <form>
      <div className="inputBox">
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
};
Filter.prototype = {
  value: PropTypes.string.isRequired,
  onValueChanges: PropTypes.func.isRequired,
};

