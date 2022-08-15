import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

function Header(props) {

    return (
        <Navbar bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img className="brand-icon" src="https://www.static-src.com/frontend/static/img/logo-blibli-white.f8255fc.svg" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={props.query}
                            onChange={props.handleSearch}
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;