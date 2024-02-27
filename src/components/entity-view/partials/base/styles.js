export const styles = {
  root: {
    width: 1,
    minHeight: 50,
    pt: 2,
    px: 1,
    borderRadius: 1,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '&:hover': {
      backgroundColor: theme => theme.palette.action.hover,
    },
  },
};
