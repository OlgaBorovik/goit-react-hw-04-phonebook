import React from "react";
import ContactsForm from "./ContactsForm/ContactsForm"
import ContactList from "./ContactList/ContactList"
import { Filter } from "./Filter/Filter"
import {Section, Title, Container} from "./section.styled"
// import { nanoid } from 'nanoid'



class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    
    filter: ''
  }
  
  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  componentDidMount(){
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)
    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  }



  formSubmitHandler = (data) => {
    if (this.state.contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [data, ...prevState.contacts]
    }))
  }

  filterChangeHandler = (event) => {
    this.setState({filter: event.target.value})
  }

  onDeleteContact = ({ id }) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    let filteredContacts = this.state.contacts;
    if (this.state.filter) {
      filteredContacts = this.state.contacts.filter(({ name }) => {
        return name.toLowerCase().includes(this.state.filter.toLowerCase());
      });
    }
    return (
      <Section>
        <Container>
        <Title>Phonebook</Title>
        <ContactsForm
          onSubmitProp={this.formSubmitHandler}
        />
        </Container>
        <Container>
        <Title>Contacts</Title>
        <Filter
          onChange={this.filterChangeHandler}
          value={this.state.filter}
        />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.onDeleteContact}
        />
      </Container>
      </Section>
    )
  }

  
}





export default App