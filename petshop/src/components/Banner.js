import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Banner01 from '../imagens/Banner-01.jpg';
import Banner02 from '../imagens/banner.jpg';
import Banner03 from '../imagens/banho-e-tosa.png';

function Banner() {   
  return (
    <Carousel >
      <Carousel.Item className='imgbanners'>
        <img src={Banner01} alt='' />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='imgbanners'>
        <img src={Banner02} alt=''/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='imgbanners'>
        <img src={Banner03} alt=''/>
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Banner