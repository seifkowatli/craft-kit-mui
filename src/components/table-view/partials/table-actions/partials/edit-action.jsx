import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Edit } from '@mui/icons-material';

import { useIntl } from 'react-intl';
import { useLocation, useNavigate } from 'react-router-dom';

const DeleteAction = ({ id, entityKey, apiKey }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { formatMessage: t } = useIntl();

  const handleEdit = () => navigate(`${pathname}/edit/${id}`);

  return (
    <Tooltip title={t({ id: 'edit' })}>
      <IconButton onClick={handleEdit}>
        <Edit />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteAction;
