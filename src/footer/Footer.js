import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import logo from '../images/logo-icon.png'

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col md="6">
                        <span>
                            <img src={logo} alt="logo image" />
                            <a href="#">AnsorMed</a>
                        </span>
                    </Col>
                    <Col md="6">
                        <ul>
                            <li>
                                <a href="#">xizmatlar</a>
                            </li>
                            <li>
                                <a href="#">dorilar</a>
                            </li>
                            <li>
                                <a href="#">asal</a>
                            </li>
                            <li>
                                <a href="#">kontaktlar</a>
                            </li>
                            <li>
                                <a href="#">blog</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Footer;