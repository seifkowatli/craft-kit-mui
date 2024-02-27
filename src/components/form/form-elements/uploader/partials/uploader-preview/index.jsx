import { Box, ImageList, Paper, Stack } from '@mui/material';
import React, { useState } from 'react';
import UploadEntry from '../upload-entry';

const UploaderPreview = ({ files, setFiles, ...props }) => {
    console.log('the files are ' , files)
  return (
    <Paper>
      <Stack direction="row" gap={2} p={2}>
        {files.map(file => (
          <UploadEntry setFiles={setFiles} {...file} />
        ))}
      </Stack>
    </Paper>
  );
};

export default UploaderPreview;
