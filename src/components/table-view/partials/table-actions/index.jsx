import { Box } from '@mui/material';
import { DeleteAction, EditAction, ViewAction , NewTabPreviewAction } from './partials';
import { styles } from './styles';
import { isEmpty } from '~/utils';

const TableActions = ({
  withEdit = true,
  withDelete = true,
  withView = true,
  withNewTabPreview = false,
  editPermission = true,
  deletePermission = true,
  children = null,
  ...rest
}) => {
  return (
    <Box sx={styles.root}>
      {withView && <ViewAction {...rest} />}
      {withNewTabPreview && <NewTabPreviewAction {...rest} />}
      {(withEdit && editPermission) &&  <EditAction {...rest} />}
      {(withDelete && deletePermission) && <DeleteAction {...rest} />}
      {!isEmpty(children) ?  children(rest): null}
    </Box>
  );
};

export default TableActions;
