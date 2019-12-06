import React, { Fragment, useContext} from 'react';
import ContactContext from '../../context/contact/contactContext';


const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const {contacts} = ContactContext;
    return (
        <div>
            <Fragment>
                {contacts.map(contact => <h3>{contact.name}</h3>)}
            </Fragment>
        </div>
    )
}

export default Contacts
