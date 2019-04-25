import styled from 'styled-components'

const headHeight = '70px'

export const Head = styled.div`
  width: 100vw;
  height: ${headHeight};
  background-color: #30372f;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Info = styled.div`
  width: 960px;
  box-sizing: border-box;
  padding: 0 20px;
  min-width: 800px;
  height: ${headHeight};
  display: flex;
  justify-content: space-between;
`

export const Logo = styled.p`
  color: #ffffff;
  font-size: 1.35em;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
`

export const Contacts = styled.div`
  display: flex;
`

export const Contact = styled.div`
  height: ${headHeight};
  display: flex;
  justify-content: center;
  align-items: center;

  &:first-child {
    margin-right: 10px;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
  height: 35px;
`

export const Text = styled.p`
  margin: 0;
  color: ${props => (props.main ? '#ffffff' : '#9c8d6a')};
  font-size: ${props => (props.main ? '0.9em' : '0.75em')};
`

export const Nav = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #bf9f62;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Link = styled.a`
  font-size: 1em;
  color: #ffffff;
  padding: 0 2.4em;
  display: block;
  text-decoration: none;
  font-family: 'Roboto Slab', serif;
`
