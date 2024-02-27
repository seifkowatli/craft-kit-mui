import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import {  Visibility } from '@mui/icons-material';
import { useIntl } from 'react-intl';
import { useLocation, useNavigate } from 'react-router-dom';

const DeleteAction = ({ id, entityKey, apiKey }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { formatMessage: t  } = useIntl();

  const handleShow = () => navigate(`${pathname}/${id}`);

  return (
    <Tooltip title={t({ id: 'show' })}>
      <IconButton onClick={handleShow}>
        <Visibility />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteAction;
