import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  
  grid-template-columns: 411px auto;
  grid-template-rows: 59px 49px auto 62px;

  grid-template-areas:
    'HP HG'
    'SC CB'
    'CL CB'
    'CL CC';

  height: 100vh;
  
`;
