import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const initialState = {
  contacts: [],
  loading: false,
  error: null,
};

const handlePending = state => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => handlePending(state))

      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.contacts = payload.sort((a, b) => a.name.localeCompare(b.name));
      })

      .addCase(fetchContacts.rejected, (state, { payload }) =>
        handleRejected(state, payload)
      )

      .addCase(deleteContact.pending, state => handlePending(state))

      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload
        );
      })

      .addCase(deleteContact.rejected, (state, { payload }) =>
        handleRejected(state, payload)
      )

      .addCase(addContact.pending, state => handlePending(state))

      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.unshift(payload);
      })

      .addCase(addContact.rejected, (state, { payload }) =>
        handleRejected(state, payload)
      );
  },
});

export default contactsSlice.reducer;
