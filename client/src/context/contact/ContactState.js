import { useReducer } from "react";
import {v4 as uuidv4} from 'uuid';
import ContactContext from "./contactContext";
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types'

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: "Will Smith",
                email: "will@gmail.com",
                phone: "+420 555 555 555",
                type: "personal"
            },
            {
                id: 2,
                name: "Sharlota Black",
                email: "sharlot@gmail.com",
                phone: "+420 666 666 666",
                type: "personal"
            },
            {
                id: 3,
                name: "Denis Wine",
                email: "denis@gmail.com",
                phone: "+420 456 654 546",
                type: "professional"
            }
        ]
    }

    const [state, dispatch] = useReducer(contactReducer, initialState)

    // Add Contact
    const addContact = contact => {
        contact.id = uuidv4()
        dispatch({ type: ADD_CONTACT, payload: contact})
    }
    // Delete Contact
    // Set Current Contact
    // Clear Current Contact
    // Update Contact
    // Filter Contact
    // Clear Filter

    return (
        <ContactContext.Provider value={{contacts: state.contacts, addContact}}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;