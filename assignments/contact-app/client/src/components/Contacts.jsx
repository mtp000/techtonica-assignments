import { useState, useEffect } from "react";
import ContactCard from "./ContactCard";
import CardGroup from 'react-bootstrap/CardGroup';


function Contacts() {
    const [contacts, setContacts] = useState([]);

    const getRequest = () => {
      fetch("http://localhost:8080/api/contacts")
      .then((response) => response.json())
      .then(contacts => {
        setContacts(contacts); 
        console.log('Contacts fetched...', contacts);
        });
    }

    useEffect(() => {getRequest()}, []);

  return (
    <div>
    <CardGroup className="Contacts">
            {contacts.map(contact =>
            <ContactCard key={contact.contact_id} name={contact.name}/>
            )}
    </CardGroup>
    </div>
  );
}

export default Contacts;