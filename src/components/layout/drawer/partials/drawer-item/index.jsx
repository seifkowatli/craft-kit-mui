import {
  Icon,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { useLocation, useNavigate } from 'react-router-dom';
import { styles } from './styles';

const DrawerItem = ({ label, path, icon, level = 0 }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ListItem
      key={label}
      disablePadding
      sx={styles.root(path === location.pathname)}
    >
      <ListItemButton  sx={styles.button(level)} onClick={() => navigate(path)}>
        <ListItemIcon>
          <Icon>{icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={<FormattedMessage id={label} />} />
      </ListItemButton>
    </ListItem>
  );
};

//TODO add props types and default value for props

export default DrawerItem;
