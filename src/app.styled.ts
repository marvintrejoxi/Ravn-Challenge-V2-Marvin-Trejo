import styled from 'styled-components';

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

export const Sidebar = styled.aside`
  height: 100%;
  width: 350px;
  overflow-y: auto;
  box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.15);
`;

export const Content = styled.section`
  height: 100%;
  width: calc(100% - 350px);
  overflow-y: auto;
`;
