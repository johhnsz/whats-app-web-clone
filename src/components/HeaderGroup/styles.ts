import styled from 'styled-components';

export const Container = styled.div`
  grid-area: HG;
  background: #2a2f32;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 13px;
  }
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #3f4448;
  cursor: pointer;
`;

export const Name = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

export const LastVisited = styled.div`
  font-size: 13px;
  color: #a5a6a9;
  margin-top: 2px;
  font-weight: 500;
`;

export const ContactActions = styled.div`
   svg {
    margin: 0 9px 0 20px;
    cursor: pointer;
  }
`;
