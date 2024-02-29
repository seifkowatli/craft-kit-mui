import { IntlProvider } from "react-intl";

import { useCraftKitState } from "../craft-kit-provider";

export function I18nProvider({ children }) {
  const {
    craftKitState: { localeMessages, currentLang },
  } = useCraftKitState();

  return (
    <IntlProvider locale={currentLang} messages={localeMessages[currentLang]}>
      {children}
    </IntlProvider>
  );
}
