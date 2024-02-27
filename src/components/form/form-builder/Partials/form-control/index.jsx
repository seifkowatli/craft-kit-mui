import React from 'react';
import { NormalFormControl, DependentFormControl } from './Partials';

const FormControl = ({ withDependency, ...rest }) => {
  if (withDependency) return <DependentFormControl {...rest} />;
  else return <NormalFormControl {...rest} />;
};

export default FormControl;
