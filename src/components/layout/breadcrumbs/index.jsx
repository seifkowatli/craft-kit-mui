import { Home } from '@mui/icons-material';
import { Box, Breadcrumbs, Link } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { isEmpty } from '~/utils';
import { styles } from './styles';

const AppBreadcrumbs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [breadcrumbsPaths, setBreadcrumbsPaths] = useState([]);

  useEffect(() => {
    let pathsArray = location.pathname.split('/');
    pathsArray.shift();
    setBreadcrumbsPaths(pathsArray);
  }, [location]);

  return (
    <Box sx={styles.root}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={styles.homeLink}
          color="inherit"
          onClick={() => navigate('/')}
        >
          <Home sx={styles.homeIcon}fontSize="inherit" />
          Home
        </Link>

        {!isEmpty(breadcrumbsPaths) &&
          breadcrumbsPaths.map((path, index) => (
            <Link
              underline="hover"
              sx={styles.subLink}
              color="inherit"
              key={`${path}-breadcrumb-item-${index}`}
              onClick={() =>
                navigate(`/${breadcrumbsPaths.splice(0, index + 1).join('/')}`)
              }
            >
              {path}
            </Link>
          ))}
      </Breadcrumbs>
    </Box>
  );
};

export default AppBreadcrumbs;
