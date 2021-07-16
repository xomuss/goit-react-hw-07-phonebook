import React, { Component } from 'react';
import ContactsList from './Components/ContactsList';
import Form from './Components/Form';
import Filter from './Components/Filter';
import { connect } from 'react-redux';
import operations from './redux/phonebook/phonebook-operations';

class App extends Component {
  state = {
    // contacts: [],
    // filter: '',
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <h1>Phone Book</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter />
        {this.props.isLoadingContacts && <h1>download...</h1>}
        <ContactsList />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: state.contacts.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
