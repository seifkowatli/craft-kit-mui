export const drawerWidth = 270;

export const styles = {
  root: {
    width: drawerWidth,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: {
      width: drawerWidth,
      boxSizing: 'border-box',
    },
  },
  wrapper: {
    overflow: 'auto',
  },
};
