import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import bannerAdestramento from '../imagens/adestramento/banner-adestramento.jpg'

function Adestramento() {
  return (
      <Container fluid className='bannerAdestramento'>
        <Row>
          <Col>
            <img src={bannerAdestramento} alt='Banner do adestramento' />
          </Col>
        </Row>
      </Container>
  )
}

export default Adestramento