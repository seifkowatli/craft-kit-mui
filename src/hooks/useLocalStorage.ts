import { useState, useEffect } from 'react';

// Define the type for the initial value
type InitialValueType<T> = T | (() => T);

const getSavedValue = <T>(key: string, initialValue: InitialValueType<T> | null): T => {
  const savedValue = JSON.parse(localStorage.getItem(key) || 'null') as T;

  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();

  return initialValue as T;
};

export const useLocalStorage = <T>(key: string, initialValue: InitialValueType<T> | null = null) => {
  const [value, setValue] = useState<T>(() => getSavedValue<T>(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
};
