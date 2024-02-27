import { isEmpty } from '~/utils';

//TODO Add documentation for each function
export const getValue = (object, attribute) => {
  const attributes = attribute.split('.');
  return attributes.reduce((acc, key) => acc[key], object);
};

//TODO consider moving this to Utils
export const dropdownDataFormatter = (valueAttribute, labelAttribute) => data =>
  data.map(entry => ({
    value: getValue(entry, valueAttribute),
    label: getValue(entry, labelAttribute),
  }));




//TODO consider moving this to Utils
export const dropdownEntryFormatter = (valueAttribute, labelAttribute, entry) =>
  isEmpty(entry)
    ? undefined
    : {
        value: entry[valueAttribute],
        label: entry[labelAttribute],
      };

export const enumToDropDownData =
  (keyStringFormatter = null) =>
  data =>
    Object.keys(data).map(enumKey => ({
      value: data[enumKey],
      label: keyStringFormatter ? keyStringFormatter(enumKey) : enumKey,
    }));

export const  stringArrayToDropdownData = (data , formatter = null) => data.map(value => ({
  value, 
  label : formatter ? formatter(value) : value,
}))


export const enumToDropdownEntry  = (keyStringFormatter = null) => data =>({
  value: data,
  label: keyStringFormatter ? keyStringFormatter(data) : data,
});

export const predefinedToDropDownData =
  (asReference = false) =>
  (data, lang) =>
    data.map(entry => ({
      value: asReference ? entry._id : entry[`title_${lang}`],
      label: entry[`title_${lang}`],
    }));

//TODO consider moving this to Utils
export const extractDropdownValueArray = (objectArray, key = 'value') =>
  isEmpty(objectArray) ? null : objectArray.map(entry => entry[key]);

//TODO consider moving this to Utils
export const extractDropdownValue = (object, key = 'value') =>
  isEmpty(object) ? null : object[key];
