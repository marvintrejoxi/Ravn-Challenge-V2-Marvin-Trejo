import React from 'react';

// custom
import SpinnerImage from 'assets/icons/spinner.png';
import {SpinnerWrapper} from './styled';

export const Spinner = () => (
  <SpinnerWrapper src={SpinnerImage} alt="loading..." />
);
