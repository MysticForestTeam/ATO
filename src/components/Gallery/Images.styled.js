import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 960px;
  min-width: 768px;
  box-sizing: border-box;
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
`;

export const Image = styled.div`
  width: calc(33.3% - 10px);
  padding-top: 22.2%;
  position: relative;
  cursor: pointer;
  margin: 5px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    transition: all 0.4s ease-out;
  }

  &:hover > img {
    transform: scale(1.05);
  }
`;
