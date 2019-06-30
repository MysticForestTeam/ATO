import posed from 'react-pose'
import styled from 'styled-components';

export const News = styled.div`
  width: calc(960px - 30px);
  min-width: calc(768px - 30px);
  margin: 20px 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ReadMorePosed = posed.div({
  init: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
    applyAtEnd: { display: 'none' }
  }
})

export const ReadMore = styled(ReadMorePosed)`
  width: auto;
  height: 20px;

  padding: 0 10px 0 10px;
  margin: 0 0 20px 0;

  cursor: pointer;

  color: #fff;
  background-color: #000;

  border-radius: 10px;

  font-size: 8pt;
  font-family: 'Roboto Slab', serif;

  display: flex;
  justify-content: center;
  align-items: center;
`
