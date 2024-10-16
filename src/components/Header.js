import React from 'react';
import {Navbar,Nav,NavDropdown,Container,Image} from 'react-bootstrap';

const Header =()=>{
    return(
        <>
           <Navbar className='navbar-style' expand="lg">
            <Container>
            <Navbar.Brand href="#home">
            <Image className='logo-img-style' src='images/img2.png' alt='image' roundedCircle/>
            <h6 className='logo-text-style'>Visvervaya Technological University,Belagavi</h6>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <NavDropdown title="Academic" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Admission</NavDropdown.Item>
            <NavDropdown.Item href="#">Circulars & Notification</NavDropdown.Item>
            <NavDropdown.Item href="#">Certificate Issued</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Examination" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Examination Guidline</NavDropdown.Item>
            <NavDropdown.Item href="#">Examination Application</NavDropdown.Item>
            <NavDropdown.Item href="#">Results</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="VTU Departments" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Civil Engineering</NavDropdown.Item>
            <NavDropdown.Item href="#">Computer Science & Engineering</NavDropdown.Item>
            <NavDropdown.Item href="#">Electronics & Communication Engineering</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Staff Login" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Login As Admin</NavDropdown.Item>
            </NavDropdown>


            </Nav>
            </Navbar.Collapse>
            </Container>

           </Navbar>
        </>
    )
}
export default Header;