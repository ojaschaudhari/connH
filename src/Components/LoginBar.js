import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../Design/Menu.css'

export default function LoginBar() {
    return (
        <>
            <Navbar bg="dark" variant='dark' expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink to="/" className='home'>Home</NavLink>
                        </Nav>
                        <div className="d-flex">
                            <button className='btn btn-primary outline-success store'>Store</button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
