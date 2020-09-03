import React from 'react';
import { FiMessageCircle, FiMessageSquare, FiMoreVertical } from 'react-icons/fi';

import { Container, Avatar, Actions } from './styles'

const HeaderProfile: React.FC = () => {
  return (
    <Container>
      <Avatar />

      <Actions>
        <FiMessageCircle size={23} color="#b1b3b5" />
        <FiMessageSquare size={23} color="#b1b3b5" />
        <FiMoreVertical size={23} color="#b1b3b5" />
      </Actions>
    </Container>
  )
}

export default HeaderProfile;