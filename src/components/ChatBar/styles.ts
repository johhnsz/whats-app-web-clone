import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CC;
  background: #1e2428;
  display: flex;
  align-items: center;
  padding: 10px 18px;

  input {
    flex: 1;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    border: 0;
    outline: 0;
    background: #33383b;
    margin: 0 22px;
    font-size: 15px;
    padding: 0 16px;
    color: #e7e8e9;

    &::placeholder {
      font-weight: 500;
      color: #7c7f81;
    }
  }
`;

export const Emojis = styled.div`
  cursor: pointer;
`;

export const Audio = styled.div`
  cursor: pointer;
`;