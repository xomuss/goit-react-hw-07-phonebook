import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContatError = createAction('contacts/addContatError');

export const deleteContact = createAction('phonebook/delete');
export const filterContscts = createAction('phonebook/changeFiler');
