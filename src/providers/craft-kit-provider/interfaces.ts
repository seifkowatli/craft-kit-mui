import { Dispatch, ReactNode, SetStateAction } from "react";

export interface CraftKitProviderProps {
  children: ReactNode;
  initialContext: CraftKitState;
}

export interface StorageKeys {
  preferences?: string;
  token: string | null;
}

export interface Role {
  permissions: string[];
}

export interface CraftKitState {
  localeMessages: Record<string, unknown>;
  langs: Record<string, unknown>;
  storageKeys: StorageKeys;
  defaultHost: string;
  roles: Role[];
  preferences: Preferences;
  navigationData: NavigationItem[];
}

export interface CraftKitContextProps {
  craftKitState: CraftKitState;
  setCraftKitState: Dispatch<SetStateAction<CraftKitState>>;
  updatePreferences: (newPreferences: Preferences) => void;
}

export interface Preferences {
  lang: string;
  theme: "light" | "dark";
}

export interface NavigationItemWithPath {
  label: string;
  icon: string;
  path: string;
  permissions: string[];
}

export interface NavigationItemWithSubItems {
  label: string;
  icon: string;
  permissions: string[];
  subItems: NavigationItem[];
}

export type NavigationItem = NavigationItemWithPath | NavigationItemWithSubItems;


