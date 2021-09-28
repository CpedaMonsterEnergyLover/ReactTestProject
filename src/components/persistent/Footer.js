import {Col, Container, Row} from "react-bootstrap";
import './Footer.css'
import FooterRow from "./FooterRow";
import Logo1 from '../svg/logo_1.svg'
import NetworksLogo from '../svg/sns.svg'


function Footer() {
    return (
        <footer className='footer-color'>
            <Container className='main-container py-4'>
                <Row xs={1} sm={2} md={4} >
                    <Col md={4}>
                        <div>
                            <img src={Logo1} alt="ITMO Logo" style={{width: '100%'}}/>
                        </div>
                        <p className='links-grey mt-2'>
                            Информация © 1993–2020 Университет ИТМО Разработка © 2020 Управление по развитию  и поддержке портала
                        </p>
                    </Col>
                    <Col md={2}>
                        <FooterRow/>
                    </Col>
                    <Col md={2}>
                        <FooterRow/>
                    </Col>
                    <Col md={4}>
                        <p className='links-grey'>
                            г. Санкт-Петербург, Кронверкский пр., 49, ауд. 333 Тел: +7 (931) 538-01-70 E-mail: job@corp.ifmo.ru
                        </p>
                        <div>
                            <img src={NetworksLogo} alt="Social networks" className='logo-res'/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;

