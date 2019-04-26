import styled from 'styled-components';

export const About = styled.div`
  width: 100%;
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
    padding: 0;
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
