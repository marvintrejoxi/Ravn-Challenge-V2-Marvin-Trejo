import styled, {keyframes} from 'styled-components';

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.img`
  width: 24px;
  height: 24px;
  animation: ${spinAnimation} 0.6s linear infinite;
`;
