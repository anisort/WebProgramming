import React from 'react';
import styled from 'styled-components';

const LoaderStyle = styled.div`
  width:50px;
  height:50px;
  --c:radial-gradient(farthest-side,#A892EE 100%,#0000);
  background: 
    var(--c) 50% 0,
    var(--c) 50% 100%,
    var(--c) 100% 50%,
    var(--c) 0    50%;
  background-size:12px 12px;
  background-repeat:no-repeat;
  animation:s7 1s infinite;
  @keyframes s7 {to{transform: rotate(.5turn)}}

`;

const CenteredLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function Loader() {
  return (
    <CenteredLoaderContainer>
      <LoaderStyle />
    </CenteredLoaderContainer>
  );
};
