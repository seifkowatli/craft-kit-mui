import React from 'react';
import { IconButton, Link, Tooltip } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';
import { useIntl } from 'react-intl';
import { useLocation, useNavigate } from 'react-router-dom';

const DeleteAction = ({ id, entityKey, apiKey }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { formatMessage: t } = useIntl();

  return (
    <Link target='_blank' href={`${pathname}/${id}`}>
      <Tooltip title={t({ id: 'preview' })}>
        <IconButton>
          <OpenInNew />
        </IconButton>
      </Tooltip>
    </Link>
  );
};

export default DeleteAction;
