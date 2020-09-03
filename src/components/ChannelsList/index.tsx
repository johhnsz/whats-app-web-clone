import React from 'react';

import Channel from '../Channel'

import { Container } from './styles';

const ChannelsList: React.FC = () => {
  return (
    <Container>
      <Channel />
      <Channel isSelected />
      <Channel />
      <Channel />
      <Channel />
      <Channel />
      <Channel />
      <Channel />
      <Channel />
      <Channel />
      <Channel />
      <Channel />
    </Container>
  );
}

export default ChannelsList;