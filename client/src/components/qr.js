import React from 'react'
import "../css/qr.css"
import qr from "../images/Location QR.png"
import { Container, Row, Col, Image } from 'react-bootstrap';

export const Qr = () => {
  return (
    <Container>
        <Row>
            <Col xs={12}md={6}>
            <img src={qr} className='qr'></img>
            </Col>
            <Col xs={12} md={6}>
            <h1> View Our Location </h1>
            <p> Use this Qr to Locate us and in Invitations </p>
            </Col>
        </Row>
    </Container>
  );
}
