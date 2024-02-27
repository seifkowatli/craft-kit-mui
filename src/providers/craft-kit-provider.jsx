import { createContext, useContext, useState } from 'react';

export const CRAFT_KIT_SHARED_STATE = {
  localeMessages: {},
  langs: {},
  currentLang: '',
  storageKeys: {},
  currentTheme : '',
  defaultHost : '',
  roles : [],
};

// initializing context
export const CraftKitContext = createContext(CRAFT_KIT_SHARED_STATE);

// setting a helper function to use context
export const useCraftKitState = () => useContext(CraftKitContext);


export function CraftKitProvider({ children }) {
  const [craftKitState, setCraftKitState] = useState(CRAFT_KIT_SHARED_STATE);

  return (
    <CraftKitContext.Provider value={{  craftKitState ,  setCraftKitState }} >
      {children}
    </CraftKitContext.Provider>
  );
}
