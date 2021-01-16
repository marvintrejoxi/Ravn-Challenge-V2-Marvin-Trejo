import styled from 'styled-components';

export const GeneralInformationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const GeneralInformationTitle = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  color: var(--dark);
  margin: 32px 0 7px;
`;

export const InformationRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  min-height: 49px;
  width: 100%;
`;

export const Information = styled.span<{isDark?: boolean}>`
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.0125em;
  color: var(--${({isDark}) => (isDark ? 'dark' : 'gray-light')});
`;
