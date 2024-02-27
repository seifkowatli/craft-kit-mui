import React from 'react';
import { styles } from './styles';

const StatusChip = ({ status }) => {
  return <Chip sx={styles.chip(status)}>{status}</Chip>;
};

export default StatusChip;
