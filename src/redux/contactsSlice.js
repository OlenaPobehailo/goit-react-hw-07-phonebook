import { createSlice } from '@reduxjs/toolkit';
import initialContacts from 'assets/data.js';

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    contacts: initialContacts,
  },

  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.unshift(payload);
    },

    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(el => el.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
