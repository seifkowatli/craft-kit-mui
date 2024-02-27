import React from 'react';
import { Paper, Typography } from '@mui/material';
import { styles } from './styles';
import { FormattedMessage } from 'react-intl';

const FormWrapper = ({ children ,customStyles ={} , titleKey , typeKey }) => {
  return (
    <Paper sx={{ ...styles.root , ...customStyles?.root}}>
      <Typography sx={styles.title} variant='h5'>
        <FormattedMessage id={typeKey} /> {" "}
        <FormattedMessage id={titleKey} />
      </Typography>
      {children}
    </Paper>
  );
};

export default FormWrapper;
