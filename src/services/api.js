import axios from 'axios';

axios.defaults.baseURL = 'https://65476a67902874dff3ac42fe.mockapi.io/';

export const fetchContactsAPI = async () => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      console.log('Failed to fetch contacts:', error);
      throw new Error('Failed to fetch contacts');
    }
  };