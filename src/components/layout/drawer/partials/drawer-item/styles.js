export const styles = {
  root: (active) => [
    { px: 0 },
    active && {
      backgroundColor: theme => theme.palette.action.selected,
    },
  ],

  button : (level) => ({
    px : 2 + level
  })
};
