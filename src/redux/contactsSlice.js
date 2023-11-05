import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const initialState = {
  contacts: [],
  loading: false,
  error: null,
};

const handlePending = state => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => handlePending(state))

      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.contacts = action.payload.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      })
      .addCase(fetchContacts.rejected, (state, action) =>
        handleRejected(state, action)
      );
  },
});

export default contactsSlice.reducer;
