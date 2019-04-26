import React from 'react';

import { Container, News } from './Blog.styled';
import Item from './Item';

const Blog = props => (
  <Container>
    <News>
      <Item id='1' {...props} />
      <Item id='2' {...props} />
      <Item id='3' {...props} />
      <Item id='4' {...props} />
      <Item id='5' {...props} />
      <Item id='6' {...props} />
    </News>
  </Container>
);

export default Blog;
