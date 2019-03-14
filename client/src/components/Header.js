import React from 'react';
import { Box, H1 } from '@deity/falcon-ui';

export const Header = ({ children, ...props }) => (
  <Box p="sm" css={{ background: 'cyan' }} {...props}>
    <H1> This is custom header </H1>
    {children}
  </Box>
);
