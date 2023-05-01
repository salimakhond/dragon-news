import React, { useContext } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../provider/AuthProvider';

const NavigationBar = () => {



    const { user, logOut } = useContext(AuthContext);

    const handleLogout = ()=>{
        logOut()
        .then()
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <Container className='mb-4'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='me-2' to={'/category/0'}>Home</Link>
                            <Link className='me-2' to={'/about'}>About</Link>
                            <Link className='me-2' to={'/career'}>Career</Link>
                        </Nav>
                        <Nav className='d-flex gap-3 align-items-center'>
                            {
                                user && <FaUserCircle style={{ fontSize: '30px' }}></FaUserCircle>
                            }

                            {
                                user ? <Button onClick={handleLogout} variant="success">Log Out</Button> : <Link to="/login">
                                    <Button variant="success">Log In</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;