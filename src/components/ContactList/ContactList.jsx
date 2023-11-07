import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilteredContacts } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';
import { DeleteButton, ListItem } from './ContactList.styled';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  if (contacts.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ListItem key={contact.id}>
          {contact.name + ': ' + contact.phone}
          <DeleteButton
            type="button"
            name="delete"
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </ul>
  );
};

export default ContactList;
