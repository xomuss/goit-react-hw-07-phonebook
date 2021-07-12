import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/phonebook/phonebook-actions';
import styles from './ContactList.module.css';

const ContactsList = ({ contactsData, onDeleteContact }) => (
  <ul className={styles.contsct__list}>
    {contactsData.map(({ name, number, id }) => (
      <li key={id} className={styles.contact__list_el}>
        <p className={styles.contact__list_text}>
          {name}: {number}
        </p>
        <button onClick={() => onDeleteContact(id)}>delete</button>
      </li>
    ))}
  </ul>
);

const getVisibleContacts = (allContacts, filter) => {
  const filterNormalize = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(filterNormalize),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contactsData: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
