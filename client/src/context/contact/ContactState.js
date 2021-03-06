import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext  from './contactContext';
import  contactReducer from './contactReducer';
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
        contacts: [{
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
        }],

        current: null,
        filtered: null


    };
    const [state, dispatch] = useReducer(contactReducer, initialState);

    //Add Contact Action 
    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({type: ADD_CONTACT, payload: contact})
    }

    //Delete Contact Action 
    const deleteContact = id => dispatch({type: DELETE_CONTACT, payload: id })
    
    //Set Current Contact Action 
    const setCurrent = contact => dispatch({type: SET_CURRENT, payload: contact })


    //Clear Current Contact Action
    const clearCurrent = () => dispatch({type: CLEAR_CURRENT })
    //Update Contact Action
    const updateContact = contact => dispatch({type: UPDATE_CONTACT, payload: contact })

    //Filter Contacts Actions
    const filterContacts = text => dispatch({type: FILTER_CONTACTS, payload: text })

    //Clear Filter Actions
    const clearFilter = () => dispatch({type: CLEAR_FILTER })

    return (
    <ContactContext.Provider value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        updateContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        filterContacts,
        clearFilter
        
        }}>
            {props.children}
        </ContactContext.Provider>

    )
}


export default ContactState;