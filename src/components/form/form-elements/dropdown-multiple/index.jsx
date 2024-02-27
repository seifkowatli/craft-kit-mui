import { Autocomplete, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { FormattedMessage } from 'react-intl';
import { isEmpty } from '~/utils';

const DropdownMultiple = forwardRef(
  (
    {
      data,
      name,
      onBlur,
      value,
      onChange,
      formKey,
      helperText,
      variant = 'outlined',
    },
    ref
  ) => {
    return (
      <Autocomplete
        multiple
        id="tags-standard"
        value={value}
        defaultValue={value}
        onChange={(e, data) => onChange(data)}
        options={data}
        onBlur={onBlur}
        ref={ref}
        filterSelectedOptions
        disableCloseOnSelect
        autoComplete="off"
        isOptionEqualToValue={(selectedOptions , entry) => selectedOptions.value === entry.value}
        getOptionLabel={option => option.label}
        renderInput={params => (
          <TextField
            {...params}
            variant={variant}
            label={<FormattedMessage id={`${formKey}.${name}`} />}
            helperText={isEmpty(helperText) ? '' : <FormattedMessage id={`${formKey}.${helperText}`} />}
            autoComplete="off"
          />
        )}
      />
    );
  }
);

DropdownMultiple.prototype = {
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

export default DropdownMultiple;
