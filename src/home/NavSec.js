import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';
import logo from '../images/logo-icon.png';

const NavSec = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="navsec">

            <Navbar color="light" light expand="md">
                <NavbarBrand href="#">
                    <span><img src={logo} alt="website image" /><span className="brand-text">AnsorMed</span></span>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Xizmatlar</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Dorilar</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Asal</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">kontaklar</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Blog</NavLink>
                        </NavItem>
                        <Button className="btn">Qabulga yozilish</Button>
                    </Nav>
                </Collapse>
            </Navbar>

        </div>
    );
};


export default NavSec;