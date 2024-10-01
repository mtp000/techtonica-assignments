import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function ContactDetail() {
    const { contact_id } = useParams();
    const [contact, setContact] = useState(null);

    useEffect(() => {
        fetch(`"http://localhost:8080/api/contacts/${contact_id}`)
        .then(response => response.json())
        .then(data => setContact(data));
    }, [id]);

    return (
        <div>
            <h1>{contact.name}</h1>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <p>Notes: {contact.notes}</p>
        </div>
    );
}

export default ContactDetail;