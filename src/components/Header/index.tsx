import React from 'react';
import ArrowLeft from 'assets/icons/arrow-left.svg';

// custom
import {HeaderWrapper, HeaderTitle, BackButton} from './styled';

type HeaderProps = {
  isMobile: boolean;
  isShowingMobileContent: boolean;
  mobileTitle: string;
  onMobileBack: () => void;
};

export const Header: React.FC<HeaderProps> = ({
  isMobile,
  isShowingMobileContent,
  mobileTitle,
  onMobileBack,
}) => (
  <HeaderWrapper>
    {isMobile && isShowingMobileContent && (
      <BackButton onClick={() => onMobileBack()}>
        <img src={ArrowLeft} alt="arrow-left" />
      </BackButton>
    )}

    <HeaderTitle isShowingMobileContent={isShowingMobileContent}>
      {isMobile && isShowingMobileContent
        ? mobileTitle
        : 'Ravn Star Wars Registry'}
    </HeaderTitle>
  </HeaderWrapper>
);
