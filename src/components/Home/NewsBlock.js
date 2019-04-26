import React from 'react'

import { 
  Wrapper,
  Header,
  Stick,
  HeaderText,
  NewsWrapper,
  NewsCard,
  CardImg,
  CardDescription,
  CardText
} from './NewsBlock.styled'

const News = [
  {
    image: '../../img/ato1.jpg',
    header: 'Над столом, где были разложены',
    desc: 'Над столом, где были разложены распакованные образцы сукон – Замза был коммивояжером, – висел портрет'
  },
  {
    image: '../../img/ato2.jpg',
    header: 'Над столом, где были разложены',
    desc: 'Над столом, где были разложены распакованные образцы сукон – Замза был коммивояжером, – висел портрет'
  },
  {
    image: '../../img/ato3.jpg',
    header: 'Над столом, где были разложены',
    desc: 'Над столом, где были разложены распакованные образцы сукон – Замза был коммивояжером, – висел портрет'
  }
]
class NewsBlock extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      news: News
    }
  }


  render() {
    return(
      <Wrapper>
        <Header>
          <h1>Новини</h1>
        </Header>
        <Stick />
        <HeaderText>
          Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, 
          что он у себя в постели превратился в страшное насекомое.
        </HeaderText>
        <NewsWrapper>
          {this.state.news.map((card, index) => (
            <NewsCard
              key={index}
            >
              <CardImg 
                src={card.image}/>
              <CardDescription>
                <CardText primary>
                  {card.header}
                </CardText>
                <CardText>
                  {card.desc}
                </CardText>
              </CardDescription>
            </NewsCard>
          ))}
        </NewsWrapper>
    </Wrapper>
    )
  }
}

export default NewsBlock
