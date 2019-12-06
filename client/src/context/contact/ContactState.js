import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext  from './contactContext';
import  contactReducer from './contactReducer';
import {
    ADD_Contact,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER
} from '../types'


const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name:'Jill Johnson',
                email: 'jill@gmail.com',
                phone: '8638888999',
                type: 'personal'
            },
            {
                id: 2,
                name:'Jack Smith',
                email: 'jack@gmail.com',
                phone: '8485688555',
                type: 'personal'
            },
            {
                id: 3,
                name:'Andy Dwyer',
                email: 'andy@gmail.com',
                phone: '5615585455',
                type: 'professional'
            },
        ]

    };
    const [state, dispatch] = useReducer(contactReducer, initialState);

    //Add Contact Action 

    //Delete Contact Action 

    //Set Current Contact Action 

    //Clear Current Contact Action

    //Update Contact Action

    //Filter Contacts Actions

    //Clear Filter Actions

    return (
    <ContactContext.Provider value={{contacts: state.contacts}}>
            {props.children}
        </ContactContext.Provider>

    )
}


export default ContactState;