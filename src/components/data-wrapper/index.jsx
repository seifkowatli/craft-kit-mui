import React from 'react';
import { useFetch } from '~/hooks';

const DataWrapper = ({
  children,
  resourceKey,
  urlParams,
  queryParams,
  dataFormatter = null,
  fetchConfig = [],
}) => {
  const fetchAction = useFetch(resourceKey, ...fetchConfig);
  const { isLoading, data, isError , error } = fetchAction(urlParams, queryParams);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return dataFormatter
    ? children(dataFormatter(data))
    : children(data);
};

export default DataWrapper;
