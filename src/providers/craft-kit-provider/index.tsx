import { createContext, useCallback, useContext, useState } from "react";
import { CraftKitContextProps, CraftKitProviderProps, CraftKitState, Preferences } from "./interfaces";
import { useLocalStorage } from "~/hooks";
import { CRAFT_KIT_SHARED_STATE } from "./data";


// initializing context
export const CraftKitContext = createContext<CraftKitContextProps | undefined>(undefined);

// setting a helper function to use context
export const useCraftKitState = () => {
  const context = useContext(CraftKitContext);
  if (!context) {
    throw new Error("useCraftKitState must be used within a CraftKitProvider");
  }
  return context;
};

export function CraftKitProvider({
  children,
  initialContext = CRAFT_KIT_SHARED_STATE,
}: CraftKitProviderProps) {
  const [craftKitState, setCraftKitState] = useState<CraftKitState>(initialContext);
  const [preferences, setPreferences] = useLocalStorage<Preferences>(
    craftKitState.storageKeys.preferences || "preferences",
    initialContext.preferences
  );

  const updatePreferences = useCallback(
    (newPreferences: Preferences) => {
      setPreferences((prevPreferences) => ({
        ...prevPreferences,
        ...newPreferences,
      }));

      setCraftKitState((prevState) => ({
        ...prevState,
        preferences: {
          ...prevState.preferences,
          ...newPreferences,
        },
      }));
    },
    [setPreferences, setCraftKitState, preferences]
  );

  const contextValue: CraftKitContextProps = {
    craftKitState,
    setCraftKitState,
    updatePreferences,
  };

  return (
    <CraftKitContext.Provider value={contextValue}>
      {children}
    </CraftKitContext.Provider>
  );
}
