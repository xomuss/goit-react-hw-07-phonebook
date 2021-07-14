import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContatError,
} from './phonebook-actions';

axios.defaults.baseURL = 'http://localhost:3004';

const addContact = contact => dispatch => {
  dispatch(addContactRequest);

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContatError(error)));
};

export default {
  addContact,
};
