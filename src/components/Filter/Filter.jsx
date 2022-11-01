import React from "react";
import PropTypes from "prop-types"
import { Label } from "./Filter.styled"
import {Input} from "../ContactsForm/ContactForm.styled"

 export const Filter = ({ onChange, value }) => {
    return <Label>
        Find contacts by name
        <Input
            type="text"
            name="filter"
            value={value}
            onChange={onChange}
            
        />
        </Label>
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
   
}
