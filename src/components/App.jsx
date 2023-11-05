import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import { AppContainer } from './App.styled';

export const App = () => {
  
  return (
    <AppContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </AppContainer>
  );
};
