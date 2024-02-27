import { MuiTelInput } from 'mui-tel-input';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const PhoneInput = forwardRef(
  (
    {
      name,
      onChange,
      onBlur,
      value,
      formKey,
      variant = 'outlined',
      ...rest
    },
    ref
  ) => {
    return (
      <MuiTelInput
        sx={{width : 1}}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        variant={variant}
        defaultCountry={"SY"}
        label={<FormattedMessage id={`${formKey}.${name}`} />}
        ref={ref}
        {...rest}
      />
    );
  }
);

PhoneInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  formKey: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

export default PhoneInput;
