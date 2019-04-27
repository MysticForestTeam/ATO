import posed from 'react-pose'
import styled from 'styled-components';
import { Z_FIXED } from 'zlib';

export const Wrapper = styled.div`
  width: 960px;
  min-width: 768px;
  box-sizing: border-box;
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;
