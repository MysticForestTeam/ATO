import React from 'react'

import {
  Wrapper,
  ContentWrapper,
  PersonCard,
  Avatar,
  Name,
  Text
} from './Team.styled'

const Team = () => (
  <Wrapper>
    <ContentWrapper>
      <PersonCard>
        <Avatar />
        <Name>Андрій Наконечний</Name>
        <Text primary>Замісник</Text>
        <Text>
          На портрете была изображена дама в меховой шляпе и боа, она сидела
          очень прямо и протягивала зрителю тяжелую
        </Text>
      </PersonCard>
      <PersonCard>
        <Avatar />
        <Name>Андрій Наконечний</Name>
        <Text primary>Замісник</Text>
        <Text>
          На портрете была изображена дама в меховой шляпе и боа, она сидела
          очень прямо и протягивала зрителю тяжелую
        </Text>
      </PersonCard>
      <PersonCard>
        <Avatar />
        <Name>Андрій Наконечний</Name>
        <Text primary>Замісник</Text>
        <Text>
          На портрете была изображена дама в меховой шляпе и боа, она сидела
          очень прямо и протягивала зрителю тяжелую
        </Text>
      </PersonCard>
    </ContentWrapper>
  </Wrapper>
)

export default Team
