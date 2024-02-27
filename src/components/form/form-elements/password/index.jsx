import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import {
  OutlinedInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import { PropTypes } from 'prop-types';
import { forwardRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';

const Password = forwardRef(
  (
    { name, onChange, onBlur, value, formKey, variant = 'outlined', ...rest },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword(!showPassword);

    return (
      <FormControl sx={{ width: 1 }} variant={variant}>
        <InputLabel htmlFor={`${formKey}.${name}`}>
          <FormattedMessage id={`${formKey}.${name}`} />
        </InputLabel>
        <OutlinedInput
          {...rest}
          id={`${formKey}.${name}`}
          type={showPassword ? 'text' : 'password'}
          name={name}
          onChange={onChange}
          value={value}
          label={<FormattedMessage id={`${formKey}.${name}`} />}
          inputRef={ref}
          onBlur={onBlur}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={toggleShowPassword}
                onMouseDown={toggleShowPassword}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <VisibilityOutlinedIcon variant={'outlined'} />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    );
  }
);

Password.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  value: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

export default Password;
