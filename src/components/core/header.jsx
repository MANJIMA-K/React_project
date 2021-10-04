import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

class Header extends React.Component {

    render() {
        return (
            <>
                <div>
                    <h1 style={{ backgroundColor: "darkblue", color: "white", textAlign: "center", fontSize: "45px", fontStyle: "italic" }}><b>BANK MANAGEMENT</b></h1>

                    <Navbar bg="primary" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home"><Link to="/" style={{ color: 'black', textDecoration: "none" }}>Home</Link></Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="#home"><Link to="/viewbank" style={{ color: 'black', textDecoration: "none" }}>Banks</Link></Nav.Link>
                                <Nav.Link href="#home"><Link to="/transactions" style={{ color: 'black', textDecoration: "none" }}>Transactions</Link></Nav.Link>
                                <Nav.Link href="#features"><Link to="/customer" style={{ color: 'black', textDecoration: "none" }}>Customer</Link></Nav.Link>

                            </Nav>
                        </Container>
                    </Navbar>

                </div>
            </>
        )
    }
}


export default Header