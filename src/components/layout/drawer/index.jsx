import { Box, Drawer, Toolbar } from '@mui/material';
import { useCraftKitState } from '~/providers';
import { drawerRenderer } from './actions';
import { styles } from './styles';

const AppDrawer = ({ isSm, drawerOpen, toggleMenu }) => {
  const {craftKitState : {navigationData}} = useCraftKitState();

  return (
    <Drawer
      variant={isSm ? 'temporary' : 'permanent'}
      onClose={toggleMenu}
      open={drawerOpen}
      sx={styles.root}
    >
      <Toolbar />
      <Box sx={styles.wrapper}>{drawerRenderer(navigationData)}</Box>
    </Drawer>
  );
};

export default AppDrawer;
