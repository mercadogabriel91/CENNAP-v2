import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';

//https://react-icons.github.io/react-icons/icons?name=fa
import { FaWhatsapp, FaInstagram, FaFacebookSquare } from "react-icons/fa";

export default function NavBar() {
    return (
        <div>
            <Navbar bg="dark" expand="lg">            
                <Navbar.Brand href="#home" style={{ color: 'white' }}>CENNAP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" style={{ color: 'white' }}>Home</Nav.Link>
                        <Nav.Link href="#link" style={{ color: 'white' }}>Nuestro equipo</Nav.Link>
                        <NavDropdown
                            title={<span style={{ color: 'white' }}>Nuestros servicios</span>}
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <div>
                        <Button variant="outline-light" >
                            <FaWhatsapp />
                        </Button>{' '}
                        <Button variant="outline-light">
                            <FaInstagram />
                        </Button>{' '}
                        <Button variant="outline-light">
                            <FaFacebookSquare />
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}