import styled from 'styled-components';

export const Container = styled.div`
  grid-area: HP;
  background: #2a2f32;
  border-right: 1px solid #3f4448;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #3f4448;
  cursor: pointer;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    margin: 0 9px 0 20px;
    cursor: pointer;
  }
`;
