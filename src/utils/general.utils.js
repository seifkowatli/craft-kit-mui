// compare two object that have the same structure and check if they are equals
export const compareObjects = (firstVal, secondVal) =>
  JSON.stringify(firstVal) === JSON.stringify(secondVal);

//check if the value is empty
export const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0) ||
  (typeof value === Number && isNaN(value)) ||
  (typeof value === Boolean && !value);


/**
 * this function change the format of enum key for example
 * input : HELLO_WORLD
 * output : Hello World
 */ 
export const formatEnumKey = key =>
  key
    .split('_')
    .join(' ')
    .toLowerCase()
    .replace(/\b\w/g, l => l.toUpperCase());
