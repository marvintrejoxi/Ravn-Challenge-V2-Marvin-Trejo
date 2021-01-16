import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

export const Container = styled.section`
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
`;

export const Wrapper = styled.main<{isMobile: boolean}>`
  display: flex;
  height: calc(100vh - 52px);
  overflow: hidden;

  .infinite-scroll-component__outerdiv {
    width: ${({isMobile}) => (isMobile ? '100%' : 'auto')};
  }
`;

export const Sidebar = styled(InfiniteScroll)<{isMobile: boolean}>`
  width: ${({isMobile}) => (isMobile ? '100%' : '350px')};
  box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.15);
`;

export const Content = styled.section<{isMobile: boolean}>`
  height: 100%;
  width: ${({isMobile}) => (isMobile ? '100%' : 'calc(100% - 350px)')};
  overflow-y: auto;
  padding: ${({isMobile}) => (isMobile ? '0 50px' : '0 100px')};
`;
