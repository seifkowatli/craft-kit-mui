import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { Box } from '@mui/material';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { useCraftKitState } from '~/providers';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});
const cacheLtr = createCache({
  key: 'muiltr',
});
 

export const EmotionCacheProvider = ({ children }) => {
  const {craftKitState : {currentLang}} = useCraftKitState();


  const isRtl = () => currentLang === 'ar';
  return (
    <CacheProvider value={isRtl() ? cacheRtl : cacheLtr}>
      <Box dir={isRtl() ? 'rtl' : 'ltr'}>{children}</Box>
    </CacheProvider>
  );
};
