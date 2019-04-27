import React from 'react'

import Carousel from './Carousel'

import Button from '../../modules/primary-button/Button'

import {
  Wrapper,
  ContentWrapper,
  CarouselBlock,
  Header,
  Stick,
  Text,
  Image
} from './Gallery.styled'

const Images = [
  '../../img/ato1.jpg',
  '../../img/ato2.jpg',
  '../../img/ato3.jpg'
]

const Gallery = () => (
  <Wrapper>
    <ContentWrapper>
      <CarouselBlock>
        <Header>Галерея</Header>
        <Stick />
        <Text>
          Затем взгляд Грегора устремился в окно, и пасмурная погода – слышно
          было, как по жести подоконника стучат капли дождя – привела его и
          вовсе в грустное настроение.
        </Text>
        <Carousel 
          images={Images} 
          delay={5000}
          workedLink='/'
        />
        <Button text='Перейти' link url='/gallery' />
      </CarouselBlock>
      <Image src={Images[0]} />
    </ContentWrapper>
  </Wrapper>
)

export default Gallery
