import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function ContentImgLeft({imagem, textoImagem, texto}) {
  return (
    <Container >
        <Row>
            <Col lg='6' md='6' sm='12'>
                <img src={imagem} alt={textoImagem} />
            </Col>
            <Col lg='6' md='6' sm='12'>
                <p>{texto}</p>
            </Col>
        </Row>
    </Container>
  )
}

export default ContentImgLeft