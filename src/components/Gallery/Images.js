import React, { Component } from 'react';

import { Wrapper, Image } from './Images.styled';
import { Container } from '../../modules/content/Content.styled';

class Images extends Component {
  render() {
    return (
      <>
        <Container>
          <Wrapper>
            <Image onClick={() => this.openViewer('../../img/header.png')}>
              <img src='../../img/header.png' />
            </Image>
            <Image>
              <img src='../../img/header.png' />
            </Image>
            <Image>
              <img src='../../img/header.png' />
            </Image>
            <Image>
              <img src='../../img/header.png' />
            </Image>
          </Wrapper>
        </Container>
      </>
    );
  }
}

export default Images;
