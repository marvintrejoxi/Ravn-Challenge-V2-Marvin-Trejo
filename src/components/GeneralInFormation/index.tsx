// custom
import {
  GeneralInformationWrapper,
  GeneralInformationTitle,
  InformationRow,
  Information,
} from './styled';

export const GeneralInformation: React.FC = () => (
  <GeneralInformationWrapper>
    <GeneralInformationTitle>General Information</GeneralInformationTitle>

    <InformationRow>
      <Information>Eye Color</Information>
      <Information isDark>Blue</Information>
    </InformationRow>

    <GeneralInformationTitle>Vehicles</GeneralInformationTitle>

    <InformationRow>
      <Information>Snowspeeder</Information>
    </InformationRow>
  </GeneralInformationWrapper>
);
