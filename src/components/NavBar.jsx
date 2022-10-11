import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom"
import logo from "../assets/img/logo.png"

const NavBarPage = () => {

    const setActiveClass = ({isActive}) => (isActive ? "active ms-3 text-decoration-none" : "inactive ms-3 text-decoration-none");

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
            <Navbar.Brand className="d-flex"><img className='logo' src={logo} alt="logo"/></Navbar.Brand>
                <Nav>
                    <NavLink end className={setActiveClass} to="/">Home</NavLink>
                    <NavLink to="/pokemones" className={setActiveClass}>Pokemones</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBarPage