import React, { Component } from 'react';
import ContactsList from './Components/ContactsList';
import Form from './Components/Form';
import Filter from './Components/Filter';

class App extends Component {
  state = {
    // contacts: [],
    // filter: '',
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  render() {
    return (
      <>
        <h1>Phone Book</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </>
    );
  }
}

export default App;
