import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { Input, Button } from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isNameExist = contacts.some(contact => contact.name === name);

    if (isNameExist) {
      toast.error(`${name} is already in contacts`);
      reset();
      return;
    } else {
      dispatch(addContact({ name, phone }));
      reset();
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
        />
      </label>

      <label>
        Number
        <Input
          type="tel"
          name="phone"
          value={phone}
          onChange={handleInputChange}
          required
        />
      </label>

      <Button type="submit">Add contact</Button>
    </form>
  );
};

export default ContactForm;
