import { ErrorMessage } from '@hookform/error-message';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { useController  } from 'react-hook-form';
import DataWrapper from '~/components/data-wrapper';
import { FormElement } from '../../../';

const DataFormElement = forwardRef(({ fetchProps,  dataFormatter, ...rest }, ref) => {
  return (
    <DataWrapper {...fetchProps} dataFormatter={dataFormatter}>
      {data => <FormElement {...rest} data={data} ref={ref} />}
    </DataWrapper>
  );
});

const NormalFormControl = ({
  control,
  field,
  errors,
  ...rest
}) => {
  const {
    field: { onChange,onBlur, value, ref },
    fieldState,
  } = useController({
    name: field.name,
    control,
  });

  const hookFormProps = {
    onChange,
    onBlur,
    ref,
    value,
    fieldState
  };

  return (
    <>
      {/* //FIXME restructure the following code in a better way there should be 
        a middle layer that handle the data fetching  
      
      */}
      {field?.withFetch ? (
        <DataFormElement
          {...field}
          {...hookFormProps}
          {...rest}
        />
      ) : (
        <FormElement
          {...field}
          {...hookFormProps}
          {...rest}
        />
      )}

      <Typography variant="caption" sx={{ color: 'error.main' }}>
        <ErrorMessage errors={errors} name={field.name} />
      </Typography>
    </>
  );
};

NormalFormControl.propTypes = {
  control: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired,
};

export default NormalFormControl;
