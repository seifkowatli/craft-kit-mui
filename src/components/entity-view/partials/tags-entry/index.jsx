import { Chip, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import EntityEntryBase from '../base';
import { styles } from './styles';

const TagsEntry = ({ entryKey, value: tagsArray }) => {
  return (
    <EntityEntryBase>
      <Box sx={styles.wrapper}>
        <Stack direction="row">
          <Typography fontWeight="bold">
            <FormattedMessage id={entryKey} />
          </Typography>
          <Typography ml={0.5} fontWeight="bold"> : </Typography>
        </Stack>

        <Stack direction="row" width={1} gap={0.4} flexWrap="wrap">
          {tagsArray.map(tagValue => (
            <Chip label={tagValue} />
          ))}
        </Stack>
      </Box>
    </EntityEntryBase>
  );
};

export default TagsEntry;
