export const styles = {
  FormControl: (width, formWrapperStyles) => ({
    flexBasis: {
      xs: '100%',
      md: width ? width : '49.2%',
    },
    minWidth: {
      xs: 300,
      md: '100%',
      lg: 400,
    },
    maxWidth: '100%',
    textAlign: 'left',
    my: 1,

    ...formWrapperStyles?.FormControl,
  }),


  FormWrapper: formWrapperStyles => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: 2,
    ...formWrapperStyles?.FormWrapper,
  }),
};
