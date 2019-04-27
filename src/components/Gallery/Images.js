import React, { Component } from 'react';

import { Wrapper, Image } from './Images.styled';
import { Container } from '../../modules/content/Content.styled';

import ZoomImg from './ZoomImg'

const Images = (props) => (
  <Container>
    <Wrapper>
      {/* <ZoomImg src='../../img/ato1.jpg'/>
      <ZoomImg src='../../img/ato2.jpg'/>
      <ZoomImg src='../../img/ato3.jpg'/> */}

      {props.images.map((image, index) => (
        <ZoomImg src={image} key={index} />
      ))}
    </Wrapper>
  </Container>
);

export default Images;
