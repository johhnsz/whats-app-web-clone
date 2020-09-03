import styled from 'styled-components';

export const Container = styled.div`
  grid-area: SC;
  background: #131c21;

  border-right: 1px solid #3f4448cc;
  border-bottom: 1px solid #242d32;
  padding: 7px 12px;

  display: flex;
  align-items: center;
  justify-content: center;


`;

export const InputContainer = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 100px;
  border: 0;
  background: #323739;
  display: flex;
  align-items: center;
  padding: 0 14px;

  input {
    flex: 1;
    color: #a2a5a7;
    font-weight: 500;
    font-size: 14px;
    margin-left: 28px;
    height: 100%;
    width: 100%;
    border: 0;
    outline: 0;
    background: transparent;

    &::placeholder {
      color: #777a7b;
    }
  }
`;
