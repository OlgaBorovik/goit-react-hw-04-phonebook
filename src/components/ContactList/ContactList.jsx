import React from "react";
import PropTypes from "prop-types"
import { ContactsUl, ContactItem, Button, Span} from "./ContactList.styled"

function ContactList({contacts, onDelete}) {
    
    return (
        <div>
            <ContactsUl>
                {contacts.map(({id, name, number}) => (
                    <ContactItem key={id}><Span>{name}: {number}</Span>
                        <Button type="button" onClick={() =>  onDelete({id})}>Delete</Button> 
                    </ContactItem>
                   
                ))}
            </ContactsUl>
        
      </div>
        )
    

}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func
}


export default ContactList