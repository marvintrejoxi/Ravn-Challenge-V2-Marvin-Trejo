import styled from 'styled-components';

export const RegisterCardWrapper = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: var(--white);
  margin: 0;
  padding: 0 30px 0 0;
  cursor: pointer;
  outline: none;
  min-height: 69px;
`;

export const InformationContainer = styled.div`
  text-align: left;

  h1,
  h2 {
    letter-spacing: 0.0125em;
    margin: 0;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    color: var(--dark);
  }

  h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: var(--gray-light);
  }
`;
