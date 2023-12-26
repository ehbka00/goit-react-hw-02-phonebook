import { nanoid } from "nanoid";
import { Component } from "react";
import { ContactForm } from "./ContactForm";
import { Filter } from "./Filter";
import { ContactList } from "./ContactList";

export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: "",
  };

  contactFilter = (evt) => {
    const filtesredStr = evt.target.value.toLowerCase();
    this.setState({ filter: filtesredStr });
  };

  handleAddContact = (evt) => {
    evt.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const number = document.querySelector('input[name="number"]').value;

    if (this.contactVerification(name) === false) {
      return ;
    }
  
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState({ contacts: [...this.state.contacts, newContact] });
    document.querySelector('.form').reset();
  };

  handleDeleteContact = (evt) => {
    const parentNode = evt.target.parentNode;
    const dataKey = parentNode.getAttribute('data-key');
    const newArray = this.state.contacts.filter((contact) => (contact.id !== dataKey));
    this.setState(()=> {
      return {contacts: newArray}
    })
  }

  contactVerification = (name) => {
    if (name.length === 0) {
      alert("Name should not be empty.");
      return false;
    }

    const contactExists = this.state.contacts.some((contact) => contact.name === name);
    if (contactExists) {
      alert(name + " is already in contacts.");
      return false;
    }

    return true;
  }

  render() {
    return (
      <div>
        <div className="phonebook">
          <h1>Phonebook</h1>
          <ContactForm handleAddContact={this.handleAddContact} />
        </div>

        <div className="contacts">
          <h2>Contacts</h2>
          <Filter contactFilter={this.contactFilter} />
          <ContactList state={this.state} deleteContact={this.handleDeleteContact}/>
        </div>
      </div>
    );
  }
}
