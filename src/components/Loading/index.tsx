import * as React from 'react';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';

const blink = keyframes`
  from { scale: 0.5; }
  to { scale: 0.6; }
  
  
`;

const LoadingBox = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  height: '85vh',
  alignItems: 'center',
  animation: `${blink} 1s  infinite`
});
const index = () => {
  return (
    <LoadingBox>
      <img src="/static/images/logo/logo.png" />
    </LoadingBox>
  );
};

export default index;
