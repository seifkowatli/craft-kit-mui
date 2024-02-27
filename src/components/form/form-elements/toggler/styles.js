export const Styles = {
  CheckBoxStyle: (customStyles = { CheckBoxStyle: {} }) => {
    return {
      color: '#939CB4',
      boxSizing: 'border-box',
      borderRadius: '3px',
      '&.Mui-checked': {
        color: '#5C6883',
      },
      ...customStyles.CheckBoxStyle,
    };
  },
};
