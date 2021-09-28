import {Form} from "react-bootstrap";
import CustomButton from "../temporary/CustomButton";
import {useState} from "react";


function ContactForm(props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        } else{
            setValidated(true);
            props.hide();
            props.showty();
            event.preventDefault();
            event.stopPropagation();
        }
    };


    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="contactForm.nameInput">
                <Form.Label>Ваши фамилия и имя</Form.Label>
                <Form.Control type="text"
                              placeholder="Введите ваше имя"
                              maxLength='200'
                              required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactForm.emailInput">
                <Form.Label>Электронная почта</Form.Label>
                <Form.Control type="email"
                              placeholder="primer@itmo.ru"
                              maxLength='200'
                              required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactForm.commentInput">
                <Form.Label>Что непонятно или нужно уточнить</Form.Label>
                <Form.Control as="textarea"
                              placeholder="Введите ваше сообщение"
                              style={{height: '110px', resize: 'none'}}
                              maxLength='200'
                              required/>
            </Form.Group>
            <div className='form-label'>
                Отправляя данную форму, вы даете согласие на обработку своих Персональных данных
            </div>
            <div className='d-flex flex-column'>
                <button type='submit'  className='contact-btn mx-auto my-3'>
                    <CustomButton label='Отправить' />
                </button>
            </div>
        </Form>

    );
}

export default ContactForm;