import React from 'react';
import { Box, Divider } from '@mui/material';
import { styles } from './styles';

const EntityEntryBase = ({ children }) => {
  return (
    <Box sx={styles.root}>
      {children} <Divider />
    </Box>
  );
};

export default EntityEntryBase;
