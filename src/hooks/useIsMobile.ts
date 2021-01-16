import {useEffect, useState} from 'react';

export const useIsMobile = (resolution: number = 768) => {
  const checkIfMobileWindowWidth = () => window.innerWidth < resolution;
  const [isMobileView, setIsMobileView] = useState(checkIfMobileWindowWidth());

  const checkResize = () => {
    if (checkIfMobileWindowWidth() !== isMobileView) {
      setIsMobileView(checkIfMobileWindowWidth());
    }
  };

  useEffect(() => {
    window.addEventListener('resize', checkResize);

    checkResize();

    return () => window.removeEventListener('resize', checkResize);
  });

  return isMobileView;
};
