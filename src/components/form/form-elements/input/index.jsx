import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { FormattedMessage } from 'react-intl';
import { isEmpty } from '~/utils';

const Input = forwardRef(
  (
    {
      name,
      onChange,
      onBlur,
      value,
      formKey,
      type = 'text',
      variant = 'outlined',
      fieldState,
      showPersonalIcon = false,
      customLabel,
      helperText,
      ...rest
    },
    ref
  ) => {
    return (
      <TextField
        fullWidth
        value={value}
        error={fieldState.error}
        type={type}
        name={name}
        onBlur={onBlur}
        inputRef={ref}
        autoComplete="off"
        defaultValue={value}
        onChange={onChange}
        label={
          <FormattedMessage
            id={isEmpty(customLabel) ? `${formKey}.${name}` : customLabel}
          />
        }
        helperText={isEmpty(helperText) ? '' : <FormattedMessage id={`${formKey}.${helperText}`} />}
        variant={variant}
        {...rest}
      />
    );
  }
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  type: PropTypes.string,
  formKey: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

export default Input;
