import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  overflow: hidden;
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 960px;
  min-width: 768px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px auto;
`;

export const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  margin-bottom: 30px;
`;

export const Info = styled.div`
  width: 100%;
  height: 60px;
  /* border-bottom: 1px solid #bf9f62; */
  border-top: 1px solid #eee;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    height: 100%;
    align-items: center;

    p {
      font-family: 'Roboto', sans-serif;
      color: #555;
      font-size: 10pt;
      margin: 0;
      margin-left: 4px;
    }
  }
`;

export const Title = styled.p`
  width: 100%;
  color: #333;
  font-size: 1.5em;
  margin: 0;
  margin-bottom: 30px;
  font-family: 'Roboto', sans-serif;
`;

export const Text = styled.p`
  width: 100%;
  color: #555;
  font-size: 1em;
  margin: 0;
  text-align: justify;
  /* font-family: 'Roboto', sans-serif; */
  font-family: 'Georgia', serif;
  margin-bottom: 1.5em;
  line-height: 1.5;
`;
