import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import bannerAdestramento from '../imagens/adestramento/banner-adestramento.jpg'
import Accordion from 'react-bootstrap/Accordion';
import adestramento1 from  "../imagens/adestramento/adestramento1.jpg"
import adestramento2 from  "../imagens/adestramento/adestramento2.jpg"
import adestramento3 from  "../imagens/adestramento/adestramento3.jpg"
import adestramento4 from  "../imagens/adestramento/adestramento4.jpg"
import adestramento5 from  "../imagens/adestramento/adestramento5.jpg"

function Adestramento() {

  const photos = [
    {
      id: 1,
      title: 'Imagem de Adestramento 1',
      url: `${adestramento1}`
    },
    {
      id: 2,
      title: 'Imagem de Adestramento 2',
      url: `${adestramento2}`
    },
    {
      id: 3,
      title: 'Imagem de Adestramento 3',
      url: `${adestramento3}`
    },
    {
      id: 4,
      title: 'Imagem de Adestramento 4',
      url: `${adestramento4}`
    },
    {
      id: 5,
      title: 'Imagem de Adestramento 5',
      url: `${adestramento5}`
    }
  ]

  return (
    <div>
      <Container fluid >
        <Row > 
          <Col className='bannerAdestramento px-0'>
            <img src={bannerAdestramento} alt='Banner do adestramento' className='w-100'/>
          </Col>
        </Row>
      </Container>

      <Container className='py-5'>
        <Row > 
          <Col >
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
            <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Col>
        </Row>
      </Container>

      <Container >
        <Row>
          <Col className='fotosLinha'>
            {
              photos.map((photo) =>(
                <div key={photo.id}>
                  <img src={photo.url} alt={photo.title}/>
                </div>
              ))
            }
          </Col>
        </Row>
      </Container>

      <Container className='py-5'>
        <Row>
          <Col>
            <h2>Perguntas Frequentes</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Qual a melhor idade para Adestramento?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Toda raça pode ser Adestrada?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>     
    </div>
  )
}

export default Adestramento