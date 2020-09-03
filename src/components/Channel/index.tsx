import React from 'react';
import { FiCheck } from 'react-icons/fi';

import { Container, Avatar, Details, Name, Hour, History } from './styles';

interface ChannelProps {
  isSelected?: boolean;
}

const Channel: React.FC<ChannelProps> = ({ isSelected }) => {
  return (
    <>
    <Container isSelected={isSelected}>
      <Avatar />
     <Details>
      <span>
        <Name>Contato</Name>
        <History>
          <FiCheck />
          Hello
        </History>
      </span>
      <Hour>12:00</Hour>
     </Details>
    </Container>
    </>
  );
}

export default Channel;