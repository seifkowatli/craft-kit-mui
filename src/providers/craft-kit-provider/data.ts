import { CraftKitState, NavigationItem } from "./interfaces";


export const defaultNavigationData: NavigationItem[] = [
  {
    label: "nav.administration",
    icon: "admin_panel_settings",
    permissions: [],
    subItems: [
      {
        label: "nav.roles",
        icon: "badge",
        path: "/administration/roles",
        permissions: [],
      },
      {
        label: "nav.admins",
        icon: "supervisor_account",
        path: "/administration/admins",
        permissions: [],
      },
    ],
  },
  {
    label: "nav.predefinedData",
    path: "/predefined-data",
    icon: "info",
    permissions: [],
  },
];

export const CRAFT_KIT_SHARED_STATE: CraftKitState = {
  localeMessages: {},
  langs: {},
  storageKeys: {
    preferences: "user_preferences",
    token: "access_token",
  },
  defaultHost: "",
  roles: [],
  preferences: {
    lang: "en",
    theme: "light",
  },
  navigationData: defaultNavigationData,
};


