import React from 'react';
import styles from './Filter.module.css';
import actions from '../../redux/phonebook/phonebook-actions';
import { connect } from 'react-redux';
import { findRenderedDOMComponentWithTag } from 'react-dom/cjs/react-dom-test-utils.production.min';

const Filter = ({ onChange, value }) => (
  <label>
    Find contacts by name
    <input
      className={styles.filter__input}
      onChange={onChange}
      value={value}
      name="filter"
    />
  </label>
);

const mapStateToProps = state => {
  return {
    value: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    const value = e.target.value;
    return dispatch(actions.filterContscts(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
