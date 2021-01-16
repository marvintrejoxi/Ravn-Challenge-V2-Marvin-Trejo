import React from 'react';
import ArrowRight from 'assets/icons/arrow-right.svg';

// custom
import {RegisterCardWrapper, InformationContainer} from './styled';

export const RegisterCard: React.FC = () => (
  <RegisterCardWrapper>
    <InformationContainer>
      <h1>Luke Skywalker</h1>

      <h2>Human from Tatooine</h2>
    </InformationContainer>

    <img src={ArrowRight} alt="arrow-right" />
  </RegisterCardWrapper>
);
