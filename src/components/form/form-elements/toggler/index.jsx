import { forwardRef } from 'react';
import { Checkbox, FormControlLabel, Switch, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { PropTypes } from 'prop-types';
import { Styles } from './styles';

const Toggler = forwardRef(
  (
    {
      name,
      onChange,
      onBlur,
      value = false,
      formKey,
      type = 'checkbox',
      label,
      labelPlacement = 'end',
      variant,
      ...rest
    },
    ref
  ) => {
    return (
      <FormControlLabel
        ref={ref}
        control={
          type === 'checkbox' ? (
            <Checkbox
              value={value}
              defaultValue={value}
              defaultChecked={value}
              name={name}
              sx={Styles.CheckBoxStyle(rest['customStyles'])}
            />
          ) : (
            <Switch defaultChecked={value}  />
          )
        }
        label={
          <Typography >
            <FormattedMessage id={`${formKey}.${name}`} />
          </Typography>
        }
        labelPlacement={labelPlacement}
        onChange={onChange}
        inputRef={ref}
        value={value}
        defaultChecked={value}
        defaultValue={value}
        name={name}
        onBlur={onBlur}
        variant={variant}
        sx={{width : 1}}
        {...rest}
      ></FormControlLabel>
    );
  }
);

Toggler.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['checkbox', 'switch']).isRequired,
  defaultChecked: PropTypes.bool,
  handleOnChange: PropTypes.func,
  labelPlacement: PropTypes.oneOf(['start', 'end', 'bottom', 'top']),
};

export default Toggler;
