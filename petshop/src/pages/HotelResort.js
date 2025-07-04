import React from 'react'
import Rotulo from "../components/Rotulo"
import { Container, Row, Col } from 'react-bootstrap'
import hs01 from  "../imagens/fotos-resort/thumbnail/brincadeiras-resort.jpg"
import hs02 from  "../imagens/fotos-resort/thumbnail/cascata-resort.jpg"
import hs03 from  "../imagens/fotos-resort/thumbnail/creche-resort.jpg"
import hs04 from  "../imagens/fotos-resort/thumbnail/equipe-resort.jpg"
import hs05 from  "../imagens/fotos-resort/thumbnail/equipe2-resort.jpg"
import hs06 from  "../imagens/fotos-resort/thumbnail/hotel-para-cachorros.jpg"
import hs07 from  "../imagens/fotos-resort/thumbnail/niver-resort.jpg"
import hs08 from  "../imagens/fotos-resort/thumbnail/parque-resort.jpg"
import hs09 from  "../imagens/fotos-resort/thumbnail/parque2-resort.jpg"
import hs10 from  "../imagens/fotos-resort/thumbnail/piscina-resort.jpg"
import hs11 from  "../imagens/fotos-resort/thumbnail/quarto-cama-resort.jpeg"
import hs12 from  "../imagens/fotos-resort/thumbnail/quarto-dubai-resort.jpg"
import hs13 from  "../imagens/fotos-resort/thumbnail/quarto-resort.jpg"
import hs14 from  "../imagens/fotos-resort/thumbnail/resort-cachorro.jpg"
import hs15 from  "../imagens/fotos-resort/thumbnail/resort-camping.jpg"
import hs16 from  "../imagens/fotos-resort/thumbnail/spa-resort.jpg"




function HotelResort() {

  const fotos = [
    {
      id: 1,
      alt:'imagem 1 do Hotel Resort',
      src: `${hs01}`
    },
    {
      id: 2,
      alt:'imagem 2 do Hotel Resort',
      src: `${hs02}`
    },
    {
      id: 3,
      alt:'imagem 3 do Hotel Resort',
      src: `${hs03}`
    },
    {
      id: 4,
      alt:'imagem 4 do Hotel Resort',
      src: `${hs04}`
    },
    {
      id: 5,
      alt:'imagem 5 do Hotel Resort',
      src: `${hs05}`
    },
    {
      id: 6,
      alt:'imagem 6 do Hotel Resort',
      src: `${hs06}`
    },
    {
      id: 7,
      alt:'imagem 7 do Hotel Resort',
      src: `${hs07}`
    },
    {
      id: 8,
      alt:'imagem 8 do Hotel Resort',
      src: `${hs08}`
    },
    {
      id: 9,
      alt:'imagem 9 do Hotel Resort',
      src: `${hs09}`
    },
    {
      id: 10,
      alt:'imagem 10 do Hotel Resort',
      src: `${hs10}`
    },
    {
      id: 11,
      alt:'imagem 11 do Hotel Resort',
      src: `${hs11}`
    },
    {
      id: 12,
      alt:'imagem 12 do Hotel Resort',
      src: `${hs12}`
    },
    {
      id: 13,
      alt:'imagem 13 do Hotel Resort',
      src: `${hs13}`
    },
    {
      id: 14,
      alt:'imagem 14 do Hotel Resort',
      src: `${hs14}`
    },
    {
      id: 15,
      alt:'imagem 15 do Hotel Resort',
      src: `${hs15}`
    },
    {
      id: 16,
      alt:'imagem 16 do Hotel Resort',
      src: `${hs16}`
    }
  ]
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Rotulo rotulo='Hotel Resort'/>
          </Col>
        </Row>
      </Container>

      <Container className='pb-5'>
        <Row>
          <Col>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia tortor ac facilisis sagittis. Curabitur ultricies dolor vel nulla sagittis, a eleifend magna dapibus. Aenean massa turpis, dignissim eu arcu in, ornare rhoncus turpis. Nulla cursus erat vitae luctus suscipit. Proin sit amet convallis quam. Duis dignissim convallis dui, sed ultrices velit porta vitae. Suspendisse sed aliquam enim, ullamcorper fermentum neque.</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2>Conheça nosso espaço</h2>
          </Col>
        </Row>        
        
        <Row>
          <Col className='img-hotel'>
          {
              fotos.map((x) =>(
                <div key={x.id}>
                  <img src={x.src} alt={x.alt}/>
                </div>
              ))
            }
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HotelResort