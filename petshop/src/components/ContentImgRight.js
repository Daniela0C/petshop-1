import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function ContentImgRight({imagem, textoImagem, texto}) {
  return (
    <Container className='pb-5'>
        <Row>
            <Col lg='9' md='9' sm='12'>
                <p>{texto}</p>
            </Col>
            <Col lg='3' md='3' sm='12'>
                <img src={imagem} alt={textoImagem} />
            </Col>            
        </Row>
        
    </Container>
  )
}

export default ContentImgRight