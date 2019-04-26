import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 673px;
  background-color: #30372f;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ContentWrapper = styled.div`
  max-width: 1020px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

export const CarouselBlock = styled.div`
  width: 50%;
  height: 403px;
`

export const Header = styled.h1`
  font-family: 'Roboto', sans-serif;
  margin: 0;
  color: #fff;
  margin-bottom: 15px;
`

export const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #fff;
  margin-top: 30px;
`

export const Stick = styled.div`
  width: 46px;
  height: 4px;
  background-color: #bda064;
`

export const Image = styled.div`
  background: #f4f4f4 url(${props => props.src}) center center;
  width: 50%;
  height: 403px;
`
