import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import { NavLink } from 'react-router-dom'
import moment from 'moment';

import { Ratio, Wrapper, Image, Text, Info } from './Item.styled';

const Item = props => (
  <Ratio>
    <NavLink to={'/news/' + props.id}>
      <Wrapper>
        <Image>
          <img src={props.image} alt='' />
        </Image>
        <Text>
          <LinesEllipsis
            text={props.text}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
          <Info>
            <img src='../../img/calendar.svg' height='13px' />
            <p>{props.updated_at}</p>
          </Info>
        </Text>
      </Wrapper>
    </NavLink>
  </Ratio>
);

export default Item;
