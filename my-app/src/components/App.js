import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() {
  const LOCAL_STORAGE_KEY = "Contacts";
  const [Contacts, setContacts] = useState([]);

  const AddContactHandler =(contact)=>{
    console.log(contact);
    setContacts([...Contacts, contact]);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(Contacts)));
    if(retriveContacts) setContacts(retriveContacts)
  },[]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(Contacts));
  },[Contacts]);
  return (
    <div className="ui container">
      <Header />
      <AddContact AddContactHandler={AddContactHandler} />
      <ContactList  Contacts= {Contacts}/>

    </div>
    
  );
}

export default App;
