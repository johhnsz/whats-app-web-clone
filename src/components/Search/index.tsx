import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container, InputContainer } from './styles';

const Search: React.FC = () => {
  return (
    <Container>
      <InputContainer>
        <FiSearch color="#7c7f80" />
        <input type="text" placeholder="Procurar ou começar uma nova conversa" />
      </InputContainer>
    </Container>
  );
}

export default Search;