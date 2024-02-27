import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export const ReactQueryProvider = ({ children }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );
  
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
