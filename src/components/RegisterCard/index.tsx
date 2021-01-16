import React from 'react';
import {Fade} from 'react-awesome-reveal';

// custom
import {RegisterCardWrapper, InformationContainer} from './styled';
import ArrowRight from 'assets/icons/arrow-right.svg';

// types
import {Person, ISpecies, IHomeworld} from 'types';

type RegisteredCardProps = {
  person: Person;
  isSelected: boolean;
  onClick: (person: Person) => void;
};

const parseSubtitle = (species?: ISpecies, homeworld?: IHomeworld) => {
  if (species?.name && homeworld?.name) {
    return `${species.name} from ${homeworld.name}`;
  }

  if (species?.name && !homeworld?.name) {
    return species.name;
  }

  if (!species?.name && homeworld?.name) {
    return `From ${homeworld.name}`;
  }
};

export const RegisterCard: React.FC<RegisteredCardProps> = ({
  person,
  person: {name, homeworld, species},
  isSelected,
  onClick,
}) => (
  <Fade direction="left" triggerOnce>
    <RegisterCardWrapper
      isSelected={isSelected}
      onClick={() => onClick(person)}
    >
      <InformationContainer>
        <h1>{name}</h1>

        <h2>{parseSubtitle(species, homeworld)}</h2>
      </InformationContainer>

      <img src={ArrowRight} alt="arrow-right" />
    </RegisterCardWrapper>
  </Fade>
);
