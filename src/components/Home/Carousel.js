import React from 'react'
import { Map, List } from 'immutable'

import {
  Wrapper,
  ImagesWrapper,
  Image,
  DotsWrapper,
  Dot
} from './Carousel.styled'

class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [],
      activeDots: [],
      translateX: 0,
      activeSlide: 0,
      animates: false
    }

    this.moveImages = this.moveImages.bind(this)
    this.autoToggle = this.autoToggle.bind(this)
  }

  componentWillMount() {
    console.log(this.state.activeDots)
    this.setState({ images: [...this.props.images, this.props.images[0]] })
    this.setState({
      activeDots: List.of(
        ...this.props.images.map((image, index) => ({
          id: index,
          state: index === 0 ? true : false
        }))
      ).toJS()
    })
  }

  componentDidMount() {
    this.autoToggle()
  }

  moveImages = index => {
    this.setState({
      translateX:
        this.state.translateX +
        (232 + 20) *
          ((index === this.state.activeDots.length ? 0 : index) -
            this.state.activeSlide) *
          -1,
      activeSlide: index === this.state.activeDots.length ? 0 : index
    })

    const activeDots = List.of(
      ...this.state.activeDots.map(dot => {
        return {
          id: dot.id,
          state:
            dot.id === (index === this.state.activeDots.length ? 0 : index)
              ? true
              : false
        }
      })
    )

    this.setState({ activeDots: activeDots.toJS() })
  }

  autoToggle = () => {
    this.moveImages(this.state.activeSlide + 1)

    window.setTimeout(() => {
      this.autoToggle(this.state.activeSlide + 1)
    }, this.props.delay)
  }

  render() {
    return (
      <Wrapper>
        <ImagesWrapper>
          {this.state.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              transX={parseInt(this.state.translateX) + 'px'}
            />
          ))}
        </ImagesWrapper>
        <DotsWrapper>
          {this.state.activeDots.map((dot, index) => (
            <Dot
              key={index}
              active={dot}
              onClick={() => {
                this.moveImages(index)
              }}
              pose={dot.state ? 'active' : 'init'}
            />
          ))}
        </DotsWrapper>
      </Wrapper>
    )
  }
}

export default Carousel
