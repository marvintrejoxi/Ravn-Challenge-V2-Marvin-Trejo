import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  background-color: var(--black);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  padding-left: 33px;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.0125em;
  color: var(--gray);
`;
