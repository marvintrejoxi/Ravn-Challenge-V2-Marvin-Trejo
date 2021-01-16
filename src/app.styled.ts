import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

export const Container = styled.section`
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
`;

export const Wrapper = styled.main`
  display: flex;
  height: calc(100vh - 52px);
  overflow: hidden;
`;

export const Sidebar = styled(InfiniteScroll)`
  width: 350px;
  box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.15);
`;

export const Content = styled.section`
  height: 100%;
  width: calc(100% - 350px);
  overflow-y: auto;
  padding: 0 100px;
`;
