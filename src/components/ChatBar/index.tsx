import React from 'react';

import { FiArrowUp, FiMic } from 'react-icons/fi';

import { Container, Emojis, Audio } from './styles';

const ChatBar: React.FC = () => {
  return (
    <Container>
      <Emojis>
        <FiArrowUp size={24} color="#b1b3b5"/>
      </Emojis>
      <input type="text" placeholder="Digite uma mensagem" />
      <Audio>
        <FiMic size={24} color="#b1b3b5"/>
      </Audio>
    </Container>
  );
}

export default ChatBar;