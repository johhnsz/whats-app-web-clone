import React from 'react';

import HeaderProfile from '../HeaderProfile';
import HeaderGroup from '../HeaderGroup';
import Search from '../Search';
import ChannelsList from '../ChannelsList';
import ChatBar from '../ChatBar';
import ChannelBoard from '../ChannelBoard';

import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <HeaderProfile />
      <HeaderGroup />
      <Search />
      <ChannelsList />
      <ChatBar />
      <ChannelBoard />
    </Container>
  );
}

export default Layout;