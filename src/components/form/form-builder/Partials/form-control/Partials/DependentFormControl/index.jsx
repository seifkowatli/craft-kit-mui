import { useEffect, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { NormalFormControl } from '../';
import PropTypes from 'prop-types';

const DependentFormControl = ({ control, field, ...rest }) => {
  const [dependencyProps, setDependencyProps] = useState({});
  const fieldsValues = useWatch({
    control,
    name: field.dependOn,
  });

  useEffect(() => {
    setDependencyProps(field.dependencyAction(fieldsValues));
  }, [fieldsValues]);

  return (
    <NormalFormControl
      field={field}
      control={control}
      {...rest}
      {...dependencyProps}
    />
  );
};

DependentFormControl.propTypes = {
  control: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired,
};

export default DependentFormControl;
