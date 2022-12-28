import { createSlice } from '@reduxjs/toolkit';
// import { initPhoneBook } from 'utils/initPhoneBook';
import {
  getAllContacts,
  postAllContacts,
  delAllContacts,
  editContacts,
} from '../contactsAll/contactsOperations';

export const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    //*    getAllContacts     //
    builder.addCase(getAllContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getAllContacts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getAllContacts.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });

    //*    postAllContacts     //
    builder.addCase(postAllContacts.fulfilled, (state, action) => {
      state.contacts.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(postAllContacts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(postAllContacts.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });

    //*    delAllContacts     //
    builder.addCase(delAllContacts.fulfilled, (state, action) => {
      // state.contacts.filter(item => item.id !== action.payload);
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
      state.isLoading = false;
    });
    builder.addCase(delAllContacts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(delAllContacts.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });

    //*    editContacts     //
    builder.addCase(editContacts.fulfilled, (state, action) => {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1, action.payload);
      state.isLoading = false;
    });
    builder.addCase(editContacts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(editContacts.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },

});
export const contactsReducer = contactsSlice.reducer;
