import React from 'react';

// custom
import {LoaderWrapper, LoaderTitle} from './styled';
import {Spinner} from 'components/Spinner';

interface ILoader {
  title?: string;
}

export const Loader: React.FC<ILoader> = ({title = 'Loading'}) => (
  <LoaderWrapper>
    <Spinner />

    <LoaderTitle>{title}</LoaderTitle>
  </LoaderWrapper>
);
