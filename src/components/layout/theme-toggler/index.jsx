import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { useCraftKitState } from '~/providers';

const ThemeToggler = () => {
  const {craftKitState : {preferences},  updatePreferences} = useCraftKitState();  

  const getNewTheme = oldTheme => (oldTheme === 'dark' ? 'light' : 'dark');

  const toggleTheme = () =>
    updatePreferences({
      theme: getNewTheme(preferences.theme),
    });

  return (
    <Tooltip title={`${getNewTheme(preferences.theme)} theme`}>
      <IconButton onClick={toggleTheme}>
        {preferences.theme === 'light' ? <DarkMode /> : <LightMode />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggler;
