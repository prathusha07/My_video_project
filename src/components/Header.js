import React from 'react';
import {Navbar,Nav,NavDropdown,Container,Image} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

const Header =()=>{
    return(
        <>
           <Navbar className='navbar-style' expand="lg">
            <Container>
                <LinkContainer to='/'>
                <Navbar.Brand href="/">
                 <Image className='logo-img-style' src='images/img2.png' alt='image' roundedCircle/>
                  <h6 className='logo-text-style'>Visvervaya Technological University,Belagavi</h6>
                </Navbar.Brand>
                </LinkContainer>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                
            <LinkContainer to='/'>
            <Nav.Link href="#">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/About us'>
            <Nav.Link href="#link">About us</Nav.Link>
            </LinkContainer>
            
             
            <NavDropdown title="Academic" id="basic-nav-dropdown">
            <LinkContainer to='/admission'>
            <NavDropdown.Item href="#">Admission</NavDropdown.Item>
            </LinkContainer>  
            <LinkContainer to='/circular'>
            <NavDropdown.Item href="#">Circulars & Notification</NavDropdown.Item>
            
            </LinkContainer>
            <LinkContainer to='/certificate'>

            <NavDropdown.Item href="#">Certificate Issued</NavDropdown.Item>
            </LinkContainer>
            </NavDropdown>

            <NavDropdown title="Examination" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Examination Guidline</NavDropdown.Item>
            <NavDropdown.Item href="#">Examination Application</NavDropdown.Item>
            <LinkContainer to='/result/loginpage'>
            <NavDropdown.Item href="#">Results</NavDropdown.Item>
            </LinkContainer>
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