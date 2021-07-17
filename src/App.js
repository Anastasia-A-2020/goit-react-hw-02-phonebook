import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import s from "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(({ contacts /*prevState.contacts*/ }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getvisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getvisibleContacts();

    return (
      <div className={s.div}>
        <h1>Phonebook</h1>
        <Form onFormSubmit={this.addContact} />

        <Filter value={filter} onChange={this.changeFilter} />

        <h1>Contacts</h1>
        <ContactList contacts={visibleContacts} />
      </div>
    );
  }
}

export default App;
