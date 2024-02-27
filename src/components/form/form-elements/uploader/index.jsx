import { Paper, Stack, Typography } from '@mui/material';
import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FormattedMessage } from 'react-intl';
import { isEmpty } from '~/utils';
import { uploadAction } from './actions';
import { defaultAcceptedFileTypes } from './data';
import UploaderPreview from './partials/uploader-preview';
import { styles } from './styles';

// const uploadUrl = import.meta.env.VITE_UPLOAD_URL;



const Uploader = forwardRef(
  ({ name, onChange, formKey, entity, value, maxFiles = 1 , accept  = defaultAcceptedFileTypes ,...rest }, ref) => {
   
    const [progress , setProgress] = useState(0);
    const getInitialFiles = (value) => {
      if(isEmpty(value)) return [];
      return Array.isArray(value) ? value : [value];
    }

    const [Files, setFiles] = useState(getInitialFiles(value));
        
    const onDrop = useCallback(uploadAction(setProgress , setFiles , entity), []);
    const { getRootProps, getInputProps, isDragActive   } = useDropzone({
      accept, 
      onDrop,
      maxFiles,
    });


    useEffect(() => {
      if (!isEmpty(Files)) {
        onChange(Files);
      }
    }, [Files]);

    return (
      <Stack>
        <Typography component="label" sx={{ p: 1, pl: 0.5 }}>
          <FormattedMessage id={`${formKey}.${name}`} />
        </Typography>

        {Files.length === maxFiles && (
          <Paper sx={styles.dropZone} {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag 'n' drop some files here, or click to select files</p>
            )}
          </Paper>
        )}

        <UploaderPreview files={Files} setFiles={setFiles} />
      </Stack>
    );
  }
);

export default Uploader;
