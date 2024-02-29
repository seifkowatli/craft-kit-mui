import { createContext, ReactNode, useContext, useState, Dispatch, SetStateAction,
} from "react";

interface CraftKitProviderProps {
  children: ReactNode;
  initialContext: CraftKitState;
}

interface StorageKeys {
  preferences?: string;
  token: string | null;
}

interface Role {
  permissions: string[];
}

interface CraftKitState {
  localeMessages: Record<string, unknown>;
  langs: Record<string, unknown>;
  currentLang: string;
  storageKeys: StorageKeys;
  currentTheme: "light" | "dark";
  defaultHost: string;
  roles: Role[];
}

interface CraftKitContextProps {
  craftKitState: CraftKitState;
  setCraftKitState: Dispatch<SetStateAction<CraftKitState>>;
}

export const CRAFT_KIT_SHARED_STATE: CraftKitState = {
  localeMessages: {},
  langs: {},
  currentLang: "",
  storageKeys: {
    token: null,
  },
  currentTheme: "light",
  defaultHost: "",
  roles: [],
};

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
  initialContext: CraftKitState = CRAFT_KIT_SHARED_STATE,
}: CraftKitProviderProps) {
  const [craftKitState, setCraftKitState] = useState<CraftKitState>(CraftKitState);

  const contextValue: CraftKitContextProps = {
    craftKitState,
    setCraftKitState,
  };

  return (
    <CraftKitContext.Provider value={contextValue}>
      {children}
    </CraftKitContext.Provider>
  );
}
