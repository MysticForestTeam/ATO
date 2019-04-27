import posed from 'react-pose'
import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #f4f4f4;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  padding-bottom: 40px;
`

export const Header = styled.div`
  min-height: calc(100vh - 90vh);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-family: 'Roboto', sans-serif;

  h1 {
    margin: 0;
  }
`

export const Stick = styled.div`
  background-color: #bda064;
  width: 34px;
  height: 4px;
  margin-top: 30px;
`

export const HeaderText = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
  margin-top: 30px;
`

export const NewsWrapper = styled.div`
  margin-top: 40px;
  maring-bottom: 40px;
  display: grid;
  grid-template-rows: 400px;
  grid-template-columns: repeat(3, 330px);
  grid-gap: 15px;

  @media(max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const NewsCardPosed = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    translateZ: 0,
    transition: {
      duration: 600
    }
  },
  hover: {
    scale: 1.05,
    translateZ: 0,
    transition: {
      duration: 600
    }
  }
})

export const NewsCard = styled(NewsCardPosed)`
  width: 100%;
  height: 100%;
  cursor: pointer;
`

export const CardImg = styled.div`
  background: #fff url(${props => props.src}) center center;
  height: 200px;
  width: 100%;
`

export const CardDescription = styled.div`
  height: 200px;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateZ(0);
`

export const CardText = styled.div`
  color: ${props => (props.primary ? '#000000' : '#949695')};
  font-size: ${props => (props.primary ? '16px' : '13px')};
  font-family: 'Roboto', sans-serif;
  text-align: center;
  max-width: 250px;
  margin-bottom: ${props => (props.primary ? '20px' : '0px')};
  transform: translateZ(0);
`
