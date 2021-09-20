import React from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
import hero from '../images/hero-img.png'


const Home = () => {
    return (
        <div className="home">
            <Container>
                <Row>
                    <Col md="6">
                        <h2>Tabiiy davolash usullari yordamida kasalliklardan xalos bo’ling.</h2>
                        <p> Hijoma, manual terapiya, zuluk va turli tabiiy giyohlar eng ko’p
                            uchraydigan kasalliklarni yengishda yordam beradi.
                            Sog’ligingizni o’z ishining professionallariga ishonib topshiring.</p>
                        <div className="button">
                            <Button color="danger">Qabulga yozilish</Button>
                        </div>
                    </Col>
                    <Col md="6" className="col-image">
                        <img src={hero} alt="home image" />
                    </Col>
                </Row>
            </Container>

        </div>
    );
};



export default Home;