import shortid from 'shortid';
// import types from './phonebook-types';
import { createAction } from '@reduxjs/toolkit';

// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     name,
//     number,
//     id: shortid.generate(),
//   },
// });

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const filterContscts = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });
const addContact = createAction('phonebook/add', ({ name, number }) => ({
  payload: {
    name,
    number,
    id: shortid.generate(),
  },
}));
const deleteContact = createAction('phonebook/delete');
const filterContscts = createAction('phonebook/changeFiler');

export default { addContact, deleteContact, filterContscts };
