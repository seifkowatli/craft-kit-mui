import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import EntityEntryBase from '../base';
import { styles } from './styles';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';

const LinkEntry = ({
  entryKey,
  value,
  entityLabel = null,
  isInternal = false,
}) => {
  const navigate = useNavigate();
  
  return (
    <EntityEntryBase>
      <Box sx={styles.wrapper}>
        <Typography sx={{ fontWeight: 'bold' }}>
          <FormattedMessage id={entryKey} /> :
        </Typography>
        <Typography>
          {isInternal ? (
            <Link onClick={() => navigate(value)}>{entityLabel}</Link>
          ) : (
            <Link target="_blank" href={value}>
              {value}
            </Link>
          )}
        </Typography>
      </Box>
    </EntityEntryBase>
  );
};

export default LinkEntry;
