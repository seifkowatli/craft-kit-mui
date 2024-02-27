import { createContext, useContext, useState } from 'react';

export const FORM_SHARED_STATE = {
  uploading: false,
};

// initializing context
export const FormSharedContext = createContext(FORM_SHARED_STATE);

// setting a helper function to use context
export const useFormSharedState = () => useContext(FormSharedContext);


export function FormProvider({ children }) {
  const [formSharedState, setFormSharedState] = useState(FORM_SHARED_STATE);

  return (
    <FormSharedContext.Provider value={{ formSharedState, setFormSharedState }} >
      {children}
    </FormSharedContext.Provider>
  );
}
