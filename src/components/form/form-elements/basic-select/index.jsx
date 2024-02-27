import { Autocomplete, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { isEmpty } from '~/utils';

const BasicSelect = forwardRef(
  (
    {
      data,
      value,
      name,
      onBlur,
      onChange,
      formKey,
      helperText,
      variant = 'outlined',
      localizedOptions = false,
      ...rest
    },
    ref
  ) => {
    const { formatMessage: t } = useIntl();

    return (
      <Autocomplete
        variant={variant}
        value={value}
        defaultValue={value}
        id="country-select-demo"
        onBlur={onBlur}
        onChange={(e, data) => onChange(data)}
        ref={ref}
        options={data}
        autoHighlight
        getOptionLabel={option =>
          localizedOptions ? t({ id: option.label }) : option.label
        }
        renderInput={params => (
          <TextField
            variant={variant}
            {...params}
            label={<FormattedMessage id={`${formKey}.${name}`} />}
            helperText={
              isEmpty(helperText) ? (
                ''
              ) : (
                <FormattedMessage id={`${formKey}.${helperText}`} />
              )
            }
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        )}
        {...rest}
      />
    );
  }
);

BasicSelect.prototype = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.string,
    })
  ),
  value: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  formKey: PropTypes.string.isRequired,
  variant: PropTypes.string,
};
export default BasicSelect;
