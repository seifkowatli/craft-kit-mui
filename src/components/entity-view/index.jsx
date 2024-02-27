import { Box, Typography, Link, Stack, Paper } from '@mui/material';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { useLocation, useNavigate } from 'react-router-dom';
import { entityViewRenderer } from './actions';
import { styles } from './styles';
import { Edit } from '@mui/icons-material';
import { isEmpty } from '~/utils';
import { getEditPath } from '~/helpers';
import { usePermissions } from '~/hooks/usePermissions';

//TODO make this responsive
const EntityView = ({
  entityKey,
  entity,
  editPath,
  actions,
  withEdit = true,
  editPermission = null,
  withHeader = true,
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const {userHavePermission} = usePermissions();

  const defaultEditPath = !isEmpty(editPath) ? editPath : getEditPath(pathname);

  return (
    <Stack>
      <Box sx={styles.heading}>
        {withHeader && (
          <Typography variant="h4">
            <FormattedMessage id={entityKey} />
          </Typography>
        )}
        <Stack direction="row" gap={2}>
          {(withEdit && userHavePermission(editPermission)) && (
            <Link
              underline="hover"
              variant="body2"
              component="button"
              sx={styles.link}
              onClick={() => navigate(defaultEditPath)}
            >
              <FormattedMessage id={'edit'} />{' '}
              <FormattedMessage id={entityKey} />
              <Edit sx={styles.editIcon} />
            </Link>
          )}
          {actions}
        </Stack>
      </Box>

      <Paper gap={1} sx={styles.wrapper}>
        {entityViewRenderer(entityKey, entity)}
      </Paper>
    </Stack>
  );
};

EntityView.propTypes = {
  entityKey: PropTypes.string.isRequired,
};

export default EntityView;

export * from './partials';
