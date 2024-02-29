import { IntlProvider } from "react-intl";

import { useCraftKitState } from "../craft-kit-provider";

export function I18nProvider({ children }) {
  const {
    craftKitState: { localeMessages, preferences },
  } = useCraftKitState();

  return (
    <IntlProvider locale={preferences.lang} messages={localeMessages[preferences.lang]}>
      {children}
    </IntlProvider>
  );
}
