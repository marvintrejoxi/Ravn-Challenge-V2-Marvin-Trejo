import React from 'react';

// custom
import {
  GeneralInformationWrapper,
  GeneralInformationTitle,
  InformationRow,
  Information,
} from './styled';

// types
import {Person} from 'types';

type GeneralInformacionProps = {
  person: Person;
};

export const GeneralInformation: React.FC<GeneralInformacionProps> = ({
  person: {
    eyeColor,
    hairColor,
    skinColor,
    birthYear,
    vehicleConnection: {vehicles},
  },
}) => (
  <GeneralInformationWrapper>
    <GeneralInformationTitle>General Information</GeneralInformationTitle>

    <InformationRow>
      <Information>Eye Color</Information>
      <Information isDark>{eyeColor}</Information>
    </InformationRow>

    <InformationRow>
      <Information>Hair Color</Information>
      <Information isDark>{hairColor}</Information>
    </InformationRow>

    <InformationRow>
      <Information>Skin Color</Information>
      <Information isDark>{skinColor}</Information>
    </InformationRow>

    <InformationRow>
      <Information>Birth Year</Information>
      <Information isDark>{birthYear}</Information>
    </InformationRow>

    {vehicles.length > 0 && (
      <>
        <GeneralInformationTitle>Vehicles</GeneralInformationTitle>

        {vehicles.map((vehicle, index) => (
          <InformationRow key={index}>
            <Information>{vehicle.name}</Information>
          </InformationRow>
        ))}
      </>
    )}
  </GeneralInformationWrapper>
);
