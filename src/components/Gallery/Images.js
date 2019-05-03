import React, { Component } from 'react';

import { Wrapper, Image } from './Images.styled';
import { Container } from '../../modules/content/Content.styled';

import ZoomImg from '../../modules/zoom-img/ZoomImg'

const Images = (props) => (
  <Container>
    <Wrapper>
      {props.images.map((image, index) => (
        <ZoomImg 
          src={image} 
          key={index} 
          useScale
        />
      ))}
    </Wrapper>
  </Container>
);

export default Images;
