import styled from 'styled-components';

export const Ratio = styled.div`
  width: calc(33.3% - 10px);
  padding-top: calc(44.4% - 10px);
  margin: 5px;
  position: relative;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  overflow: hidden;
`;

export const Image = styled.div`
  width: 100%;
  padding-top: 75%;
  position: relative;
  background: #333;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    position: absolute;
    top: 0;
    transition: all 0.4s ease-out;
  }

  ${Wrapper}:hover & > img {
    transform: scale(1.05);
  }
`;

export const Text = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 0 0 4px 4px;
  border: 1px solid #eee;
  border-top: 0;

  font-size: 12pt;
  font-family: 'Roboto Slab', serif;
  color: #333;
  overflow: hidden;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  p {
    font-size: 80%;
    margin: 0;
    color: #555;
    font-family: 'Roboto', sans-serif;
    margin-left: 4px;
  }
`;
