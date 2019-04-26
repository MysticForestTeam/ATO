import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import moment from 'moment';

import { Ratio, Wrapper, Image, Text, Info } from './Item.styled';

const Item = props => (
  <Ratio>
    <Wrapper onClick={() => props.history.push(`/news/${props.id}`)}>
      <Image>
        <img src='../../img/header.png' alt='' />
      </Image>
      <Text>
        <LinesEllipsis
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec lacus
          placerat, accumsan justo quis, ultrices nibh. Nullam hendrerit tortor.'
          maxLine='3'
          ellipsis='...'
          trimRight
          basedOn='letters'
        />
        <Info>
          <img src='../../img/calendar.svg' height='13px' />
          <p>{moment().format('DD.MM.YYYY')}</p>
        </Info>
      </Text>
    </Wrapper>
  </Ratio>
);

export default Item;
