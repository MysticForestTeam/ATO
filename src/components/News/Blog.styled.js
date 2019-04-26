import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  overflow: hidden;
`;

export const News = styled.div`
  width: calc(960px - 30px);
  min-width: calc(768px - 30px);
  margin: 20px 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
