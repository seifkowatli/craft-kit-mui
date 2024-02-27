import React, { forwardRef } from 'react';
import {
  DatePicker as MuiDatePicker,
  LocalizationProvider,
} from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FormattedMessage } from 'react-intl';

const DatePicker = forwardRef(
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
      ...rest
    },
    ref
  ) => {
    return (
      <LocalizationProvider  dateAdapter={AdapterDayjs}>
        <MuiDatePicker
          defaultValue={dayjs(value)}
          value={dayjs(value)}
          sx={{ width: 1 }}
          onChange={onChange}
          ref={ref}
          label={<FormattedMessage id={`${formKey}.${name}`} />}
          {...rest}
        />
      </LocalizationProvider>
    );
  }
);

export default DatePicker;
