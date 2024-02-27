export const styles = {
  root: {
    '& *': {
      color: theme => `${theme.palette.text.primary} !important`,
      backgroundColor: theme => `${theme.palette.background.paper} !important`,
      backgroundImage:
        'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)) !important',
      path: theme =>
        theme.palette.mode === 'dark'
          ? { fill: `${theme.palette.text.primary} !important` }
          : {},
    },
  },
  editTitle: {
    p: 1,
    pl: 0.5,
  },
};
