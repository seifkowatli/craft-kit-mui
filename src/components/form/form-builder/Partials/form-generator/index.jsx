import { PropTypes } from 'prop-types';
import { Box } from '@mui/material';
import { FormControl } from '../';
import { styles } from './styles';
import { isEmpty } from '~/utils';

const FormGenerator = ({ control, fields, formWrapperStyles, ...rest }) => {
  return (
    <Box sx={styles.FormWrapper(formWrapperStyles)}>
      {fields.map(field =>
        isEmpty(field.show) ? (
          <Box
            key={`form-item-${field.name}`}
            sx={styles.FormControl(field.width, formWrapperStyles)}
          >
            <FormControl
              field={field}
              control={control}
              withDependency={!isEmpty(field.dependOn)}
              {...rest}
            />
          </Box>
        ) : null
      )}
    </Box>
  );
};

FormGenerator.propTypes = {
  control: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
  formKey: PropTypes.string.isRequired,
};

export default FormGenerator;
