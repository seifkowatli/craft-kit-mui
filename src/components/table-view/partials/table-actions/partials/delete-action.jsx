import React, { useState } from 'react';
import {
  IconButton,
  Tooltip,
  CircularProgress,
  Menu,
  MenuItem,
} from '@mui/material';
import { Delete, Check, Close } from '@mui/icons-material';

import { FormattedMessage, useIntl } from 'react-intl';
import { useGenericMutation } from '~/hooks';
import { useNotifications } from '~/providers';

const styles = {
  menuItem: {
    display: 'flex',
    gap: 1,
    justifyContent: 'flex-start',
  },
};

const DeleteAction = ({ id, entityKey, apiKey, setTableRows, tableRows }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { formatMessage: t } = useIntl();
  const { notify } = useNotifications();
  const remove = useGenericMutation(apiKey, 'DELETE');
  const { mutate, isLoading, isSuccess } = remove(`/${id}`);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const confirm = () => {
    handleClose();
    mutate(
      {},
      {
        onSuccess: data => {
          setTableRows(tableRows.filter(row => row._id !== id));
          notify(
            'success',
            `${t({ id: `${entityKey}.singular` })} 
           ${t({ id: 'deletedSuccessfully' })}`
          );
        },
      }
    );
  };
  return (
    <>
      <Tooltip title={t({ id: 'delete' })}>
        <IconButton onClick={handleClick} disabled={isLoading}>
          {isLoading ? (
            <CircularProgress size={22} sx={{ color: 'gray' }} />
          ) : (
            <Delete />
          )}
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem sx={styles.menuItem} onClick={confirm}>
          <Check color="success" />
          <FormattedMessage id="confirm" />
        </MenuItem>
        <MenuItem sx={styles.menuItem} onClick={handleClose}>
          <Close color="error" />
          <FormattedMessage id="cancel" />
        </MenuItem>
      </Menu>
    </>
  );
};

export default DeleteAction;
