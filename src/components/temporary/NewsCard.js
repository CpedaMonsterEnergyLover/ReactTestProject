import {Card, Col} from "react-bootstrap";
import './NewsCard.css'

function NewsCard(props) {
    return (
        <Col>
            <Card className='shadow my-3'>
                <Card.Img variant="top" src="https://i.stack.imgur.com/y9DpT.jpg" />
                <Card.Body className='p-4'>
                    <Card.Title className='_card-title'>{props.label ? props.label : "Card label"}</Card.Title>
                    <Card.Text className='_card-text'>
                        {props.text ? props.text :
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                        }
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
}

export default NewsCard;