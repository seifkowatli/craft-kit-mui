import { LoadingButton } from '@mui/lab';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

const ActionButton = ({
  label,
  variant,
  loading,
  icon,
  type,
  onClick,
  ...rest
})  => {
  return (
    <LoadingButton
      variant={variant}
      color={type === 'button' ? 'error' : 'secondary'}
      type={type}
      disabled={loading}
      onClick={onClick}
      
      {...rest}
    >
      <FormattedMessage id={label} />
    </LoadingButton>
  );
}



ActionButton.defaultProps = {
  icon : null,
  label: 'cancel',
  variant: 'outlined',
  type: 'button',
};

ActionButton.propTypes = { 
  icon : PropTypes.string, 
  label : PropTypes.string,
  variant : PropTypes.string,
  type : PropTypes.string,
  onClick : PropTypes.func,
}

export default ActionButton;
