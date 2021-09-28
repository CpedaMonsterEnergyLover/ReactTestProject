import './Header.css'
import {Nav, Navbar} from "react-bootstrap";
import Logo2 from "../svg/logo_2.svg";

function Header() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <div className='ps-3 my-2'>
                    <img src={Logo2} alt="Lab Logo" className='logo-res me-3'/>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" size='lg' className='menu-btn'/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto header-item pe-4">
                        <Nav.Link href="#">О лаборатории</Nav.Link>
                        <Nav.Link href="#">Учебная деятельность</Nav.Link>
                        <Nav.Link href="#">Научная деятельность</Nav.Link>
                        <Nav.Link href="#">Новости</Nav.Link>
                        <Nav.Link href="#">Контакты</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;