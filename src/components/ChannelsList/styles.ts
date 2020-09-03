import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CL;
  background: #131c21;
  border-right: 1px solid #3f4448cc;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #394045; 
  }
`; 
