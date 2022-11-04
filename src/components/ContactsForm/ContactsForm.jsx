import { nanoid } from "nanoid";
import PropTypes from "prop-types"
import React from "react";
import { useState } from "react";
import {Form, Label, Input, Button} from "./ContactForm.styled"

const ContactsForm = ({ onSubmitProp }) => {
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const[number, setNumber] = useState('')

    
    const handleInputChange = e => {
        const { name, value } = e.currentTarget
        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'number':
                setNumber(value)
                break;
            default:
                return
        }
        setId(nanoid(5))
}


    const reset = () => {
        setName('')
        setNumber('')
    
  }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmitProp( {name:name, number:number, id:id})
        reset()
    
  }

    
        return (
            <Form onSubmit={handleSubmit}>
                <Label>
                    Name
                    <Input
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                </Label>
                <Label>
                    Number
                <Input
                    type="tel"
                    name="number"
                    onChange={handleInputChange}
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                </Label>
                <Button type="submit">Add contact</Button>
            </Form>
        )
    
}

ContactsForm.propTypes = {
    onSubmitProp: PropTypes.func.isRequired
}

export default ContactsForm

/*class ContactsForm extends React.Component {
    state = {
        name: '',
        id: '',
        number: '',
    }

    handleInputChange = (event) => {
    const {name, value} = event.currentTarget
    this.setState({[name]: value, id: nanoid(5)})
    }

  reset = () => {
    this.setState({name: '', number: ''})
  }

 
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmitProp(this.state)
        this.reset()
    
  }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Label>
                    Name
                    <Input
                    type="text"
                    name="name"
                    onChange={this.handleInputChange}
                    value={this.state.name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                </Label>
                <Label>
                    Number
                <Input
                    type="tel"
                    name="number"
                    onChange={this.handleInputChange}
                    value={this.state.number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                </Label>
                <Button type="submit">Add contact</Button>
            </Form>
        )
    }
}

ContactsForm.propTypes = {
    onSubmitProp: PropTypes.func.isRequired
}

export default ContactsForm*/