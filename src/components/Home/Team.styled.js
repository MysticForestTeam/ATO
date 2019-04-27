import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 673px;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
`

export const ContentWrapper = styled.div`
  max-width: 1020px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const PersonCard = styled.div`
  width: 33.3333%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Avatar = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background: #f4f4f4 url(${props => props.src}) center center;
  background-size: cover;
`

export const Name = styled.h1`
  color: #c5a460;
  font-family: 'Roboto', sans-serif;
  font-size: 1.3em;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const Text = styled.p`
  color: ${props => (props.primary ? '#888A87' : '#9D9D9D')};
  font-family: 'Roboto', sans-serif;
  font-size: ${props => (props.primary ? '1.1em' : '1em')};
  text-align: center;
  max-width: 80%;
  margin-top: 10px;
  margin-bottom: 10px;
`
