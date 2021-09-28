import {Col, Container, Row} from "react-bootstrap";

function DeepFooter() {
    return (
        <div>
            <Container fluid className="deep-footer-color">
                <Container className='main-container'>
                    <Row>
                        <Col className='links-grey text-start'>
                            Правила использования информации в доменной зоне ifmo.ru
                        </Col>
                        <Col className='links-grey text-end'>
                            Политика по обработке Персональных данных
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}

export default DeepFooter;