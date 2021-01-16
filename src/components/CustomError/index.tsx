import React from 'react';

// custom
import {ErrorWrapper} from './styled';

interface ICustomError {
  title?: string;
}

export const CustomError: React.FC<ICustomError> = ({
  title = 'Failed to Load Data',
}) => <ErrorWrapper>{title}</ErrorWrapper>;
