export const getEditPath = pathname => {
  const path = pathname.split('/');
  path.splice(path.lastIndexOf('/'), 0, 'edit');
  return path.join('/');
};


export const getFormFieldsNames = (fields) => fields.map(field => field.name);
