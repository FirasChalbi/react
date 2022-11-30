import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) =>{

    const renderContactList = props.Contacts.map((Contacts) =>{
        return <ContactCard Contacts={Contacts}></ContactCard>;
    });
    return <div className="ui celled list">{renderContactList}</div>
};
export default ContactList;
