import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Stack, Typography, useTheme } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { styles } from './styles';

const RichText = forwardRef(
  ({ name, onChange, onBlur, value, formKey, fieldState, ...rest }, ref) => {
    const { palette } = useTheme();
    return (
      <Stack sx={styles.root}>
        <Typography component="label" sx={styles.editTitle}>
          <FormattedMessage id={`${formKey}.${name}`} />
        </Typography>
        <CKEditor
          editor={ClassicEditor}
          onBlur={onBlur}
          data={value}
          onChange={(event, editor) => onChange(editor.getData())}
          {...rest}
        />
      </Stack>
    );
  }
);

RichText.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  type: PropTypes.string,
  formKey: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

export default RichText;
