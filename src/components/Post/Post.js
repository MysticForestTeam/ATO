import React from 'react';
import moment from 'moment';

import { Wrapper, Info, Image, Title, Text } from './Post.styled';
import { Container } from '../../modules/content/Content.styled';

const Post = props => (
  <Container>
    <Wrapper>
      <Image src={props.images} />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Info>
        <div>
          <img src='../../img/author.svg' height='12.4px' />
          <p>{props.author}</p>
        </div>
        {/* Author */}
        <div>
          <img src='../../img/calendar.svg' height='12.4px' />
          <p>
            {/* Create date */}
            {moment(props.date)
              .locale('uk')
              .format('DD MMMM YYYY')}
          </p>
        </div>
      </Info>
    </Wrapper>
  </Container>
);

export default Post;
