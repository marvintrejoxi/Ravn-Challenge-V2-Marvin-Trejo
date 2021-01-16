import React from 'react';

// custom
import {Container, Wrapper, Sidebar, Content} from 'app.styled';
import {Header} from 'components/Header';
import {RegisterCard} from 'components/RegisterCard';
import {GeneralInformation} from 'components/GeneralInFormation';

export const App: React.FC = () => {
  return (
    <Container>
      <Header />

      <Wrapper>
        <Sidebar>
          <RegisterCard />
        </Sidebar>

        <Content>
          <GeneralInformation />
        </Content>
      </Wrapper>
    </Container>
  );
};
