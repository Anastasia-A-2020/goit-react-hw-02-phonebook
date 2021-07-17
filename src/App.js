import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form";
import ContactList from "./components/ContactList.js";
import s from "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    const { contacts } = this.state;
    console.log(contacts);
    return (
      <div className={s.div}>
        <h1>Phonebook</h1>
        <Form onFormSubmit={this.addContact} />

        <h1>Contacts</h1>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
