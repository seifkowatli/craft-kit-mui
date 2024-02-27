import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { LinearProgress, Box, Typography, Button, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { getTableActions } from './data';
import { FormattedMessage } from 'react-intl';
import { useLocation, useNavigate } from 'react-router-dom';
import { usePermissions } from '~/hooks/usePermissions';

const TableView = ({
  rows,
  columns,
  entityActionsProps,
  bulkActionsProps,
  entityKey,
  apiKey,
  withAddAction = true,
  addPath = '/add',
  headerFilters = [],
  permissions = {
    add: null,
    edit: null,
    delete: null,
  },
  withActions = true,
  ...rest
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [tableRows, setTableRows] = useState(rows);
  const { userHavePermission } = usePermissions();
  const editPermission = userHavePermission(permissions.edit);
  const deletePermission = userHavePermission(permissions.delete);
  const handleAdd = () => {
    const path = addPath === '/add' ? `${pathname}/add` : addPath;
    navigate(path);
  };

  useEffect(() => {
    setTableRows(rows);
  }, [rows]);

  const tableColumns = [
    ...columns,
    withActions &&
      getTableActions({
        ...entityActionsProps,
        editPermission,
        deletePermission,
        entityKey,
        apiKey,
        setTableRows,
        tableRows,
      }), //FIXME this is gonna add extra empty column
  ];

  return (
    <Box sx={styles.root}>
      <Box sx={styles.header}>
        <Typography my={1} variant="h4">
          <FormattedMessage id={`${entityKey}.tableHeader`} />
        </Typography>
        <Stack direction="row" gap={2}>
        {headerFilters}
          {userHavePermission(permissions.add)
            ? withAddAction && (
                <Button onClick={handleAdd} variant="outlined">
                  <FormattedMessage id="add" />{' '}
                  <FormattedMessage id={entityKey} />
                </Button>
              )
            : null}
      
        </Stack>
      </Box>

      <DataGrid
        sx={styles.table}
        rows={tableRows}
        columns={tableColumns}
        getRowId={row => row._id}
        components={{
          Toolbar: GridToolbar,
          LoadingOverlay: LinearProgress,
        }}
        checkboxSelection={false}
        {...rest}
      />
    </Box>
  );
};

TableView.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  entityKey: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
  withActions: PropTypes.bool,
  loading: PropTypes.bool,
  entityActionsProps: PropTypes.objectOf(PropTypes.object),
  bulkActionsProps: PropTypes.objectOf(PropTypes.object),
};

export default TableView;
