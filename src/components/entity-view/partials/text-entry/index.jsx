import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { CopyToClipboard } from '~/components';
import EntityEntryBase from '../base';
import { styles } from './styles';

const TextEntry = ({ entryKey, value, withCopy }) => {
  return (
    <EntityEntryBase>
      <Box sx={styles.wrapper}>
        <Typography sx={{ fontWeight: 'bold' }}>
          <FormattedMessage id={entryKey} /> :
        </Typography>
        <Typography>{value}</Typography>

        {withCopy && (
          <Box sx={styles.copy}>
            <CopyToClipboard value={value} />
          </Box>
        )}
      </Box>
    </EntityEntryBase>
  );
};

TextEntry.propTypes = {
  entryKey: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextEntry;
