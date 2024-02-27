import { TableActions } from './partials';

export const getTableActions = (entityActionsProps) => ({
  field: 'actions',
  headerName: 'Action',
  width: 200,
  renderCell: ({ ...props }) => (
    <TableActions {...props} {...entityActionsProps} />
  ),
});
