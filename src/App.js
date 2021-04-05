import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";

import "normalize.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: ""
  };

  deleteContacts = contactsId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactsId)
    }));
  };

  addContacts = data => {
    const contact = {
      id: uuidv4(),
      name: data.name,
      number: data.number
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts]
    }));

    console.log(data);
  };

  changeFilter = event => {
    this.setState({
      filter: event.target.value
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleUpperCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLocaleUpperCase().includes(normalizedFilter)
    );

    return visibleContacts;
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.addContacts} />
        <h2>Contact</h2>
        <Filter valeu={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContacts={this.deleteContacts}
        />
      </div>
    );
  }
}

export default App;
