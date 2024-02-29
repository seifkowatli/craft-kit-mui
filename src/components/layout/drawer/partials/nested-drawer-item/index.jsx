import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Icon,
} from '@mui/material';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

const NestDrawerItem = ({ label, icon, children }) => {
  const [open, setOpen] = useState(false);

  const toggleListItem = () => setOpen(!open);

  return (
    <>
      <ListItemButton onClick={toggleListItem}>
        <ListItemIcon>
          <Icon>{icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={<FormattedMessage id={label} />} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </>
  );
};

export default NestDrawerItem;
