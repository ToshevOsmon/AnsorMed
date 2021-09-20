import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import hijoma from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';

const Services = () => {
    return (
        <div className="service">
            <h2 className="title">Xizmatlar</h2>
            <Container>
                <Row>
                    <Col md="3">
                        <img src={hijoma} alt="Hijoma image" />
                    </Col>
                    <Col md="9">
                        <h3>Hijoma</h3>
                        <p> Imom Termiziy Abdulloh ibn Abbos raziyallohu anhumodan
                            rivoyat qilgan hadisda rasululloh sallallohu alayhi
                            va sallam dedilar: «Sizlar hijoma qiladigan kunlaringizning
                            eng yaxshisi 17, 19 va 21-kunlardir» (bu kunlar
                            hijrij-kamariy hisobdagi oylar kunlaridir).
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md="3">
                        <img src={image2} alt="Hijoma image" />
                    </Col>
                    <Col md="9">
                        <h3>Manual terapiya</h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nulla ac metus placerat, pellentesque enim ac, rhoncus lectus.
                            Maecenas et posuere lorem. Fusce sed massa sit amet elit
                            viverra hendrerit.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md="3">
                        <img src={image3} alt="Hijoma image" />
                    </Col>
                    <Col md="9">
                        <h3>Zuluk bilan davolash</h3>
                        <p> Girudoterapiya (lot. hirūdō — «zuluk» va qad.
                            yun. θεραπεία — «davolash») —
                            ma’lum kasalliklarni dorivor zuluklar
                            (Hirudo medicinalis) yordamida davolash usuli.
                            Fizioterapevtik muolaja, muqobil tibbiyotga oid sanaladi.
                            Bunday zuluklar ushbu kichik sinf chuvchalchanglariga
                            oid yagona tur hisoblanadi, qolganlari shifobaxsh
                            ta’sir ko’rsatmaydi.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md="3">
                        <img src={image4} alt="Hijoma image" />
                    </Col>
                    <Col md="9">
                        <h3>Tabiiy dori vositalari</h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nulla ac metus placerat, pellentesque enim ac, rhoncus lectus.
                            Maecenas et posuere lorem. Fusce sed massa sit amet
                            elit viverra hendrerit.
                        </p>
                    </Col>
                </Row>
                <div className="button">
                    <Button color="danger">Qabulga yozilish</Button>
                </div>

            </Container>

        </div>
    );
};

export default Services;