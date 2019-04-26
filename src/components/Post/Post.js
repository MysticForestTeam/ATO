import React from 'react';
import moment from 'moment';

import { Container, Wrapper, Info, Image, Title, Text } from './Post.styled';

const Post = props => (
  <Container>
    <Wrapper>
      <Image src={props.images[0]} />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Text>{props.text}</Text>
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
