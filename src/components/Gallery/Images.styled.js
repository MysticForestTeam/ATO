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
  background: #eeeeee url('../../img/header.png') center center;
  background-size: cover;
  margin: 5px;
`;
