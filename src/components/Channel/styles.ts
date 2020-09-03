import styled, { css } from 'styled-components';

interface ContainerProps {
  isSelected?: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 11px;
  display: flex;
  align-items: center;
  height: 75px;
  border-bottom: 1px solid #30383dcc;
  cursor: pointer;

  transition: background .2s ease;

  &:hover {
    background: #323739cc;
  }

  ${props => props.isSelected && css`
    background: #323739;
  `}
`;
 
export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #3f4448;
  cursor: pointer;
`;

export const Details = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin: 0 8px 0 14px;
  
`;

export const Name = styled.div`
  color: #c5c6c7;
  font-size: 18px;
`;

export const Hour = styled.div`
  font-size: 14px;
  color: #888c8f;
  font-weight: 500;
  margin-left: auto;
  margin-top: 0px;
`;

export const History = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #888c8f;
  font-weight: 500;
  margin-top: 3px;

  svg {
    margin-right: 4px;
  }
`;
