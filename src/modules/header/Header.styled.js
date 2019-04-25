import styled from 'styled-components';

const headHeight = '70px';

export const Head = styled.div`
  width: 100vw;
  height: ${headHeight};
  background-color: #30372f;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.div`
  width: 960px;
  box-sizing: border-box;
  padding: 0 20px;
  min-width: 800px;
  height: ${headHeight};
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.p`
  color: #ffffff;
  font-size: 1.35em;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
`;

export const Contacts = styled.div`
  display: flex;
`;

export const Contact = styled.div`
  height: ${headHeight};
  display: flex;
  justify-content: center;
  align-items: center;

  &:first-child {
    margin-right: 10px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
  height: 35px;
`;

export const Text = styled.p`
  margin: 0;
  color: ${props => (props.main ? '#ffffff' : '#9c8d6a')};
  font-size: ${props => (props.main ? '0.9em' : '0.75em')};
`;

export const Nav = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #bf9f62;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.a`
  font-size: 1em;
  color: #ffffff;
  padding: 0 2.4em;
  display: block;
  text-decoration: none;
  font-family: 'Roboto Slab', serif;
`;

export const About = styled.div`
  width: 100vw;
  height: calc(90vh - 120px);
  background: #eeeeee url('../../../src/img/header.png') center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: #ffffff;
    font-family: 'Roboto Slab', serif;
    font-size: 2em;
    font-weight: 300;
    margin: 10px;
  }

  button {
    width: 100px;
    height: 30px;
    border-radius: 4px;
    background: #bf9f62;
    color: #ffffff;
    line-height: 30px;
    margin-top: 35px;
    border: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 0.8em;
  }
`;
