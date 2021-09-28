import {Card, Container} from "react-bootstrap";

import {useState} from "react";
import ContactModal from "../../modal/ContactModal";
import CustomButton from "../../temporary/CustomButton";
import ThankYouModal from "../../modal/ThankYouModal";

function ContactBlock() {
    const [modalShow, setModalShow] = useState(false);
    const [tyShow, setTyShow] = useState(false);

    function contactFormValid(){
        setModalShow(false)
        setTyShow(true)
    }

    return (
        <div className='bg-second'>
            <Container className='main-container'>
                <Card className='bg-second-content px-4 py-2'>
                    <Card.Body>
                        <Card.Title>
                            <h3 className='header-brand'>
                                Контакты
                            </h3>
                        </Card.Title>
                        <Card.Text>
                            <p>
                                г. Санкт-Петербург, Кронверкский пр-т, д.49, ауд. 155 (вход со стороны ул. Сытнинской)
                            </p>
                            <p>
                                Тел: +7 (931) 538-01-70
                            </p>
                        </Card.Text>
                        <button onClick={() => setModalShow(true)} className='contact-btn'>
                            <CustomButton label='Написать нам'/>
                        </button>
                    </Card.Body>
                </Card>
            </Container>
            <ContactModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                showTY={()=> contactFormValid}
            />
            <ThankYouModal
                show={tyShow}
                onHide={() => setTyShow(false)}
            />
        </div>

    );
}

export default ContactBlock;