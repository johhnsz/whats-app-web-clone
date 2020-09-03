import React from 'react';
import { FiSearch, FiPaperclip, FiMoreVertical } from 'react-icons/fi'

import { Container, ContactInfo, Avatar, Name, LastVisited, ContactActions } from './styles';

const HeaderGroup: React.FC = () => {
  return (
    <Container> 

      <ContactInfo>
        <Avatar />
        <span>
          <Name>Contato</Name>
          <LastVisited>online</LastVisited>
        </span>
      </ContactInfo>

      <ContactActions>
        <FiSearch size={21} color="#b1b3b5"/>
        <FiPaperclip size={21} color="#b1b3b5"/>
        <FiMoreVertical size={21} color="#b1b3b5"/>
      </ContactActions>

    </Container>
  );
}

export default HeaderGroup;