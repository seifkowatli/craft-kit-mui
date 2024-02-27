import { createContext, useCallback, useContext, useState } from 'react';

export const NOTIFICATIONS_INITIAL_STATE = {
  isOpen: false,
  severity: 'info',
  message: '',
};

// initializing context
export const NotificationsContext = createContext(NOTIFICATIONS_INITIAL_STATE);

// setting a helper function to use context
export const useNotifications = () => useContext(NotificationsContext);

export function NotificationsProvider({ children }) {
  const [notification, setNotification] = useState(NOTIFICATIONS_INITIAL_STATE);

  const dismiss = useCallback(() =>
    setNotification(NOTIFICATIONS_INITIAL_STATE)
  );

  const notify = useCallback((severity, message, manualDismiss = false) => {
    setNotification({ isOpen: true, severity, message });
    if (!manualDismiss) setTimeout(dismiss, 3000);
  }, []);

  return (
    <NotificationsContext.Provider value={{ notification, notify, dismiss }}>
      {children}
    </NotificationsContext.Provider>
  );
}
