import React from 'react';

// custom
import {Container, Wrapper, Sidebar, Content} from 'app.styled';
import {Header} from 'components/Header';
import {RegisterCard} from 'components/RegisterCard';

export const App: React.FC = () => {
  return (
    <Container>
      <Header />

      <Wrapper>
        <Sidebar>
          <RegisterCard />
        </Sidebar>

        <Content>CONTENT RIGHT</Content>
      </Wrapper>
    </Container>
  );
};
