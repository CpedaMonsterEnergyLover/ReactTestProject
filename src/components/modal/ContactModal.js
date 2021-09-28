import {Modal} from "react-bootstrap";
import './ContactModal.css'
import ContactForm from "./ContactForm";

function ContactModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            dialogClassName='contact-dialog'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='px-5 pt-0'>
                <h3 className='text-center header-brand mb-5'>
                    Напишите нам!
                </h3>
                <ContactForm hide={props.onHide}/>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    );
}

export default ContactModal;