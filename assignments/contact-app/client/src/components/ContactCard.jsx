import Card from 'react-bootstrap/Card';

const ContactCard = (props) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default ContactCard;