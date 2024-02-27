import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { FormattedMessage } from 'react-intl';

const ConfirmationDialog = ({
  open,
  handleConfirmation,
  confirmationMessage = 'DefaultConfirmationMessage',
}) => {
  return (
    <Dialog open={open} onClose={() => handleConfirmation(false)}>
      <DialogTitle id="confirmation-dialog-title">
        <FormattedMessage id={confirmationMessage} />
      </DialogTitle>
      <DialogActions>
        <Button onClick={() => handleConfirmation(true)}>
          <FormattedMessage id="yes" />
        </Button>
        <Button onClick={() => handleConfirmation(false)} autoFocus>
          <FormattedMessage id="cancel" />
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
