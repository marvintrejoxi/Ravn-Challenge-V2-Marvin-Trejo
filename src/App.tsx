import React from 'react';

// custom
import {Container, Wrapper, Sidebar, Content} from 'app.styled';
import {Header} from 'components/Header';

export const App: React.FC = () => {
  return (
    <Container>
      <Header />

      <Wrapper>
        <Sidebar>CONTENT LEFT</Sidebar>

        <Content>CONTENT RIGHT</Content>
      </Wrapper>
    </Container>
  );
};
