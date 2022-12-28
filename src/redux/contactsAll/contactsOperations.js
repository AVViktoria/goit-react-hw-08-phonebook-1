import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as contactsApi from 'services/index';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
export const getAllContacts = createAsyncThunk(
  'contacts/getAllContacts',

  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/contacts`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postAllContacts = createAsyncThunk(
  'contacts/postAllContacts',

  async (contact, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/contacts`, contact);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const delAllContacts = createAsyncThunk(
  'contacts/delAllContacts',

  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// export const editContacts = createAsyncThunk(
//   'contacts/editContact',

//   async (contact, { rejectWithValue }) => {
//     try {
//       const response = await axios.put(`/contacts/${contact.id}`, contact);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
export const editContacts = createAsyncThunk(
  'contacts/editContacts',
  async (contact, thunkAPI) => {
    const { id, name, number } = contact;
    const update = { name, number };
    if (!update) {
      return;
    }
    try {
      const action = await axios.patch(`/contacts/${id}`, update);
      return action.data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.status);
    }
  },
);
// export const getAllContacts = createAsyncThunk(
//   'contacts/getAllContacts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const allContactsGet = await contactsApi.getContacts();
//       return allContactsGet;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const postAllContacts = createAsyncThunk(
//   'contacts/postAllContacts',
//   async (contact, { rejectWithValue }) => {
//     try {
//       const allContactsPost = await contactsApi.postContacts(contact);
//       return allContactsPost;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const delAllContacts = createAsyncThunk(
//   'contacts/delAllContacts',
//   async (id, { rejectWithValue }) => {
//     try {
//       const allContactsDel = await contactsApi.deleteContacts(id);
//       return allContactsDel;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const editContacts = createAsyncThunk(
//   'contacts/editContacts',
//   async (contact, { rejectWithValue }) => {
//     try {
//       const allContactsDel = await contactsApi.putContacts(contact);
//       return allContactsDel;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
