import React from 'react';
import styles from './Filter.module.css';
import * as actions from '../../redux/phonebook/phonebook-actions';
import { connect } from 'react-redux';
import selectors from '../../redux/phonebook/phonebook-selectors';

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
    value: selectors.getFilter(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    const value = e.target.value;
    return dispatch(actions.filterContscts(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
