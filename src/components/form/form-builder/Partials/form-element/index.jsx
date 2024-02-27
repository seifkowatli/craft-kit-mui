import { forwardRef } from 'react';
import * as Elements from '../../../form-elements';

const FormElement = forwardRef(({ type, ...props }, ref) => {
  switch (type) {
    case 'password':
      return <Elements.Password ref={ref} {...props} />;
    case 'toggler':
    case 'checkbox':
      return <Elements.Toggler type={type} ref={ref} {...props} />;
    case 'dropdown':
      return <Elements.BasicSelect ref={ref} {...props} />;
    case 'dropdown-multiple':
      return <Elements.DropdownMultiple ref={ref} {...props} />;
    case 'rich-text':
      return <Elements.RichText ref={ref} {...props} />;
    case 'uploader':
      return <Elements.Uploader ref={ref} {...props} />;
    case 'phone':
      return <Elements.Phone ref={ref} {...props} />;
    case 'date-picker':
      return <Elements.DatePicker ref={ref} {...props} />;
    default:
      return <Elements.BasicInput  type={type} ref={ref} {...props} />;
  }
});

export default FormElement;
